import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const prisma = new PrismaClient();

    const result = await prisma.users.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: error });
  }
}
