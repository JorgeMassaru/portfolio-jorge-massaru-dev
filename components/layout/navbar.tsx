export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold text-zinc-900">
          Jorge Massaru
        </a>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-700">
          <a href="/sobre" className="transition hover:text-zinc-900">
            Sobre
          </a>
          <a href="/projetos" className="transition hover:text-zinc-900">
            Projetos
          </a>
          <a href="/experiencia" className="transition hover:text-zinc-900">
            Experiência
          </a>
          <a href="/contato" className="transition hover:text-zinc-900">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}