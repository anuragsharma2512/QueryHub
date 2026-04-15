"use client";

import React from "react";
import { useRouter } from "next/navigation";

import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/Auth";



const Layout = ({children}: {children: React.ReactNode}) => {
  const {session} = useAuthStore();
  const router = useRouter()

  React.useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [session, router])

  if (session) {
    return null
  }

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-28 sm:px-10 lg:px-16">
      <div className="landing-aurora landing-aurora-left" />
      <div className="landing-aurora landing-aurora-right" />
      <div className="landing-orb landing-orb-one" />
      <div className="landing-orb landing-orb-two" />
      <AnimatedGridPattern
        numSquares={64}
        maxOpacity={0.14}
        duration={7}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 h-full w-full text-sky-200/10",
          "mask-[radial-gradient(circle_at_center,white,transparent_80%)]"
        )}
      />
      <div className="landing-noise" />

      <div className="relative z-10 flex min-h-[calc(100vh-14rem)] items-center justify-center">
          <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}


export default Layout
