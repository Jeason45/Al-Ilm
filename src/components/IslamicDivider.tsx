import { cn } from '@/lib/utils';

export function IslamicDivider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-3 py-2', className)}>
      <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-border" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-border" />
    </div>
  );
}
