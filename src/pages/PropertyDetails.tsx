import { Link, useParams } from "react-router-dom";

const property = {
  id: "1",
  name: "Apartamento Lisboa",
  location: "Lisboa",
  type: "T2",
  area: 85,
  status: "Arrendado",
  address: "Rua António Maria Cardoso, 25",
  purchasePrice: 150000,
  monthlyRent: 950,
  tenant: "João Silva",
};

const works = [
  {
    id: 1,
    name: "Pintura do apartamento",
    date: "15/03/2026",
    cost: 2500,
  },
  {
    id: 2,
    name: "Substituição da canalização",
    date: "28/02/2026",
    cost: 1200,
  },
  {
    id: 3,
    name: "Remodelação da cozinha",
    date: "10/01/2026",
    cost: 10400,
  },
];

const expenses = [
  {
    id: 1,
    description: "IMI",
    date: "15/06/2026",
    amount: 350,
  },
  {
    id: 2,
    description: "Condomínio",
    date: "05/06/2026",
    amount: 45,
  },
  {
    id: 3,
    description: "Seguro do imóvel",
    date: "02/05/2026",
    amount: 180,
  },
];

function PropertyDetails() {
  const { id } = useParams();

  console.log("Property ID:", id);

  // Total gasto em obras
  const totalWorks = works.reduce(
    (total, work) => total + work.cost,
    0
  );

  // Total de despesas
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Investimento total = aquisição + obras
  const totalInvestment =
    property.purchasePrice + totalWorks;

  return (
    <div>
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/properties"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar aos imóveis
        </Link>

        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold text-slate-900">
                {property.name}
              </h1>

              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                {property.status}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {property.location} · {property.type} ·{" "}
              {property.area} m²
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Editar imóvel
          </button>
        </div>
      </div>

      {/* Resumo financeiro */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {/* Valor de aquisição */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Valor de aquisição
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €
            {property.purchasePrice.toLocaleString(
              "pt-PT"
            )}
          </p>
        </div>

        {/* Total em obras */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total em obras
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalWorks.toLocaleString("pt-PT")}
          </p>
        </div>

        {/* Total de despesas */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total de despesas
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalExpenses.toLocaleString("pt-PT")}
          </p>
        </div>

        {/* Renda mensal */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Renda mensal
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{property.monthlyRent.toLocaleString("pt-PT")}
          </p>
        </div>

        {/* Investimento total */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Investimento total
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalInvestment.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Aquisição + obras
          </p>
        </div>
      </div>

      {/* Informação do imóvel */}
      <section className="mb-8 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Informação do imóvel
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs text-slate-400">
              Morada
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {property.address}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Localidade
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {property.location}
            </p>
          </div>

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
        </div>
      </section>

      {/* Arrendamento */}
      <section className="mb-8 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Arrendamento
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs text-slate-400">
              Inquilino
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {property.tenant}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Renda mensal
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              €
              {property.monthlyRent.toLocaleString(
                "pt-PT"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Obras e despesas */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Obras */}
        <section className="rounded-xl bg-white ring-1 ring-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Últimas obras
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Histórico de intervenções
              </p>
            </div>

            <Link
              to="/works"
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              Ver todas
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {works.map((work) => (
              <div
                key={work.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {work.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {work.date}
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-900">
                  €{work.cost.toLocaleString("pt-PT")}
                </p>
              </div>
            ))}
          </div>

          {/* Total das obras */}
          <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
            <p className="text-sm font-medium text-slate-600">
              Total em obras
            </p>

            <p className="text-sm font-semibold text-slate-900">
              €{totalWorks.toLocaleString("pt-PT")}
            </p>
          </div>
        </section>

        {/* Despesas */}
        <section className="rounded-xl bg-white ring-1 ring-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Últimas despesas
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Custos de gestão e manutenção do imóvel
              </p>
            </div>

            <Link
              to="/expenses"
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              Ver todas
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {expense.description}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {expense.date}
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-900">
                  €{expense.amount.toLocaleString("pt-PT")}
                </p>
              </div>
            ))}
          </div>

          {/* Total das despesas */}
          <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
            <p className="text-sm font-medium text-slate-600">
              Total de despesas
            </p>

            <p className="text-sm font-semibold text-slate-900">
              €{totalExpenses.toLocaleString("pt-PT")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PropertyDetails;