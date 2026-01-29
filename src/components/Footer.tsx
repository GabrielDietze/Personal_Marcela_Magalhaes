export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-amber-500/20 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src="/logo[1].png"
            alt="Marcela Magalhães - Personal Trainer"
            className="h-8 w-auto"
            loading="lazy"
          />
        </div>
        <p className="text-sm">
          Personal Trainer | Credenciada pela Federação Mineira
        </p>
        <p className="text-xs mt-2 text-gray-500">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
