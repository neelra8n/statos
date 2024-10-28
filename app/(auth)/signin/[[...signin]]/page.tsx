"use client";
import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return <SignIn />;
}
