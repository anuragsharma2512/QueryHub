"use client";

import Link from "next/link";
import { LockKeyhole, MessageSquareHeart, Sparkles, Users2 } from "lucide-react";

const highlights = [
  {
    title: "Focused threads",
    description: "Ask clearly and keep every discussion easy to follow.",
    icon: MessageSquareHeart,
  },
  {
    title: "Trusted answers",
    description: "Votes and reputation help the best responses stand out fast.",
    icon: Sparkles,
  },
  {
    title: "Built for community",
    description: "Profiles, questions, and answers stay connected in one place.",
    icon: Users2,
  },
];

export default function AuthShowcase() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl sm:p-10">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-sky-100">
        <LockKeyhole className="size-4 text-cyan-300" />
        Secure access to your developer space
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        Welcome back to
        <span className="landing-gradient-text"> QueryHub.</span>
      </h1>

      <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
        Sign in or create your account to ask questions, share answers, and grow your presence in
        the community.
      </p>

      <div className="mt-8 grid gap-4">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                  <Icon className="size-5 text-cyan-300" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
        <Link href="/" className="text-cyan-300 transition-colors hover:text-cyan-200">
          Back to home
        </Link>
        <span className="h-1 w-1 rounded-full bg-white/30" />
        <Link href="/questions" className="transition-colors hover:text-white">
          Browse questions
        </Link>
      </div>
    </div>
  );
}
