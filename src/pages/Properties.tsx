import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "Todos" ||
      property.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalProperties = properties.length;

  const rentedProperties = properties.filter(
    (property) => property.status === "Arrendado"
  ).length;

  const monthlyRent = properties.reduce(
    (total, property) => total + property.rent,
    0
  );

  return (
    <div>
      {/* Cabeçalho */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
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
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
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
            {totalProperties}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Arrendados
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {rentedProperties}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Renda mensal
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{monthlyRent.toLocaleString("pt-PT")}
          </p>
        </div>
      </div>

      {/* Pesquisa e filtros */}
      <div className="mb-6 rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Pesquisa */}
          <div className="flex-1">
            <label
              htmlFor="property-search"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Procurar imóvel
            </label>

            <input
              id="property-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ex: Lisboa, Sintra..."
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          {/* Estado */}
          <div className="md:w-56">
            <label
              htmlFor="status-filter"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Estado
            </label>

            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="Todos">Todos</option>
              <option value="Arrendado">Arrendado</option>
              <option value="Disponível">Disponível</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resultado */}
      {filteredProperties.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center ring-1 ring-slate-200">
          <p className="font-medium text-slate-900">
            Nenhum imóvel encontrado
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Experimenta alterar a pesquisa ou o filtro.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProperties.map((property) => (
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
                      €{property.rent.toLocaleString("pt-PT")}/mês
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
      )}
    </div>
  );
}

export default Properties;