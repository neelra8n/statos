import { Button } from "@/app/components/ui/button";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  // If the user is logged in, redirect to dashboard
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Status Page</h1>
        <p className="text-xl">Monitor and manage your service status</p>
        <div className="flex gap-4">
          <Button asChild>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </Button>
          <Button asChild variant="outline">
            <SignedOut>
              <SignUpButton />
            </SignedOut>
          </Button>
        </div>
      </div>
    </div>
  );
}
