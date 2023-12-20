import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const prisma = new PrismaClient({
      log: ["query", "error", "info", "warn"],
    });
    const result = await prisma.users.findUnique({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: error });
  }
}
