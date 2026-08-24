function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Visão geral dos teus imóveis
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-slate-900">
            Francisca
          </p>

          <p className="text-xs text-slate-500">
            Administrador
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          F
        </div>
      </div>
    </header>
  );
}

export default Header;