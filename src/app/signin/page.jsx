'use client';

import React from "react";
import {
    Form,
    TextField,
    Label,
    Input,
    FieldError,
    Button,
    Link,
} from "@heroui/react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();

    const handleSingIn = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await signIn.email({
            email: userData.email,
            password: userData.password,
        });

        if (error) {
            console.error(error);
            alert(error.message || "Login failed");
            return;
        }

        if (data) {
            router.push("/");
        }
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-6">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 h-96 w-96 bg-purple-600/30 blur-[150px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-500/30 blur-[150px]" />

            <div className="relative z-10 grid lg:grid-cols-2 w-full max-w-6xl rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl">

                {/* LEFT SIDE */}
                <div className="hidden lg:flex flex-col justify-center p-14 text-white">

                    <h1 className="text-6xl font-bold leading-tight">
                        Welcome
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Back
                        </span>
                    </h1>

                    <p className="mt-6 text-zinc-400 text-lg max-w-md">
                        Access your dashboard, manage applications,
                        connect with recruiters and continue your journey.
                    </p>

                    <div className="mt-12 grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-3xl font-bold">120K+</h3>
                            <p className="text-zinc-500">Members</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">15K+</h3>
                            <p className="text-zinc-500">Companies</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">99%</h3>
                            <p className="text-zinc-500">Uptime</p>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="bg-white/5 backdrop-blur-xl p-8 lg:p-12">

                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-5">
                            Welcome Back 👋
                        </div>

                        <h2 className="text-4xl font-bold text-white">
                            Sign In
                        </h2>

                        <p className="text-zinc-400 mt-3">
                            Continue your journey and discover opportunities.
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <Button
                            variant="bordered"
                            className="border-white/10 text-white"
                        >
                            Google
                        </Button>

                        <Button
                            variant="bordered"
                            className="border-white/10 text-white"
                        >
                            GitHub
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px bg-white/10 flex-1" />
                        <span className="text-zinc-500 text-sm">
                            OR CONTINUE WITH EMAIL
                        </span>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    {/* FORM */}
                    <Form className="space-y-5" onSubmit={handleSingIn}>

                        {/* EMAIL */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                                ) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-zinc-300">Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        {/* PASSWORD */}
                        <TextField
                            isRequired
                            name="password"
                            type="password"
                        >
                            <Label className="text-zinc-300">Password</Label>
                            <Input placeholder="••••••••" />
                            <FieldError />
                        </TextField>

                        {/* REMEMBER + FORGOT */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="rounded border-zinc-700 bg-zinc-900"
                                />
                                Remember me
                            </label>

                            <button
                                type="button"
                                className="text-cyan-400 hover:text-cyan-300"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* SUBMIT */}
                        <Button
                            type="submit"
                            className="
                                w-full
                                h-12
                                text-white
                                font-semibold
                                bg-gradient-to-r
                                from-cyan-500
                                via-blue-500
                                to-purple-600
                                shadow-lg
                                shadow-cyan-500/20
                                hover:scale-[1.02]
                                transition-all
                            "
                        >
                            Sign In
                        </Button>

                        {/* SIGNUP LINK */}
                        <p className="text-center text-zinc-500 text-sm">
                            Don’t have an account?
                            <Link href="/signup" className="text-cyan-400 ml-1 cursor-pointer">
                                Sign Up
                            </Link>
                        </p>

                    </Form>
                </div>
            </div>
        </div>
    );
}