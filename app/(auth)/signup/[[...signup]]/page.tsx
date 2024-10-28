"use client";
import { SignUp, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <SignUp />
    </div>
  );
}
