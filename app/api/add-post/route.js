import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request) {
  const res = await request.json();
  const { fullName, email, contact, department, title, category, description } = res;

  const result = await prisma.issue.create({
    data: {
      fullName,
      email,
      contact,
      department,
      title,
      category, // Use the selected category directly
      description
    }
  });

  return NextResponse.json({ result });
}
