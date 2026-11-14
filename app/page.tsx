export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center font-sans">
      <h1 className="fade-up text-4xl font-semibold tracking-tight sm:text-6xl">
        Hello there!
      </h1>
      <p className="fade-up fade-up-late text-lg text-foreground/70 sm:text-xl">
        <span className="shimmer font-medium">cognicloud.dev</span> with love
      </p>
    </main>
  );
}
