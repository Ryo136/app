import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createServerSupabase } from '@/lib/supabase';
import { isWithinTrackingWindow, semesterFromDate } from '@/utils/encounter';

export async function POST(request: Request) {
  if (!isWithinTrackingWindow()) {
    return NextResponse.json({ error: 'out_of_tracking_window' }, { status: 400 });
  }

  const cookieStore = await cookies();
  const supabase = createServerSupabase(() =>
    cookieStore.getAll().map(({ name, value }) => ({ name, value }))
  );

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const body = await request.json();
  const semester = semesterFromDate();

  const { error } = await supabase.from('encounters').insert({
    ...body,
    user_a: user.id,
    semester
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
