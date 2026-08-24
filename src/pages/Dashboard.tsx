import { Link } from "react-router-dom";

const properties = [
  {
    id: "1",
    name: "Apartamento Lisboa",
    status: "Arrendado",
    rent: 950,
  },
  {
    id: "2",
    name: "Apartamento Sintra",
    status: "Arrendado",
    rent: 850,
  },
  {
    id: "3",
    name: "Apartamento Loures",
    status: "Disponível",
    rent: 0,
  },
];

const works = [
  {
    id: "1",
    name: "Remodelação da casa de banho",
    property: "Apartamento Sintra",
    status: "Em curso",
    cost: 3800,
  },
  {
    id: "2",
    name: "Remodelação da cozinha",
    property: "Apartamento Lisboa",
    status: "Concluída",
    cost: 10400,
  },
  {
    id: "3",
    name: "Pintura do apartamento",
    property: "Apartamento Lisboa",
    status: "Concluída",
    cost: 2500,
  },
];

const expenses = [
  {
    id: "1",
    description: "IMI",
    property: "Apartamento Lisboa",
    amount: 350,
    status: "Pago",
  },
  {
    id: "2",
    description: "Seguro do imóvel",
    property: "Apartamento Sintra",
    amount: 195,
    status: "Pago",
  },
  {
    id: "3",
    description: "Condomínio",
    property: "Apartamento Sintra",
    amount: 60,
    status: "Pendente",
  },
];

const upcomingPayments = [
  {
    id: "1",
    date: "05/07/2026",
    description: "Condomínio",
    property: "Apartamento Sintra",
    amount: 60,
  },
  {
    id: "2",
    date: "02/05/2027",
    description: "Seguro do imóvel",
    property: "Apartamento Sintra",
    amount: 195,
  },
  {
    id: "3",
    date: "15/06/2027",
    description: "IMI",
    property: "Apartamento Lisboa",
    amount: 350,
  },
];

const documents = [
  {
    id: "1",
    name: "Contrato de arrendamento.pdf",
    property: "Apartamento Lisboa",
    date: "20/08/2026",
  },
  {
    id: "2",
    name: "Seguro do imóvel.pdf",
    property: "Apartamento Sintra",
    date: "02/05/2026",
  },
  {
    id: "3",
    name: "Fatura remodelação.pdf",
    property: "Apartamento Lisboa",
    date: "25/01/2026",
  },
];

function Dashboard() {
  const totalPropertyValue = 450000;
  const totalWorks = works.reduce((total, work) => total + work.cost, 0);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const monthlyRent = properties.reduce(
    (total, property) => total + property.rent,
    0
  );

  const totalInvestment = 485300;

  return (
    <div>
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          Bom dia, Francisca 👋
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Aqui tens uma visão geral dos teus imóveis e investimentos.
        </p>
      </div>

      {/* Resumo financeiro */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Valor dos imóveis
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalPropertyValue.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {properties.length} imóveis
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Investimento total
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalInvestment.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Aquisição + obras + despesas
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Renda mensal
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{monthlyRent.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Rendimento mensal atual
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Despesas recentes
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalExpenses.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Registadas atualmente
          </p>
        </div>
      </div>

      {/* Imóveis + Próximos pagamentos */}
      <div className="mb-6 grid gap-6 xl:grid-cols-2">
        {/* Imóveis */}
        <section className="rounded-xl bg-white ring-1 ring-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Os teus imóveis
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Visão geral dos teus imóveis.
              </p>
            </div>

            <Link
              to="/properties"
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              Ver todos →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {property.name}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        property.status === "Arrendado"
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  {property.rent > 0 ? (
                    <>
                      <p className="text-sm font-semibold text-slate-900">
                        €{property.rent.toLocaleString("pt-PT")}
                      </p>

                      <p className="text-xs text-slate-400">
                        / mês
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-slate-400">
                      —
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos pagamentos */}
        <section className="rounded-xl bg-white ring-1 ring-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Próximos pagamentos
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Pagamentos previstos.
              </p>
            </div>

            <Link
              to="/expenses"
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              Ver despesas →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {upcomingPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {payment.description}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {payment.property} · {payment.date}
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-900">
                  €{payment.amount.toLocaleString("pt-PT")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Obras + Despesas */}
      <div className="mb-6 grid gap-6 xl:grid-cols-2">
        {/* Obras */}
        <section className="rounded-xl bg-white ring-1 ring-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Obras
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Últimas intervenções nos teus imóveis.
              </p>
            </div>

            <Link
              to="/works"
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              Ver todas →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {works.map((work) => (
              <div
                key={work.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-slate-900">
                      {work.name}
                    </p>

                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        work.status === "Concluída"
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {work.status}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    {work.property}
                  </p>
                </div>

                <p className="shrink-0 text-sm font-semibold text-slate-900">
                  €{work.cost.toLocaleString("pt-PT")}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">
                Total em obras
              </span>

              <span className="font-semibold text-slate-900">
                €{totalWorks.toLocaleString("pt-PT")}
              </span>
            </div>
          </div>
        </section>

        {/* Despesas */}
        <section className="rounded-xl bg-white ring-1 ring-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Despesas recentes
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Últimas despesas registadas.
              </p>
            </div>

            <Link
              to="/expenses"
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              Ver todas →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-slate-900">
                      {expense.description}
                    </p>

                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        expense.status === "Pago"
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {expense.status}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    {expense.property}
                  </p>
                </div>

                <p className="shrink-0 text-sm font-semibold text-slate-900">
                  €{expense.amount.toLocaleString("pt-PT")}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">
                Despesas pendentes
              </span>

              <span className="font-semibold text-slate-900">
                €60
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Documentos */}
      <section className="rounded-xl bg-white ring-1 ring-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 p-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Documentos recentes
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Últimos documentos adicionados.
            </p>
          </div>

          <Link
            to="/documents"
            className="text-sm font-semibold text-slate-900 hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex items-center justify-between gap-4 p-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-medium text-slate-600">
                  PDF
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">
                    {document.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {document.property} · {document.date}
                  </p>
                </div>
              </div>

              <Link
                to={`/documents/${document.id}`}
                className="shrink-0 text-sm font-semibold text-slate-900 hover:underline"
              >
                Ver →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;