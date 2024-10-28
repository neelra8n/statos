import { OrganizationMember } from "./organization";

export interface User {
    id: string;
    email: string;
    name: string;
    avatarUrl?: string;
    organizations: OrganizationMember[];
    createdAt: Date;
    updatedAt: Date;
}