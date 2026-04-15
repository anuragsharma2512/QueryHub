import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

import AskQuestionClient from "./AskQuestionClient";

export default function AskQuestionPage() {
  return (
    <main className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16">
      <div className="landing-aurora landing-aurora-left" />
      <div className="landing-aurora landing-aurora-right" />
      <AnimatedGridPattern
        numSquares={56}
        maxOpacity={0.16}
        duration={7}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 h-full w-full text-sky-200/10",
          "[mask-image:radial-gradient(circle_at_center,white,transparent_78%)]"
        )}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Link
          href="/questions"
          className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
        >
          <ChevronLeft className="size-4" />
          Back to questions
        </Link>

        <div className="mt-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-sky-100 backdrop-blur-xl">
            Create a thread
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Ask a question
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Start a clean discussion with the same form and database flow your project already
            uses.
          </p>
        </div>

        <div className="mt-10">
          <AskQuestionClient />
        </div>
      </div>
    </main>
  );
}
