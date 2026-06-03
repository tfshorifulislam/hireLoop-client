'use client';

import React, { useState } from "react";
import {
    Form,
    TextField,
    Label,
    Input,
    FieldError,
    Description,
    Button,
    Radio,
    RadioGroup,
} from "@heroui/react";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignUpPage() {

    const [role, setRole] = useState("seeker");

    const handleSingUp = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const { data, error } = await signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            role: role,
        })

        if (error) {
            console.error("Signup error:", error);
            alert(error.message || "An error occurred during signup. Please try again.");
            return;
        }
        if (data) {
            console.log("Signup successful:", data);
            alert("Signup successful! Please check your email to verify your account.");
            redirect('/');
        }
    }


    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-6">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 h-96 w-96 bg-purple-600/30 blur-[150px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-500/30 blur-[150px]" />

            <div className="relative z-10 grid lg:grid-cols-2 w-full max-w-6xl rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl">

                {/* Left Side */}
                <div className="hidden lg:flex flex-col justify-center p-14 text-white">
                    <h1 className="text-6xl font-bold leading-tight">
                        Build Your
                        <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Dream Career
                        </span>
                    </h1>

                    <p className="mt-6 text-zinc-400 text-lg max-w-md">
                        Join thousands of professionals and recruiters finding
                        opportunities every day.
                    </p>

                    <div className="mt-12 flex gap-8">
                        <div>
                            <h3 className="text-3xl font-bold">50K+</h3>
                            <p className="text-zinc-500">Users</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">10K+</h3>
                            <p className="text-zinc-500">Jobs</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">98%</h3>
                            <p className="text-zinc-500">Success</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-white/5 backdrop-blur-xl p-8 lg:p-12">

                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-white">
                            Create Account
                        </h2>

                        <p className="text-zinc-400 mt-2">
                            Start your journey today.
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

                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px bg-white/10 flex-1" />
                        <span className="text-zinc-500 text-sm">
                            OR CONTINUE WITH EMAIL
                        </span>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <Form className="space-y-5" onSubmit={handleSingUp}>

                        <TextField
                            isRequired
                            name="name"
                            type="text"
                            validate={(value) => {
                                if (value.length < 2) {
                                    return "Name must be at least 2 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>

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
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <div className="flex flex-col gap-4">
                            <Label>Subscription plan</Label>

                            <RadioGroup
                                onChange={(value) => setRole(value)}
                                defaultValue="seeker"
                                name="job-seeker"
                                orientation="horizontal"
                            >
                                <Radio value="seeker">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>

                                    <Radio.Content>
                                        <Label>Job Seeker</Label>
                                    </Radio.Content>
                                </Radio>

                                <Radio value="recruiter">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>

                                    <Radio.Content>
                                        <Label>Recruiter</Label>
                                    </Radio.Content>
                                </Radio>
                            </RadioGroup>
                        </div>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }

                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }

                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }

                                return null;
                            }}
                        >
                            <Label>Password</Label>

                            <Input placeholder="Enter your password" />

                            <Description>
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>

                            <FieldError />
                        </TextField>

                        <Button
                            type="submit"
                            className="
      w-full
      h-12
      text-white
      font-semibold
      bg-gradient-to-r
      from-purple-600
      via-indigo-600
      to-cyan-500
      hover:scale-[1.02]
      transition
    "
                        >
                            Create Account
                        </Button>

                        <p className="text-center text-zinc-500 text-sm">
                            Already have an account?
                            <span className="text-cyan-400 ml-1 cursor-pointer">
                                Sign In
                            </span>
                        </p>

                    </Form>
                </div>
            </div>
        </div>
    );
}