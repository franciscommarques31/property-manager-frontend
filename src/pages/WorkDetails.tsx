import { Link, useParams } from "react-router-dom";

const work = {
  id: "1",
  name: "Remodelação da cozinha",
  property: "Apartamento Lisboa",
  propertyId: "1",
  category: "Cozinha",
  description:
    "Remodelação completa da cozinha, incluindo substituição dos móveis, bancada, canalização e iluminação.",
  startDate: "10/01/2026",
  endDate: "25/01/2026",
  cost: 10400,
  company: "João & Filhos",
  status: "Concluída",
  notes:
    "A obra foi concluída dentro do prazo previsto. Foram também realizadas pequenas alterações na instalação elétrica.",
};

function WorkDetails() {
  const { id } = useParams();

  console.log("Work ID:", id);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/works"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar às obras
        </Link>

        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold text-slate-900">
                {work.name}
              </h1>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  work.status === "Concluída"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {work.status}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {work.property} · {work.category}
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Editar obra
          </button>
        </div>
      </div>

      {/* Resumo */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Custo */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Custo da obra
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            €{work.cost.toLocaleString("pt-PT")}
          </p>
        </div>

        {/* Estado */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Estado
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {work.status}
          </p>
        </div>

        {/* Imóvel */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Imóvel
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {work.property}
          </p>
        </div>
      </div>

      {/* Informação da obra */}
      <section className="mb-6 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Informação da obra
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs text-slate-400">
              Imóvel
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {work.property}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Categoria
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {work.category}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Empresa / profissional
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {work.company}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Data de início
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {work.startDate}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Data de conclusão
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {work.endDate}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Estado
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {work.status}
            </p>
          </div>
        </div>
      </section>

      {/* Imóvel associado */}
      <section className="mb-6 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Imóvel associado
        </h2>

        <div className="mt-6 flex flex-col justify-between gap-4 rounded-lg border border-slate-200 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-900">
              {work.property}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Esta obra está associada a este imóvel e
              contribui para o investimento total.
            </p>
          </div>

          <Link
            to={`/properties/${work.propertyId}`}
            className="text-sm font-semibold text-slate-900 hover:underline"
          >
            Ver imóvel →
          </Link>
        </div>
      </section>

      {/* Descrição */}
      <section className="mb-6 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Descrição
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {work.description}
        </p>
      </section>

      {/* Observações */}
      <section className="mb-8 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Observações
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {work.notes || "Sem observações."}
        </p>
      </section>

      {/* Ações */}
      <div className="flex items-center justify-between gap-3 pb-8">
        <Link
          to="/works"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
        >
          ← Voltar
        </Link>

        <button className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
          Eliminar obra
        </button>
      </div>
    </div>
  );
}

export default WorkDetails;