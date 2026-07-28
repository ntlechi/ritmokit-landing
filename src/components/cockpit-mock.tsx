"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, Radar, UserPlus } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type CockpitDict = Dictionary["hero"]["cockpit"];

interface ClassRow {
  id: "salsa" | "bachata" | "kizomba";
  leads: number;
  follows: number;
  capacity: number;
}

const INITIAL_ROWS: ClassRow[] = [
  { id: "salsa", leads: 11, follows: 12, capacity: 16 },
  { id: "bachata", leads: 7, follows: 12, capacity: 16 },
  { id: "kizomba", leads: 9, follows: 8, capacity: 14 },
];

/* Scripted loop of live registrations so the radar feels alive but stays believable. */
const EVENTS: Array<{ row: number; role: "leads" | "follows" }> = [
  { row: 1, role: "leads" },
  { row: 0, role: "follows" },
  { row: 2, role: "follows" },
  { row: 1, role: "leads" },
  { row: 0, role: "leads" },
  { row: 2, role: "leads" },
];

export function CockpitMock({ dict }: { dict: CockpitDict }) {
  const reduceMotion = useReducedMotion();
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [tick, setTick] = useState(0);
  const [toastKey, setToastKey] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setTick((t) => {
        const event = EVENTS[t % EVENTS.length];
        setRows((prev) =>
          prev.map((row, index) => {
            if (index !== event.row) return row;
            const next = { ...row, [event.role]: row[event.role] + 1 };
            // Loop the demo back to the start once a class fills up.
            if (next.leads + next.follows >= next.capacity * 2 - 2) {
              return INITIAL_ROWS[index];
            }
            return next;
          })
        );
        setToastKey((k) => k + 1);
        return t + 1;
      });
    }, 2600);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div className="glass-card relative w-full max-w-md rounded-2xl p-5 sm:p-6">
      {/* Window chrome */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radar className="h-4 w-4 text-accent" aria-hidden="true" />
          <span className="font-display text-sm font-bold">{dict.title}</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-positive">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-positive" aria-hidden="true" />
          {dict.live}
        </span>
      </div>

      <p className="mb-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink-faint">
        <Activity className="h-3.5 w-3.5" aria-hidden="true" />
        {dict.parityRadar}
      </p>

      <div className="space-y-4">
        {rows.map((row) => {
          const gap = Math.abs(row.leads - row.follows);
          const balanced = gap <= 1;
          return (
            <div key={row.id} className="rounded-xl border border-line bg-surface p-3.5">
              <div className="mb-2.5 flex items-center justify-between gap-2">
                <span className="truncate text-sm font-medium">{dict.classes[row.id]}</span>
                <span
                  className={
                    balanced
                      ? "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-positive"
                      : "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-negative"
                  }
                  style={{
                    background: balanced ? "var(--positive-soft)" : "var(--negative-soft)",
                  }}
                >
                  {balanced ? dict.balanced : `${dict.waitlistOpened} · +${gap}`}
                </span>
              </div>
              <ParityBar label={dict.leads} value={row.leads} max={row.capacity} tone="lead" />
              <div className="h-1.5" />
              <ParityBar label={dict.follows} value={row.follows} max={row.capacity} tone="follow" />
            </div>
          );
        })}
      </div>

      {/* Live registration toast */}
      <div className="pointer-events-none absolute -right-3 -top-3 sm:-right-6">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={toastKey}
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card flex items-center gap-2 rounded-full py-2 pl-2.5 pr-4"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{
                background: "linear-gradient(120deg, var(--accent-from), var(--accent-to))",
              }}
            >
              <UserPlus className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap text-xs font-semibold">{dict.newRegistration}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ParityBar({
  label,
  value,
  max,
  tone,
}: {
  label: string;
  value: number;
  max: number;
  tone: "lead" | "follow";
}) {
  const percent = Math.min(100, (value / max) * 100);
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-20 shrink-0 text-[11px] font-medium text-ink-muted">{label}</span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-strong">
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              tone === "lead"
                ? "linear-gradient(90deg, var(--accent-from), color-mix(in oklab, var(--accent-from), var(--accent-to) 35%))"
                : "linear-gradient(90deg, color-mix(in oklab, var(--accent-to), var(--accent-from) 35%), var(--accent-to))",
          }}
          animate={{ width: `${percent}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
      <span className="w-8 shrink-0 text-right text-[11px] font-semibold tabular-nums text-ink-muted">
        {value}/{max}
      </span>
    </div>
  );
}
