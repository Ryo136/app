'use client';

import { useState } from 'react';
import { AvatarConfig } from '@/lib/types';

const defaults: AvatarConfig = {
  face: 'round',
  skin: 'light',
  hair: 'short',
  hairColor: 'black',
  eyes: 'normal',
  eyebrow: 'normal',
  nose: 'small',
  mouth: 'smile',
  contour: 'soft',
  glasses: 'none',
  mole: false,
  clothesColor: 'blue'
};

export function AvatarEditor({ value, onChange }: { value?: AvatarConfig; onChange: (v: AvatarConfig) => void }) {
  const [state, setState] = useState<AvatarConfig>(value ?? defaults);

  const update = <K extends keyof AvatarConfig>(key: K, val: AvatarConfig[K]) => {
    const next = { ...state, [key]: val };
    setState(next);
    onChange(next);
  };

  const randomize = () => {
    const next = { ...state, mole: Math.random() > 0.5, hair: Math.random() > 0.5 ? 'short' : 'long' };
    setState(next);
    onChange(next);
  };

  return (
    <section className="card space-y-3">
      <h3 className="font-bold">Mii風アバター</h3>
      <div className="h-24 w-24 rounded-full bg-brand-100" />
      <div className="grid grid-cols-2 gap-2">
        <select value={state.face} onChange={(e) => update('face', e.target.value)} className="rounded-xl p-2">
          <option value="round">丸顔</option>
          <option value="oval">たまご型</option>
        </select>
        <select value={state.hair} onChange={(e) => update('hair', e.target.value)} className="rounded-xl p-2">
          <option value="short">ショート</option>
          <option value="long">ロング</option>
        </select>
      </div>
      <button onClick={randomize} className="btn-secondary w-full">
        ランダム生成
      </button>
    </section>
  );
}
