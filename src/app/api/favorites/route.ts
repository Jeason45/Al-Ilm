import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(favorites);
  } catch {
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const body = await req.json();
    const { type, reference, label } = body;

    if (!type || typeof type !== 'string' || !reference || typeof reference !== 'string') {
      return NextResponse.json({ error: 'Type et référence requis (chaînes de caractères)' }, { status: 400 });
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
  } catch {
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const body = await req.json();
    const { type, reference } = body;

    if (!type || typeof type !== 'string' || !reference || typeof reference !== 'string') {
      return NextResponse.json({ error: 'Type et référence requis' }, { status: 400 });
    }

    await prisma.favorite.deleteMany({
      where: { userId: session.user.id, type, reference },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
