import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function PUT(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const prisma = new PrismaClient();
    const updateInfo = await req.json();
    const result = await prisma.users.update({
      where: { id: parseInt(id) },
      data: updateInfo,
    });
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: error });
  }
}
