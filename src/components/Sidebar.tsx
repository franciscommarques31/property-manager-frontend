import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: "⌂",
    },
    {
      label: "Imóveis",
      path: "/properties",
      icon: "⌂",
    },
    {
      label: "Obras",
      path: "/works",
      icon: "⌁",
    },
    {
      label: "Despesas",
      path: "/expenses",
      icon: "€",
    },
    {
      label: "Documentos",
      path: "/documents",
      icon: "□",
    },
  ];
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          Property Manager
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <span className="flex h-5 w-5 items-center justify-center text-sm">
                {item.icon}
              </span>

              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-200 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
          <span>⚙</span>
          Definições
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;