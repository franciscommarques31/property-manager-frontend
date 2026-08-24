import { Link } from "react-router-dom";

const documents = [
  {
    id: "1",
    name: "Escritura.pdf",
    category: "Aquisição",
    property: "Apartamento Lisboa",
    date: "10/01/2026",
    size: "2.4 MB",
    type: "PDF",
  },
  {
    id: "2",
    name: "Caderneta Predial.pdf",
    category: "Imóvel",
    property: "Apartamento Lisboa",
    date: "12/01/2026",
    size: "1.2 MB",
    type: "PDF",
  },
  {
    id: "3",
    name: "Fatura Remodelação Cozinha.pdf",
    category: "Obra",
    property: "Apartamento Lisboa",
    date: "25/01/2026",
    size: "856 KB",
    type: "PDF",
  },
  {
    id: "4",
    name: "Recibo IMI.pdf",
    category: "Despesa",
    property: "Apartamento Lisboa",
    date: "15/06/2026",
    size: "540 KB",
    type: "PDF",
  },
  {
    id: "5",
    name: "Apólice Seguro.pdf",
    category: "Seguro",
    property: "Apartamento Sintra",
    date: "20/05/2026",
    size: "1.8 MB",
    type: "PDF",
  },
];

function Documents() {
  const totalDocuments = documents.length;

  const totalSize = documents.reduce((total, document) => {
    if (document.size.includes("MB")) {
      return total + parseFloat(document.size);
    }

    return total + parseFloat(document.size) / 1024;
  }, 0);

  const pdfDocuments = documents.filter(
    (document) => document.type === "PDF"
  ).length;

  return (
    <div>
      {/* Cabeçalho */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Documentos
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Organiza os documentos associados aos teus imóveis.
          </p>
        </div>

        <Link
          to="/documents/new"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          + Adicionar documento
        </Link>
      </div>

      {/* Resumo */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Total de documentos
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {totalDocuments}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Documentos PDF
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {pdfDocuments}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Espaço utilizado
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {totalSize.toFixed(1)} MB
          </p>
        </div>
      </div>

      {/* Lista */}
      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="font-semibold text-slate-900">
            Todos os documentos
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex flex-col gap-4 p-6 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex min-w-0 items-center gap-4">
                {/* Ícone */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-600">
                  PDF
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-medium text-slate-900">
                    {document.name}
                  </h3>

                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span>{document.category}</span>
                    <span>{document.property}</span>
                    <span>{document.date}</span>
                    <span>{document.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 md:justify-end">
                <Link
                  to={`/documents/${document.id}`}
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

export default Documents;