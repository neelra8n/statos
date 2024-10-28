// src/app/api/organization/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
// import prisma from "@/app/lib/prisma"; // Assuming you have prisma client setup

export async function GET() {
    try {
        const { userId, orgId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Fetch the organization from your database
        // const organization = await prisma.organization.findFirst({
        //     where: {
        //         id: orgId as string,
        //         members: {
        //             some: {
        //                 userId: userId
        //             }
        //         }
        //     },
        // });

        if (!organization) {
            return new NextResponse("Organization not found", { status: 404 });
        }

        return NextResponse.json(organization);
    } catch (error) {
        console.error("[ORGANIZATION_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}