import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const studentInfo = await req.json();
    const result = await prisma.users.create({
      data: studentInfo,
    });
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: error });
  }
}
