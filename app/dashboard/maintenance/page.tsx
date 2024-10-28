"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { Plus } from "lucide-react";
import MaintenanceCard from "@/app/components/maintenance/maintenance-card";
import ScheduleMaintenanceDialog from "@/app/components/maintenance/scheduled-maintainance-dailog";

export default function MaintenancePage() {
  const [showScheduleDialog, setShowScheduleDialog] = React.useState(false);

  // Mock data - replace with actual data fetching
  const maintenanceWindows = [
    {
      id: 1,
      title: "Database Upgrade",
      description:
        "Scheduled maintenance for database performance optimization",
      startTime: "2024-10-30T02:00:00Z",
      endTime: "2024-10-30T04:00:00Z",
      status: "scheduled",
      affectedServices: ["Database", "API"],
    },
    {
      id: 2,
      title: "Network Infrastructure Update",
      description: "Regular network maintenance and security patches",
      startTime: "2024-11-05T01:00:00Z",
      endTime: "2024-11-05T03:00:00Z",
      status: "scheduled",
      affectedServices: ["Website", "API", "CDN"],
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Maintenance Windows</h1>
        <Button onClick={() => setShowScheduleDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Schedule Maintenance
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="inProgress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {maintenanceWindows.map((maintenance) => (
            <MaintenanceCard key={maintenance.id} maintenance={maintenance} />
          ))}
        </TabsContent>

        <TabsContent value="inProgress">
          <Card>
            <CardHeader>
              <CardTitle>No Maintenance In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                There are no maintenance windows currently in progress.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Previous Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No completed maintenance windows in the last 30 days.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <ScheduleMaintenanceDialog
        open={showScheduleDialog}
        onClose={() => setShowScheduleDialog(false)}
      />
    </div>
  );
}
