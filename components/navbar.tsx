export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary">
            🐾 PawCart
          </span>
        </div>
        <p className="text-sm font-medium text-muted-foreground sm:text-base">
          Happy Finds for Happy Paws.
        </p>
      </div>
    </header>
  );
}

export default Navbar;
