import { Incident } from "./incident";
import { Service } from "./service";

export interface Organization {
    id: string;
    name: string;
    slug: string;
    logo?: string;
    services: Service[];
    incidents: Incident[];
}