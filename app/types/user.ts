import { Organization } from "./organization";

export interface User {
    id: string;
    email: string;
    name: string;
    avatarUrl?: string;
    organizations: Organization[];
    createdAt: Date;
    updatedAt: Date;
}