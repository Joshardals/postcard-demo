import { NextResponse } from "next/server";
import { postcards } from "@/lib/data";

export async function GET() {
  return NextResponse.json(postcards);
}
