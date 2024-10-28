"use client";
import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  console.log("jhgvjjhbjhb");
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <SignIn />;
    </div>
  );
}
