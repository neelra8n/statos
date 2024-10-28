import { ServiceStatusCard } from "@/app/components/dashboard/service-status-card";
import { IncidentTimeline } from "@/app/components/dashboard/incident-timeline";

// Mock data - replace with actual data fetching
const services = [
  {
    id: "1",
    name: "API",
    description: "Main API Service",
    status: "operational" as const,
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Website",
    description: "Main Website",
    status: "degraded" as const,
    updatedAt: new Date(),
  },
];

const incidents = [
  {
    id: "1",
    title: "API Performance Degradation",
    status: "resolved" as const,
    severity: "minor" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    services: ["1"],
    updates: [],
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceStatusCard key={service.id} service={service} />
        ))}
      </div>

      <IncidentTimeline incidents={incidents} />
    </div>
  );
}
