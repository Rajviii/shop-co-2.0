import { NextResponse } from "next/server";
import { topSelling } from "@/data/products";

export function GET() {
  return NextResponse.json(topSelling);
}
