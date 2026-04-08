import { AvatarEditor } from '@/components/AvatarEditor';
import { TutorialStepper } from '@/components/TutorialStepper';

export default function TutorialPage() {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold text-brand-700">初回チュートリアル</h1>
      <TutorialStepper step={8} />
      <AvatarEditor onChange={() => {}} />
      <a href="/profile/setup" className="btn-primary block text-center">
        次へ
      </a>
    </div>
  );
}
