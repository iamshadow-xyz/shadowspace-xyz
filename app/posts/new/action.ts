"use server";
import db from "@/db";
import { posts } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNewPost(formData: FormData) {
    const userId = formData.get("id") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    await db.insert(posts).values({ userId, title, content });
    revalidatePath("/posts");
    redirect("/posts");
}