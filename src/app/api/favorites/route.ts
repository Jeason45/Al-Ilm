import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  const favorites = await prisma.favorite.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(favorites);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  const { type, reference, label } = await req.json();

  if (!type || !reference) {
    return NextResponse.json({ error: 'Type et référence requis' }, { status: 400 });
  }

  const favorite = await prisma.favorite.upsert({
    where: {
      userId_type_reference: {
        userId: session.user.id,
        type,
        reference,
      },
    },
    update: { label },
    create: { userId: session.user.id, type, reference, label },
  });

  return NextResponse.json(favorite, { status: 201 });
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  const { type, reference } = await req.json();

  await prisma.favorite.deleteMany({
    where: { userId: session.user.id, type, reference },
  });

  return NextResponse.json({ success: true });
}
