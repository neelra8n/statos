import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

interface Organization {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}

interface UseOrganizationReturn {
    organization: Organization | null;
    isLoading: boolean;
    error: Error | null;
}

export function useOrganization(): UseOrganizationReturn {
    const { getToken } = useAuth();
    const [organization, setOrganization] = useState<Organization | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // async function fetchOrganization() {
        //     try {
        //         setIsLoading(true);
        //         // Get the authentication token
        //         const token = await getToken();

        //         // Fetch organization data from your API
        //         const response = await fetch('/api/organization', {
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //             },
        //         });

        //         if (!response.ok) {
        //             throw new Error('Failed to fetch organization');
        //         }

        //         const data = await response.json();

        //         // Transform the data into the Organization type
        //         const org: Organization = {
        //             id: data.id,
        //             name: data.name,
        //             slug: data.slug || generateSlug(data.name), // Fallback to generating slug from name
        //             createdAt: new Date(data.createdAt),
        //             updatedAt: new Date(data.updatedAt),
        //         };

        //         setOrganization(org);
        //         setError(null);
        //     } catch (err) {
        //         setError(err instanceof Error ? err : new Error('An error occurred'));
        //         setOrganization(null);
        //     } finally {
        //         setIsLoading(false);
        //     }
        // }

        // fetchOrganization();
    }, []); // Empty dependency array means this effect runs once on mount

    return { organization, isLoading, error };
}

// Helper function to generate a slug from organization name
function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}