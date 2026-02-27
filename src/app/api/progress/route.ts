import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  const progress = await prisma.readingProgress.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: 'desc' },
  });

  return NextResponse.json(progress);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  const { surahNum, lastVerse, completed } = await req.json();

  if (!surahNum || !lastVerse) {
    return NextResponse.json({ error: 'surahNum et lastVerse requis' }, { status: 400 });
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
}
