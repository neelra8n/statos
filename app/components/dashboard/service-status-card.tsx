import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Service, ServiceStatus } from "@/app/types/service";

const statusColors: Record<ServiceStatus, string> = {
  operational: "bg-green-500",
  degraded: "bg-yellow-500",
  partial_outage: "bg-orange-500",
  major_outage: "bg-red-500",
};

interface ServiceStatusCardProps {
  service: Service;
}

export function ServiceStatusCard({ service }: ServiceStatusCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{service.name}</CardTitle>
        <div
          className={`h-2 w-2 rounded-full ${statusColors[service.status]}`}
        />
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          Last updated {new Date(service.updatedAt).toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  );
}
