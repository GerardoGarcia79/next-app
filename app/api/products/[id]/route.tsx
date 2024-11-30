import { error } from "console";
import { NextResponse } from "next/server";

export function GET(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Potatoes", price: 5 });
}

export async function PUT(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (!body.price)
    return NextResponse.json({ error: "Price is required" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export function DELETE(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({});
}
