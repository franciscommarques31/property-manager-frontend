import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredDocuments = documents.filter((document) => {
    const matchesSearch = document.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesProperty =
      propertyFilter === "all" ||
      document.property === propertyFilter;

    const matchesCategory =
      categoryFilter === "all" ||
      document.category === categoryFilter;

    return matchesSearch && matchesProperty && matchesCategory;
  });

  const totalDocuments = filteredDocuments.length;

  const totalSize = filteredDocuments.reduce((total, document) => {
    if (document.size.includes("MB")) {
      return total + parseFloat(document.size);
    }

    return total + parseFloat(document.size) / 1024;
  }, 0);

  const pdfDocuments = filteredDocuments.filter(
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

      {/* Filtros */}
      <div className="mb-6 rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <div className="grid gap-4 md:grid-cols-3">
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
              placeholder="Ex: Escritura.pdf"
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
              onChange={(event) => setPropertyFilter(event.target.value)}
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
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="all">Todas as categorias</option>
              <option value="Aquisição">Aquisição</option>
              <option value="Imóvel">Imóvel</option>
              <option value="Obra">Obra</option>
              <option value="Despesa">Despesa</option>
              <option value="Seguro">Seguro</option>
              <option value="Contrato">Contrato</option>
              <option value="Impostos">Impostos</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">
            Documentos encontrados
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

          <p className="mt-1 text-sm text-slate-500">
            {totalDocuments === 0
              ? "Nenhum documento encontrado."
              : `${totalDocuments} documento${totalDocuments !== 1 ? "s" : ""} encontrado${totalDocuments !== 1 ? "s" : ""}.`}
          </p>
        </div>

        {filteredDocuments.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {filteredDocuments.map((document) => (
              <div
                key={document.id}
                className="flex flex-col gap-4 p-6 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex min-w-0 items-center gap-4">
                  {/* Ícone */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-600">
                    {document.type}
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
        ) : (
          <div className="px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-900">
              Nenhum documento encontrado
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

export default Documents;