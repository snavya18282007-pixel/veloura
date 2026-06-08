'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: number) {
  const diff = Math.max(target - Date.now(), 0)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  }
}

export function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime()
  const [time, setTime] = useState(() => getRemaining(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hrs', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Sec', value: time.seconds },
  ]

  return (
    <div className="grid grid-cols-4 gap-2">
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-2xl border border-border bg-secondary px-2 py-3 text-center"
        >
          <p className="font-heading text-2xl font-semibold tabular-nums text-gradient-gold sm:text-3xl">
            {mounted ? String(u.value).padStart(2, '0') : '--'}
          </p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
            {u.label}
          </p>
        </div>
      ))}
    </div>
  )
}
