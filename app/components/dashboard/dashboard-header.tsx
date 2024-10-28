"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import { useOrganization } from "@/app/hooks/useOrganization";

export function DashboardHeader() {
  const router = useRouter();
  const { organization } = useOrganization();

  const handleViewStatusPage = () => {
    if (organization?.slug) {
      router.push(`/status/${organization.slug}`);
    }
  };

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="font-bold">Status Page</span>
        </Link>
        <nav className="flex items-center space-x-6 mx-6">
          <Link href="/dashboard" className="text-sm font-medium">
            Overview
          </Link>
          <Link href="/dashboard/incidents" className="text-sm font-medium">
            Incidents
          </Link>
          <Link href="/dashboard/maintenance" className="text-sm font-medium">
            Maintenance
          </Link>
          <Link href="/dashboard/team" className="text-sm font-medium">
            Team
          </Link>
          <Link href="/dashboard/settings" className="text-sm font-medium">
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" onClick={handleViewStatusPage}>
            View Status Page
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
