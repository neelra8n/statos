// src/types/incident.ts
export type IncidentStatus = 'investigating' | 'identified' | 'monitoring' | 'resolved';
export type IncidentSeverity = 'critical' | 'major' | 'minor';

export interface Incident {
    id: string;
    title: string;
    status: IncidentStatus;
    severity: IncidentSeverity;
    createdAt: Date;
    updatedAt: Date;
    services: string[];
    updates: IncidentUpdate[];
}

export interface IncidentUpdate {
    id: string;
    message: string;
    status: IncidentStatus;
    createdAt: Date;
}