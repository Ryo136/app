'use client';

import { motion } from 'framer-motion';

export function ResultUnlockModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-20 grid place-items-center bg-slate-900/40 p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card w-full max-w-sm text-center">
        <h3 className="text-xl font-bold text-brand-700">本日の結果が公開されました！</h3>
        <p className="my-2 text-sm text-slate-600">21:30以降はすれちがい結果を確認できます。</p>
        <button className="btn-primary w-full" onClick={onClose}>
          確認する
        </button>
      </motion.div>
    </div>
  );
}
