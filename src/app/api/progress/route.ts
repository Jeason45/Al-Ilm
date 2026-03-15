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

    const progress = await prisma.readingProgress.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: 'desc' },
    });

    return NextResponse.json(progress);
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
    const { surahNum, lastVerse, completed } = body;

    if (typeof surahNum !== 'number' || typeof lastVerse !== 'number') {
      return NextResponse.json({ error: 'surahNum et lastVerse doivent être des nombres' }, { status: 400 });
    }

    if (surahNum < 1 || surahNum > 114 || lastVerse < 1) {
      return NextResponse.json({ error: 'Valeurs hors limites' }, { status: 400 });
    }

    const progress = await prisma.readingProgress.upsert({
      where: {
        userId_surahNum: {
          userId: session.user.id,
          surahNum,
        },
      },
      update: { lastVerse, completed: completed ?? false },
      create: { userId: session.user.id, surahNum, lastVerse, completed: completed ?? false },
    });

    return NextResponse.json(progress);
  } catch {
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
