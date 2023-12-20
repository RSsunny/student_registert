import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({
      where: { id: 10 },
    });
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: error });
  }
}
