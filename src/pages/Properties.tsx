import { Link } from "react-router-dom";

const properties = [
  {
    id: "1",
    name: "Apartamento Lisboa",
    location: "Lisboa",
    type: "T2",
    area: 85,
    status: "Arrendado",
    rent: 950,
    invested: 164100,
  },
  {
    id: "2",
    name: "Apartamento Sintra",
    location: "Sintra",
    type: "T3",
    area: 110,
    status: "Arrendado",
    rent: 850,
    invested: 123500,
  },
  {
    id: "3",
    name: "Apartamento Loures",
    location: "Loures",
    type: "T2",
    area: 78,
    status: "Disponível",
    rent: 900,
    invested: 98000,
  },
];

function Properties() {
  return (
    <div>
      {/* Cabeçalho */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Imóveis
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Gere todos os teus imóveis num só lugar.
          </p>
        </div>

        <Link
          to="/properties/new"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          + Adicionar imóvel
        </Link>
      </div>

      {/* Resumo */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total de imóveis
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            3
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Arrendados
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            2
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Renda mensal
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €1.800
          </p>
        </div>
      </div>

      {/* Imóveis */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200"
          >
            {/* Imagem */}
            <div className="flex h-40 items-center justify-center bg-slate-200">
              <span className="text-sm font-medium text-slate-500">
                Imagem do imóvel
              </span>
            </div>

            {/* Conteúdo */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    {property.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {property.location}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    property.status === "Arrendado"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {property.status}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-4">
                <div>
                  <p className="text-xs text-slate-400">
                    Tipo
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {property.type}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Área
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {property.area} m²
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Renda
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    €{property.rent}/mês
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Investido
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    €{property.invested.toLocaleString("pt-PT")}
                  </p>
                </div>
              </div>

              <Link
                to={`/properties/${property.id}`}
                className="mt-4 block text-center text-sm font-semibold text-slate-900 hover:underline"
              >
                Ver imóvel →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;