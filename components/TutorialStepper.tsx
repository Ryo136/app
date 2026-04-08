import { TUTORIAL_STEPS } from '@/lib/constants';

export function TutorialStepper({ step }: { step: number }) {
  return (
    <ol className="card space-y-2">
      {TUTORIAL_STEPS.map((label, idx) => (
        <li key={label} className={`rounded-2xl p-2 text-sm ${idx + 1 <= step ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-500'}`}>
          {idx + 1}. {label}
        </li>
      ))}
    </ol>
  );
}
