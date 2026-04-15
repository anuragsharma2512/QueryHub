"use client";

import Link from "next/link";

import QuestionForm from "@/components/QuestionForm";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/Auth";
import { MessageSquarePlus, PenSquare, Sparkles } from "lucide-react";

const tips = [
  "Use a clear title that explains the problem fast.",
  "Add details, context, and what you already tried.",
  "Upload an image if it makes the issue easier to understand.",
];

export default function AskQuestionClient() {
  const { user, hydrated } = useAuthStore();

  if (!hydrated) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center text-slate-300 backdrop-blur-xl">
        Loading your workspace...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
          <MessageSquarePlus className="size-6 text-cyan-300" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Sign in to ask a question</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          Your current form flow expects an authenticated user so the question can be saved with
          the correct author and attachment data.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full border border-cyan-300/30 bg-cyan-300 px-6 text-slate-950 hover:bg-cyan-200"
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/register">Create account</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="inline-flex rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3">
          <PenSquare className="size-6 text-emerald-300" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Before you publish</h2>
        <div className="mt-6 space-y-4">
          {tips.map((tip, index) => (
            <div
              key={tip}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-300">{tip}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
          <div className="flex items-center gap-3 text-cyan-300">
            <Sparkles className="size-4" />
            <span className="text-sm font-medium">Posting as {user.name}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Your existing question form, upload handling, and database write logic are unchanged.
          </p>
        </div>
      </aside>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
        <QuestionForm />
      </div>
    </div>
  );
}
