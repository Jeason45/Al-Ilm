import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-7xl sm:text-8xl font-bold font-outfit tracking-tight text-foreground mb-3">404</h1>
        <p className="text-xl text-muted mb-10">Page introuvable</p>
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
