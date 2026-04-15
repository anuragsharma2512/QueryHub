"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"
import { useAuthStore } from '@/store/Auth'
import React from 'react'
import Link from "next/link";
import { ArrowRight, UserPlus } from "lucide-react";

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};


export default function RegisterPage() {
    const {createAccount, login} = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        // collect data
        const formData = new FormData(e.currentTarget);
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const password = formData.get("password");

        // validate data
        if(!firstname || !lastname || !email || !password){
            setError(()=>"All fields are required");
            return;
        }

        // call the store
        setIsLoading(true);
        setError("");

        const response = await createAccount(
            `${firstname} ${lastname}`,
            email?.toString(),
            password?.toString()
        );

        if(response.error){
            setError(()=> response.error!.message)
        }else{
            const loginResponse = await login(email.toString(),password.toString());
            if(loginResponse.error){
                setError(()=> loginResponse.error!.message);
            }
        }
        setIsLoading(false);
    }
    return (
        <div className="w-full rounded-[2rem] border border-white/10 bg-slate-950/78 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.55)] backdrop-blur-2xl sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <UserPlus className="size-4" />
                Create your account
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                Join QueryHub
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                Start asking questions and building your profile. Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                >
                    Log in
                </Link>
                .
            </p>

            {error && (
                <div className="mt-6 rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                </div>
            )}
            <form className="mt-8 space-y-5 [&_input]:h-12! [&_input]:rounded-xl! [&_input]:border-white/10! [&_input]:bg-white/6! [&_input]:px-4! [&_input]:text-white! [&_input]:placeholder:!text-slate-500 [&_input]:focus-visible:!ring-cyan-400/60 [&_input]:focus-visible:!ring-offset-0" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname" className="text-slate-200">First name</Label>
                        <Input className="text-black" id="firstname" name="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname" className="text-slate-200">Last name</Label>
                        <Input className="text-black"  id="lastname" name="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer>
                    <Label htmlFor="email" className="text-slate-200">Email Address</Label>
                    <Input
                    className="text-black" 
                        id="email"
                        name="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="password" className="text-slate-200">Password</Label>
                    <Input className="text-black"  id="password" name="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <button
                    className="group/btn relative flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 font-medium text-slate-950 transition-colors hover:bg-cyan-200"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Creating account..." : "Sign up"}
                    {!isLoading ? <ArrowRight className="size-4" /> : null}
                    <BottomGradient />
                </button>

                <div className="my-2 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

                <div className="flex flex-col space-y-4">
                    <button
                        className="group/btn relative flex h-12 w-full items-center justify-start space-x-3 rounded-xl border border-white/10 bg-white/6 px-4 font-medium text-white transition-colors hover:bg-white/10"
                        type="button"
                        disabled={isLoading}
                    >
                        <IconBrandGoogle className="h-4 w-4 text-slate-200" />
                        <span className="text-sm text-slate-200">
                            Google
                        </span>
                        <BottomGradient />
                    </button>
                    <button
                        className="group/btn relative flex h-12 w-full items-center justify-start space-x-3 rounded-xl border border-white/10 bg-white/6 px-4 font-medium text-white transition-colors hover:bg-white/10"
                        type="button"
                        disabled={isLoading}
                    >
                        <IconBrandGithub className="h-4 w-4 text-slate-200" />
                        <span className="text-sm text-slate-200">
                            GitHub
                        </span>
                        <BottomGradient />
                    </button>
                </div>
                <p className="pt-2 text-center text-xs text-slate-400">
                    Your signup and auto-login logic remain unchanged.
                </p>
            </form>
        </div>
    );
}
