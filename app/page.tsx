import AuthButton from "../components/AuthButton";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          <SignUpUserSteps />
          <ConnectSupabaseSteps />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://media.istockphoto.com/id/521203614/photo/monkey-taking-a-funny-selfie.jpg?s=612x612&w=0&k=20&c=4qOYatm9DpskZLSsUjjSoWAY63NmbwhdF2UJWN0u5vo="
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            PCMB Solutions{" "}
          </a>
        </p>
      </footer>
    </div>
  );
}
