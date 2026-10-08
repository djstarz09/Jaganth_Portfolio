import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduced ? 0 : y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration: reduced ? 0 : 0.6,
        delay: reduced ? 0 : delay
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="section-label">{eyebrow}</p>

      <h2 className="section-title">
        {title}
      </h2>

      {description && (
        <p className="muted mt-4 leading-7">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function TiltCard({ children, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduced
          ? undefined
          : {
              y: -6,
              rotateX: 1,
              rotateY: -1
            }
      }
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      style={{
        transformPerspective: 1000
      }}
    >
      {children}
    </motion.div>
  );
}

export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-slate-800/80 ${className}`}
    />
  );
}