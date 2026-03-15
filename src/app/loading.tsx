export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-8 h-8 rounded-full border-2 animate-spin"
        style={{
          borderColor: 'var(--color-border)',
          borderTopColor: 'var(--color-gold)',
        }}
      />
    </div>
  );
}
