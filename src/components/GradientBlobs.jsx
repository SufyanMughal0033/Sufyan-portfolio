export default function GradientBlobs({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-success/20 blur-3xl animate-blob [animation-delay:8s]" />
    </div>
  );
}
