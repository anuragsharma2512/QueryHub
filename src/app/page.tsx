import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  MessageSquareText,
  Search,
  SearchCheck,
  Sparkles,
  Vote,
} from "lucide-react";

import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import NumberTicker from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { value: 12000, suffix: "+", label: "questions waiting for the next great answer" },
  { value: 3400, suffix: "+", label: "builders, learners, and problem-solvers in motion" },
  { value: 89, suffix: "%", label: "of trending threads getting responses in under an hour" },
];

const highlights: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Ask",
    description: "Post clear questions and get straight to the point.",
    icon: Search,
  },
  {
    title: "Answer",
    description: "Helpful replies stay visible and easy to scan.",
    icon: MessageSquareText,
  },
  {
    title: "Vote",
    description: "The best ideas naturally rise to the top.",
    icon: Vote,
  },
];

const signals = [
  "Simple",
  "Fast",
  "Community-driven",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#040816] text-white">
      <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16">
        <div className="landing-aurora landing-aurora-left" />
        <div className="landing-aurora landing-aurora-right" />
        <div className="landing-orb landing-orb-one" />
        <div className="landing-orb landing-orb-two" />
        <AnimatedGridPattern
          numSquares={70}
          maxOpacity={0.22}
          duration={6}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 h-full w-full text-sky-200/10",
            "[mask-image:radial-gradient(circle_at_center,white,transparent_78%)]"
          )}
        />
        <div className="landing-noise" />

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-sky-100 shadow-[0_0_50px_rgba(56,189,248,0.12)] backdrop-blur-xl">
              <Sparkles className="size-4 text-cyan-300" />
              Ask better. Answer faster.
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              A simple Q&amp;A space with
              <span className="landing-gradient-text"> smooth motion.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              QueryHub helps people ask, answer, and vote in one clean flow.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full border border-cyan-300/30 bg-cyan-300 px-6 text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                <Link href="/register">
                  Start building your profile
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/6 px-6 text-white backdrop-blur-xl hover:bg-white/12 hover:text-white"
              >
                <Link href="/questions">Explore live questions</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
              {signals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 backdrop-blur-xl"
                >
                  {signal}
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
                >
                  <div className="flex items-end gap-1 text-3xl font-semibold text-white sm:text-4xl">
                    <NumberTicker value={stat.value} delay={index * 0.12} className="text-white" />
                    <span className="pb-1 text-lg text-cyan-300">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
              <div className="landing-float relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-[0_35px_80px_rgba(2,6,23,0.75)] backdrop-blur-2xl">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Live preview</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">Clean, focused, active</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 p-3">
                    <BadgeCheck className="size-6 text-cyan-300" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Trending thread</p>
                        <h3 className="mt-2 text-lg font-medium text-white">How should auth feel in modern apps?</h3>
                      </div>
                      <div className="size-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-50">
                        24 answers
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm text-slate-200">
                        128 votes
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Community activity</span>
                      <span>92%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="landing-float-delayed absolute -left-8 top-14 hidden w-52 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_25px_55px_rgba(2,6,23,0.6)] backdrop-blur-xl md:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                    <SearchCheck className="size-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Ask clearly</p>
                    <p className="text-xs text-slate-400">Better input, better answers</p>
                  </div>
                </div>
              </div>

              <div className="landing-float-slow absolute -bottom-10 right-4 hidden w-64 rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-4 shadow-[0_25px_55px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:block">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3">
                    <MessageSquareText className="size-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Answer together</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">Simple interactions, clean flow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/8 p-3">
                    <Icon className="size-5 text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-2 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/6 px-8 py-12 text-center shadow-[0_20px_70px_rgba(8,15,33,0.45)] backdrop-blur-xl sm:px-12">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Get started</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Join the conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Clean UI, soft motion, and a simpler first impression.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full border border-cyan-300/30 bg-cyan-300 px-6 text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              <Link href="/questions">
                Browse questions
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/login">Log in to join the discussion</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
