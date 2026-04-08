'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SP_OPTIONS } from '@/lib/constants';

const schema = z.object({
  name: z.string().min(1),
  grade: z.coerce.number().min(1).max(6),
  sp_affiliation: z.enum(SP_OPTIONS),
  tags: z.array(z.string()).max(5)
});

type FormValues = z.infer<typeof schema>;

export default function ProfileSetupPage() {
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { tags: [] }
  });

  return (
    <form className="space-y-3 p-4" onSubmit={handleSubmit(() => (window.location.href = '/home'))}>
      <h1 className="text-xl font-bold text-brand-700">プロフィール設定</h1>
      <input {...register('name')} placeholder="なまえ" className="w-full rounded-2xl p-3" />
      <input {...register('grade')} type="number" placeholder="学年" className="w-full rounded-2xl p-3" />
      <select {...register('sp_affiliation')} className="w-full rounded-2xl p-3">
        {SP_OPTIONS.map((sp) => (
          <option key={sp}>{sp}</option>
        ))}
      </select>
      <button className="btn-primary w-full">保存してホームへ</button>
    </form>
  );
}
