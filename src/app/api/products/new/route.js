import { NextResponse } from "next/server";
import { newArrivals } from "@/data/products";

export function GET() {
  return NextResponse.json(newArrivals);
}