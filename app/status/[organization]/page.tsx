import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { Badge } from "@/app/components/ui/badge";
import { Check, AlertTriangle, AlertCircle, Clock } from "lucide-react";

interface Service {
  id: number;
  name: string;
  status: "operational" | "degraded" | "outage" | "maintenance";
  description: string;
  updatedAt: string;
}

interface Incident {
  id: number;
  title: string;
  status: "investigating" | "identified" | "monitoring" | "resolved";
  severity: "critical" | "major" | "minor";
  createdAt: string;
  updatedAt: string;
  affectedServices: string[];
  updates: {
    id: number;
    content: string;
    createdAt: string;
    status: string;
  }[];
}

const StatusBadge = ({ status }: { status: Service["status"] }) => {
  const variants = {
    operational: {
      icon: Check,
      className: "bg-green-500/15 text-green-500 hover:bg-green-500/25",
    },
    degraded: {
      icon: AlertTriangle,
      className: "bg-yellow-500/15 text-yellow-500 hover:bg-yellow-500/25",
    },
    outage: {
      icon: AlertCircle,
      className: "bg-red-500/15 text-red-500 hover:bg-red-500/25",
    },
    maintenance: {
      icon: Clock,
      className: "bg-blue-500/15 text-blue-500 hover:bg-blue-500/25",
    },
  };

  const { icon: Icon, className } = variants[status] || variants.operational;

  return (
    <Badge variant="secondary" className={className}>
      <Icon className="w-3 h-3 mr-1" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export default function StatusPage() {
  // Mock data - replace with actual data fetching
  const services: Service[] = [
    {
      id: 1,
      name: "API",
      status: "operational",
      description: "Main API Service",
      updatedAt: "2024-10-28T10:00:00Z",
    },
    {
      id: 2,
      name: "Web App",
      status: "degraded",
      description: "Customer Web Application",
      updatedAt: "2024-10-28T09:45:00Z",
    },
    {
      id: 3,
      name: "Database",
      status: "operational",
      description: "Primary Database Cluster",
      updatedAt: "2024-10-28T10:00:00Z",
    },
    {
      id: 4,
      name: "CDN",
      status: "maintenance",
      description: "Content Delivery Network",
      updatedAt: "2024-10-28T08:30:00Z",
    },
  ];

  const incidents: Incident[] = [
    {
      id: 1,
      title: "Degraded Performance in Web Application",
      status: "investigating",
      severity: "major",
      createdAt: "2024-10-28T09:45:00Z",
      updatedAt: "2024-10-28T10:00:00Z",
      affectedServices: ["Web App"],
      updates: [
        {
          id: 1,
          content:
            "We are investigating reports of slow response times in the web application.",
          createdAt: "2024-10-28T09:45:00Z",
          status: "investigating",
        },
        {
          id: 2,
          content:
            "The issue has been identified as increased load on application servers.",
          createdAt: "2024-10-28T10:00:00Z",
          status: "identified",
        },
      ],
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  const getSystemStatus = () => {
    if (services.some((s) => s.status === "outage"))
      return "Major System Outage";
    if (services.some((s) => s.status === "degraded"))
      return "Partial System Outage";
    if (services.some((s) => s.status === "maintenance"))
      return "System Maintenance";
    return "All Systems Operational";
  };

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-4xl">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">System Status</h1>
        <p className="text-xl font-medium">{getSystemStatus()}</p>
      </div>

      {/* Active Incidents */}
      {incidents.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Active Incidents</h2>
          {incidents.map((incident) => (
            <Alert
              key={incident.id}
              variant={
                incident.severity === "critical" ? "destructive" : "default"
              }
            >
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="flex items-center gap-2">
                {incident.title}
                <Badge variant="outline" className="ml-2">
                  {incident.status}
                </Badge>
              </AlertTitle>
              <AlertDescription className="mt-4 space-y-4">
                <div className="text-sm text-muted-foreground">
                  Affected services: {incident.affectedServices.join(", ")}
                </div>
                {incident.updates.map((update) => (
                  <div key={update.id} className="pl-4 border-l-2 border-muted">
                    <p className="text-sm">{update.content}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatDate(update.createdAt)}
                    </p>
                  </div>
                ))}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      )}

      {/* Services Status */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Services</h2>
        <div className="grid gap-4">
          {services.map((service) => (
            <Card key={service.id}>
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <CardTitle className="text-lg font-medium">
                  {service.name}
                </CardTitle>
                <StatusBadge status={service.status} />
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Last updated: {formatDate(service.updatedAt)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
