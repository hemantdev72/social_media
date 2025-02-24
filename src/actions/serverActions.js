"use server"; // Mark this as a server action

import prisma from "@/lib/prisma";
import { redirect } from "next/dist/server/api-utils";

export async function addSnippet(formData) {
    const title = formData.get("title");
    const code = formData.get("code");

    await prisma.snippet.create({
        data: { title, code }
    });

    redirect("/")

    console.log("Snippet created");
}

export async function getSnippet(id) {
    return await prisma.snippet.findUnique({
        where: { id }
    });
}
