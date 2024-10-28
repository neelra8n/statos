"use client";
import { SignUp, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <SignUp />
    </div>
  );
}
