import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface MaintenanceCardProps {
  maintenance: {
    id: number;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    status: string;
    affectedServices: string[];
  };
}

const MaintenanceCard = ({ maintenance }: MaintenanceCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  const getDuration = (start: string, end: string) => {
    const duration = new Date(end).getTime() - new Date(start).getTime();
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">
          {maintenance.title}
        </CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="outline" size="sm">
            Cancel
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {maintenance.description}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(maintenance.startTime)}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              <span>
                Duration:{" "}
                {getDuration(maintenance.startTime, maintenance.endTime)}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {maintenance.affectedServices.map((service) => (
              <span
                key={service}
                className="px-2 py-1 text-xs rounded-full bg-secondary"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaintenanceCard;
