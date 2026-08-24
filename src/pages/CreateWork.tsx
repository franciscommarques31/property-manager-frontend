import { Link } from "react-router-dom";

function CreateWork() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/works"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar às obras
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-slate-900">
          Adicionar obra
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Regista uma nova obra ou intervenção num imóvel.
        </p>
      </div>

      <form className="space-y-6">
        {/* Informação da obra */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Informação da obra
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Informação geral sobre a intervenção.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Nome */}
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Nome da obra
              </label>

              <input
                id="name"
                type="text"
                placeholder="Ex: Remodelação da cozinha"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Imóvel */}
            <div>
              <label
                htmlFor="property"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Imóvel
              </label>

              <select
                id="property"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="">Selecionar imóvel</option>
                <option value="lisboa">
                  Apartamento Lisboa
                </option>
                <option value="sintra">
                  Apartamento Sintra
                </option>
                <option value="loures">
                  Apartamento Loures
                </option>
              </select>
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
                <option value="">Selecionar categoria</option>
                <option value="painting">Pintura</option>
                <option value="kitchen">Cozinha</option>
                <option value="bathroom">Casa de banho</option>
                <option value="plumbing">Canalização</option>
                <option value="electricity">Eletricidade</option>
                <option value="flooring">Pavimento</option>
                <option value="windows">Janelas</option>
                <option value="other">Outro</option>
              </select>
            </div>

            {/* Descrição */}
            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Descrição
              </label>

              <textarea
                id="description"
                rows={4}
                placeholder="Descreve o trabalho realizado..."
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>
        </section>

        {/* Datas */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Datas
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="startDate"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Data de início
              </label>

              <input
                id="startDate"
                type="date"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Data de conclusão
              </label>

              <input
                id="endDate"
                type="date"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>
        </section>

        {/* Informação financeira */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Informação financeira
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Regista o valor gasto nesta obra.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="cost"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Custo da obra (€)
              </label>

              <input
                id="cost"
                type="number"
                placeholder="Ex: 2500"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Empresa / profissional
              </label>

              <input
                id="company"
                type="text"
                placeholder="Ex: João & Filhos"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>
        </section>

        {/* Estado */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Estado
          </h2>

          <div className="mt-6">
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Estado da obra
            </label>

            <select
              id="status"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="planned">Planeada</option>
              <option value="ongoing">Em curso</option>
              <option value="completed">Concluída</option>
              <option value="cancelled">Cancelada</option>
            </select>
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
            to="/works"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
          >
            Cancelar
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Guardar obra
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateWork;