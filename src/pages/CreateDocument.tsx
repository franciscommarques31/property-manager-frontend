import { Link } from "react-router-dom";

function CreateDocument() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/documents"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar aos documentos
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-slate-900">
          Adicionar documento
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Guarda um documento e associa-o ao imóvel, obra ou despesa correspondente.
        </p>
      </div>

      <form className="space-y-6">
        {/* Ficheiro */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Documento
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Seleciona o ficheiro que pretendes guardar.
          </p>

          <div className="mt-6">
            <label
              htmlFor="file"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Ficheiro
            </label>

            <input
              id="file"
              type="file"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />

            <p className="mt-2 text-xs text-slate-400">
              PDF, JPG, PNG ou outros documentos.
            </p>
          </div>
        </section>

        {/* Informação */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Informação do documento
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Nome */}
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Nome do documento
              </label>

              <input
                id="name"
                type="text"
                placeholder="Ex: Escritura.pdf"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Categoria */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Categoria
              </label>

              <select
                id="category"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="">
                  Selecionar categoria
                </option>

                <option value="acquisition">
                  Aquisição
                </option>

                <option value="property">
                  Imóvel
                </option>

                <option value="work">
                  Obra
                </option>

                <option value="expense">
                  Despesa
                </option>

                <option value="insurance">
                  Seguro
                </option>

                <option value="contract">
                  Contrato
                </option>

                <option value="tax">
                  Impostos
                </option>

                <option value="other">
                  Outro
                </option>
              </select>
            </div>

            {/* Data */}
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Data do documento
              </label>

              <input
                id="date"
                type="date"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>
        </section>

        {/* Associação */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Associação
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Define onde este documento deve ficar associado.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Tipo */}
            <div>
              <label
                htmlFor="associationType"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Associar a
              </label>

              <select
                id="associationType"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="property">
                  Imóvel
                </option>

                <option value="work">
                  Obra
                </option>

                <option value="expense">
                  Despesa
                </option>
              </select>
            </div>

            {/* Entidade */}
            <div>
              <label
                htmlFor="association"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Selecionar
              </label>

              <select
                id="association"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="">
                  Selecionar
                </option>

                <option value="property-1">
                  Apartamento Lisboa
                </option>

                <option value="property-2">
                  Apartamento Sintra
                </option>

                <option value="work-1">
                  Remodelação da cozinha
                </option>

                <option value="work-2">
                  Pintura do apartamento
                </option>

                <option value="expense-1">
                  IMI
                </option>

                <option value="expense-2">
                  Condomínio
                </option>
              </select>
            </div>
          </div>
        </section>

        {/* Observações */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Observações
          </h2>

          <div className="mt-6">
            <textarea
              rows={4}
              placeholder="Adiciona alguma informação adicional..."
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
        </section>

        {/* Botões */}
        <div className="flex items-center justify-end gap-3 pb-8">
          <Link
            to="/documents"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
          >
            Cancelar
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Guardar documento
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateDocument;