import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Gerard" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json(); //Read body of the response
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
