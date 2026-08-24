import { Link } from "react-router-dom";

const works = [
  {
    id: "1",
    name: "Remodelação da cozinha",
    property: "Apartamento Lisboa",
    category: "Cozinha",
    date: "10/01/2026",
    status: "Concluída",
    cost: 10400,
  },
  {
    id: "2",
    name: "Pintura do apartamento",
    property: "Apartamento Lisboa",
    category: "Pintura",
    date: "15/03/2026",
    status: "Concluída",
    cost: 2500,
  },
  {
    id: "3",
    name: "Substituição da canalização",
    property: "Apartamento Lisboa",
    category: "Canalização",
    date: "28/02/2026",
    status: "Concluída",
    cost: 1200,
  },
  {
    id: "4",
    name: "Remodelação da casa de banho",
    property: "Apartamento Sintra",
    category: "Casa de banho",
    date: "05/04/2026",
    status: "Em curso",
    cost: 3800,
  },
];

function Works() {
  const totalCost = works.reduce((total, work) => total + work.cost, 0);

  const completedWorks = works.filter(
    (work) => work.status === "Concluída"
  ).length;

  const ongoingWorks = works.filter(
    (work) => work.status === "Em curso"
  ).length;

  return (
    <div>
      {/* Cabeçalho */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Obras
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Controla todas as obras e intervenções dos teus imóveis.
          </p>
        </div>

        <Link
          to="/works/new"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          + Adicionar obra
        </Link>
      </div>

      {/* Resumo */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total investido
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalCost.toLocaleString("pt-PT")}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Obras concluídas
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {completedWorks}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Obras em curso
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {ongoingWorks}
          </p>
        </div>
      </div>

      {/* Lista */}
      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="font-semibold text-slate-900">
            Histórico de obras
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {works.map((work) => (
            <div
              key={work.id}
              className="flex flex-col gap-4 p-6 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-medium text-slate-900">
                    {work.name}
                  </h3>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      work.status === "Concluída"
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {work.status}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                  <span>{work.property}</span>
                  <span>{work.category}</span>
                  <span>{work.date}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 md:justify-end">
                <p className="font-semibold text-slate-900">
                  €{work.cost.toLocaleString("pt-PT")}
                </p>

                <Link
                  to={`/works/${work.id}`}
                  className="text-sm font-semibold text-slate-900 hover:underline"
                >
                  Ver →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;