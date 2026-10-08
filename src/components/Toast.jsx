import { CheckCircle2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message, onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          className="fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-emerald-500/20 bg-slate-900 px-4 py-3 text-sm text-slate-200 shadow-2xl"
          role="status"
        >
          <CheckCircle2
            size={18}
            className="text-emerald-400"
          />

          <span>{message}</span>

          <button
            onClick={onClose}
            className="ml-2 text-slate-500 hover:text-white"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}