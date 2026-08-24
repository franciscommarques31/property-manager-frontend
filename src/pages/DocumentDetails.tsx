import { Link, useParams } from "react-router-dom";

const document = {
  id: "1",
  name: "Escritura.pdf",
  category: "Aquisição",
  property: "Apartamento Lisboa",
  propertyId: "1",
  date: "10/01/2026",
  size: "2.4 MB",
  type: "PDF",
  description:
    "Escritura de aquisição do imóvel referente à compra do Apartamento Lisboa.",
  notes:
    "Documento original da aquisição do imóvel.",
};

function DocumentDetails() {
  const { id } = useParams();

  console.log("Document ID:", id);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/documents"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar aos documentos
        </Link>

        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold text-slate-900">
                {document.name}
              </h1>

              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                {document.type}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {document.category} · {document.property}
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Abrir documento
          </button>
        </div>
      </div>

      {/* Resumo */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Tipo
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {document.type}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Tamanho
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {document.size}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Data
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {document.date}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Categoria
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            {document.category}
          </p>
        </div>
      </div>

      {/* Informação */}
      <section className="mb-6 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Informação do documento
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs text-slate-400">
              Nome
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {document.name}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Categoria
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {document.category}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Tipo
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {document.type}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Data
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {document.date}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Tamanho
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {document.size}
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
              {document.property}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Este documento está associado a este imóvel.
            </p>
          </div>

          <Link
            to={`/properties/${document.propertyId}`}
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
          {document.description}
        </p>
      </section>

      {/* Observações */}
      <section className="mb-8 rounded-xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Observações
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {document.notes || "Sem observações."}
        </p>
      </section>

      {/* Ações */}
      <div className="flex items-center justify-between gap-3 pb-8">
        <Link
          to="/documents"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
        >
          ← Voltar
        </Link>

        <div className="flex gap-3">
          <button className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Download
          </button>

          <button className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
            Eliminar documento
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentDetails;