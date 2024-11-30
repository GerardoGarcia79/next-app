import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Gerard" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json(); //Read body of the response
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
