// src/app/(dashboard)/incidents/page.tsx
import { CreateIncidentDialog } from "@/app/components/incidents/create-incident-dailog";
import { IncidentCard } from "@/app/components/incidents/incident-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

// Mock data - replace with actual data fetching
const mockIncidents = [
  {
    id: "1",
    title: "API Performance Degradation",
    status: "monitoring" as const,
    severity: "major" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    services: ["API", "Database"],
    updates: [
      {
        id: "1",
        status: "investigating" as const,
        message: "We are investigating reports of slow API response times.",
        createdAt: new Date(Date.now() - 3600000),
      },
      {
        id: "2",
        status: "monitoring" as const,
        message:
          "The root cause has been identified and fixes are being monitored.",
        createdAt: new Date(),
      },
    ],
  },
  {
    id: "2",
    title: "Website Loading Issues",
    status: "resolved" as const,
    severity: "minor" as const,
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(),
    services: ["Website"],
    updates: [
      {
        id: "3",
        status: "investigating" as const,
        message: "Investigating reports of slow page loads.",
        createdAt: new Date(Date.now() - 86400000),
      },
      {
        id: "4",
        status: "resolved" as const,
        message:
          "The issue has been resolved. CDN configuration has been updated.",
        createdAt: new Date(Date.now() - 82800000),
      },
    ],
  },
];

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Incidents</h1>
        <CreateIncidentDialog />
      </div>

      <div className="flex gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="investigating">Investigating</SelectItem>
              <SelectItem value="identified">Identified</SelectItem>
              <SelectItem value="monitoring">Monitoring</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Severity</SelectLabel>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="major">Major</SelectItem>
              <SelectItem value="minor">Minor</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {mockIncidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}
