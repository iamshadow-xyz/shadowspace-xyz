"use server";
import db from "@/db";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNewUser(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    await db.insert(users).values({ name, email });
    revalidatePath("/users");
    redirect("/users");
}