"use client"

import React from "react"

interface NotificationTickerProps {
  messages?: string[]
  speedMs?: number
  className?: string
}

export default function NotificationTicker({
  messages = [
    "Admissions Open 2025 – Apply Now",
    "Placement Drive this week – Check the schedule",
    "Research Symposium submissions close on 15 Oct",
    "Campus Fest coming soon – Stay tuned",
  ],
  speedMs = 25000,
  className = "",
}: NotificationTickerProps) {
  const items = [...messages, ...messages]

  return (
    <div className={`w-full border-b border-border bg-primary/5 text-foreground ${className}`} role="region" aria-label="Notifications" style={{ zIndex: 40 }}>
      <div className="relative overflow-hidden flex items-stretch">
        {/* Left label */}
        <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground/90" />
          <span>Latest News</span>
        </div>

        {/* Scrolling area */}
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary/5 to-transparent" />

          <div className="whitespace-nowrap">
            <div
              className="inline-flex w-max items-center gap-8 py-2 will-change-transform"
              style={{
                animation: `ticker ${speedMs}ms linear infinite`,
              }}
            >
              {items.map((msg, idx) => (
                <span key={idx} className="inline-flex items-center gap-2 text-sm">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{msg}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}


