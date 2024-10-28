"use client";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Incident, IncidentStatus } from "@/app/types/incident";
import { useState } from "react";

const statusColors: Record<IncidentStatus, string> = {
  investigating: "bg-yellow-500",
  identified: "bg-orange-500",
  monitoring: "bg-blue-500",
  resolved: "bg-green-500",
};

export function IncidentCard({ incident }: { incident: Incident }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <h3 className="font-semibold">{incident.title}</h3>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{incident.severity}</Badge>
            <Badge className={statusColors[incident.status]}>
              {incident.status}
            </Badge>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Created {new Date(incident.createdAt).toLocaleDateString()}
        </div>
        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Updates</h4>
              {incident.updates.map((update) => (
                <div
                  key={update.id}
                  className="rounded-lg bg-muted p-3 text-sm"
                >
                  <div className="flex justify-between">
                    <Badge variant="outline">{update.status}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(update.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-2">{update.message}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-2">Affected Services</h4>
              <div className="flex gap-2">
                {incident.services.map((service) => (
                  <Badge key={service} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
