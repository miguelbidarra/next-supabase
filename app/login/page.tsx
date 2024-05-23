import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { login, signup, loginGoogle, signIn, signUp } from "./actions";
import Image from "next/image";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className=" animate-in w-full max-w-md bg-gray-200 rounded-lg shadow-md p-6 my-4">
        <h2 className="text-2xl font-semibold text-center">Google Login</h2>

        <form className="flex-1 flex justify-center items-center">
          <button
            className="hover:bg-gray-500 p-4 my-4 rounded-xl"
            formAction={loginGoogle}
          >
            <Image
              className="mx-auto"
              src="/google-mark.png"
              width={50}
              height={50}
              alt="Google logo"
            />
          </button>
        </form>

        <h2 className="text-2xl font-semibold text-center">
          Supabase Next.js Starter down here
        </h2>
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton
            formAction={signIn}
            className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing In..."
          >
            Sign In
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>

        <h2 className="text-2xl font-semibold text-center">
          User Managment App down here
        </h2>
        <form className="mt-4">
          <label className="flex flex-col my-4" htmlFor="email">
            Email:
          </label>
          <input
            className="input input-bordered w-full"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <label className="flex flex-col my-4" htmlFor="password">
            Password:
          </label>
          <input
            className="input input-bordered w-full"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button
            className="btn btn-success text-white w-full py-2 px-4 mt-4"
            formAction={login}
          >
            Log in
          </button>
          <button className="btn w-full py-2 px-4 mt-4" formAction={signup}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
