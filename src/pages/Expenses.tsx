import { useState } from "react";
import { Link } from "react-router-dom";

const expenses = [
  {
    id: "1",
    description: "IMI",
    property: "Apartamento Lisboa",
    category: "Impostos",
    date: "15/06/2026",
    status: "Pago",
    amount: 350,
    frequency: "Anual",
    nextPaymentDate: "15/06/2027",
  },
  {
    id: "2",
    description: "Condomínio",
    property: "Apartamento Lisboa",
    category: "Condomínio",
    date: "05/06/2026",
    status: "Pago",
    amount: 45,
    frequency: "Mensal",
    nextPaymentDate: "05/07/2026",
  },
  {
    id: "3",
    description: "Seguro do imóvel",
    property: "Apartamento Lisboa",
    category: "Seguro",
    date: "02/05/2026",
    status: "Pago",
    amount: 180,
    frequency: "Anual",
    nextPaymentDate: "02/05/2027",
  },
  {
    id: "4",
    description: "Seguro do imóvel",
    property: "Apartamento Sintra",
    category: "Seguro",
    date: "20/05/2026",
    status: "Pago",
    amount: 195,
    frequency: "Anual",
    nextPaymentDate: "20/05/2027",
  },
  {
    id: "5",
    description: "Condomínio",
    property: "Apartamento Sintra",
    category: "Condomínio",
    date: "05/06/2026",
    status: "Pendente",
    amount: 60,
    frequency: "Mensal",
    nextPaymentDate: null,
  },
];

function Expenses() {
  const [search, setSearch] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [frequencyFilter, setFrequencyFilter] = useState("all");

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch =
      expense.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesProperty =
      propertyFilter === "all" ||
      expense.property === propertyFilter;

    const matchesCategory =
      categoryFilter === "all" ||
      expense.category === categoryFilter;

    const matchesFrequency =
      frequencyFilter === "all" ||
      expense.frequency === frequencyFilter;

    return (
      matchesSearch &&
      matchesProperty &&
      matchesCategory &&
      matchesFrequency
    );
  });

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const paidExpenses = filteredExpenses.filter(
    (expense) => expense.status === "Pago"
  );

  const pendingExpenses = filteredExpenses.filter(
    (expense) => expense.status === "Pendente"
  );

  const totalPaid = paidExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalPending = pendingExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      {/* Cabeçalho */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Despesas
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Controla os custos associados aos teus imóveis.
          </p>
        </div>

        <Link
          to="/expenses/new"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          + Adicionar despesa
        </Link>
      </div>

      {/* Filtros */}
      <div className="mb-6 rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {/* Pesquisa */}
          <div>
            <label
              htmlFor="search"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Pesquisar
            </label>

            <input
              id="search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ex: IMI ou Condomínio"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          {/* Imóvel */}
          <div>
            <label
              htmlFor="propertyFilter"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Imóvel
            </label>

            <select
              id="propertyFilter"
              value={propertyFilter}
              onChange={(event) =>
                setPropertyFilter(event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="all">Todos os imóveis</option>
              <option value="Apartamento Lisboa">
                Apartamento Lisboa
              </option>
              <option value="Apartamento Sintra">
                Apartamento Sintra
              </option>
            </select>
          </div>

          {/* Categoria */}
          <div>
            <label
              htmlFor="categoryFilter"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Categoria
            </label>

            <select
              id="categoryFilter"
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="all">Todas as categorias</option>
              <option value="Impostos">Impostos</option>
              <option value="Condomínio">Condomínio</option>
              <option value="Seguro">Seguro</option>
            </select>
          </div>

          {/* Frequência */}
          <div>
            <label
              htmlFor="frequencyFilter"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Frequência
            </label>

            <select
              id="frequencyFilter"
              value={frequencyFilter}
              onChange={(event) =>
                setFrequencyFilter(event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="all">Todas</option>
              <option value="Mensal">Mensal</option>
              <option value="Anual">Anual</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total de despesas
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalExpenses.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {filteredExpenses.length} despesas encontradas
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total pago
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalPaid.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {paidExpenses.length} pagas
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total pendente
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{totalPending.toLocaleString("pt-PT")}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {pendingExpenses.length} pendentes
          </p>
        </div>
      </div>

      {/* Lista */}
      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="font-semibold text-slate-900">
            Histórico de despesas
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {filteredExpenses.length === 0
              ? "Nenhuma despesa encontrada."
              : `${filteredExpenses.length} despesa${
                  filteredExpenses.length !== 1 ? "s" : ""
                } encontrada${
                  filteredExpenses.length !== 1 ? "s" : ""
                }.`}
          </p>
        </div>

        {filteredExpenses.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex flex-col gap-4 p-6 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-medium text-slate-900">
                      {expense.description}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        expense.status === "Pago"
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {expense.status}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span>{expense.property}</span>
                    <span>{expense.category}</span>
                    <span>{expense.frequency}</span>

                    <span>
                      {expense.status === "Pago"
                        ? `Próximo: ${expense.nextPaymentDate}`
                        : `Vencimento: ${expense.date}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 md:justify-end">
                  <p className="font-semibold text-slate-900">
                    €{expense.amount.toLocaleString("pt-PT")}
                  </p>

                  <Link
                    to={`/expenses/${expense.id}`}
                    className="text-sm font-semibold text-slate-900 hover:underline"
                  >
                    Ver →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-900">
              Nenhuma despesa encontrada
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Tenta alterar a pesquisa ou os filtros.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Expenses;