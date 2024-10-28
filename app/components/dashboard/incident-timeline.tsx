import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Incident } from "@/app/types/incident";

interface IncidentTimelineProps {
  incidents: Incident[];
}

export function IncidentTimeline({ incidents }: IncidentTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Incidents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {incidents.map((incident) => (
            <div key={incident.id} className="flex items-start space-x-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">
                  {incident.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {incident.status} -{" "}
                  {new Date(incident.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
