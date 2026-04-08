alter table public.users enable row level security;
alter table public.user_tags enable row level security;
alter table public.encounters enable row level security;
alter table public.encounter_daily_rollups enable row level security;
alter table public.reactions enable row level security;
alter table public.levels enable row level security;
alter table public.puzzle_pieces enable row level security;
alter table public.apartment_residents enable row level security;
alter table public.resident_relationships enable row level security;
alter table public.events enable row level security;
alter table public.event_participants enable row level security;

create policy "users self select" on public.users for select using (auth.uid() = id);
create policy "users self upsert" on public.users for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "user tags self" on public.user_tags for all
using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "encounters own" on public.encounters for select
using (user_a = auth.uid() or user_b = auth.uid());

create policy "encounters insert own" on public.encounters for insert
with check (user_a = auth.uid());

create policy "rollups own" on public.encounter_daily_rollups for select
using (user_a = auth.uid() or user_b = auth.uid());

create policy "reactions own" on public.reactions for select
using (from_user = auth.uid() or to_user = auth.uid());

create policy "reactions send own" on public.reactions for insert
with check (from_user = auth.uid());

create policy "levels own" on public.levels for all
using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());

create policy "puzzle own" on public.puzzle_pieces for all
using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());

create policy "apartment own" on public.apartment_residents for all
using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());

create policy "relation own" on public.resident_relationships for all
using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());

create policy "events student read" on public.events for select using (true);
create policy "event participant own" on public.event_participants for all
using (user_id = auth.uid()) with check (user_id = auth.uid());
