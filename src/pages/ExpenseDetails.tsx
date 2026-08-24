import { Link, useParams } from "react-router-dom";

const expense = {
  id: "1",
  description: "IMI",
  property: "Apartamento Lisboa",
  propertyId: "1",
  category: "Impostos",
  date: "15/06/2026",
  amount: 350,
  paymentMethod: "Transferência bancária",
  status: "Pago",
  frequency: "Anual",
  nextPaymentDate: "15/06/2027",
  notes: "Pagamento anual de IMI referente ao imóvel.",
};

function ExpenseDetails() {
  const { id } = useParams();

  console.log("Expense ID:", id);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/expenses"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar às despesas
        </Link>

        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold text-slate-900">
                {expense.description}
              </h1>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  expense.status === "Pago"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {expense.status}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {expense.property} · {expense.category}
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Editar despesa
          </button>
        </div>
      </div>

      {/* Resumo financeiro */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Valor
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{expense.amount.toLocaleString("pt-PT")}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Periodicidade
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {expense.frequency}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Data
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {expense.date}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Próximo pagamento
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {expense.nextPaymentDate || "—"}
          </p>
        </div>
      </div>

      {/* Informação da despesa */}
      <section className="mb-6 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Informação da despesa
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs text-slate-400">
              Descrição
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {expense.description}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Categoria
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {expense.category}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Data da despesa
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {expense.date}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Periodicidade
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {expense.frequency}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Método de pagamento
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {expense.paymentMethod || "—"}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Estado
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {expense.status}
            </p>
          </div>
        </div>
      </section>

      {/* Próximo pagamento */}
      {expense.status === "Pago" && expense.nextPaymentDate && (
        <section className="mb-6 rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Próximo pagamento
          </h2>

          <div className="mt-6 flex flex-col justify-between gap-4 rounded-lg border border-slate-200 p-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-slate-900">
                Próximo pagamento de {expense.description}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Esta despesa é recorrente e deverá ser paga novamente em:
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-lg font-semibold text-slate-900">
                {expense.nextPaymentDate}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Periodicidade: {expense.frequency}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Imóvel associado */}
      <section className="mb-6 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Imóvel associado
        </h2>

        <div className="mt-6 flex flex-col justify-between gap-4 rounded-lg border border-slate-200 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-900">
              {expense.property}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Esta despesa está associada a este imóvel.
            </p>
          </div>

          <Link
            to={`/properties/${expense.propertyId}`}
            className="text-sm font-semibold text-slate-900 hover:underline"
          >
            Ver imóvel →
          </Link>
        </div>
      </section>

      {/* Observações */}
      <section className="mb-8 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Observações
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {expense.notes || "Sem observações."}
        </p>
      </section>

      {/* Ações */}
      <div className="flex items-center justify-between gap-3 pb-8">
        <Link
          to="/expenses"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
        >
          ← Voltar
        </Link>

        <button className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
          Eliminar despesa
        </button>
      </div>
    </div>
  );
}

export default ExpenseDetails;