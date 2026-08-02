export default function RouteDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`route-divider w-full text-gold/60 ${className}`}
    />
  );
}
