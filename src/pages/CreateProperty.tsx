import { Link } from "react-router-dom";

function CreateProperty() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/properties"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar aos imóveis
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-slate-900">
          Adicionar imóvel
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Adiciona as informações do imóvel.
        </p>
      </div>

      <form className="space-y-6">
        {/* Informações gerais */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Informações gerais
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Informação básica sobre o imóvel.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Nome do imóvel
              </label>

              <input
                id="name"
                type="text"
                placeholder="Ex: Apartamento Lisboa"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Tipo
              </label>

              <select
                id="type"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="">Selecionar</option>
                <option value="T0">T0</option>
                <option value="T1">T1</option>
                <option value="T2">T2</option>
                <option value="T3">T3</option>
                <option value="T4">T4</option>
                <option value="Moradia">Moradia</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="area"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Área (m²)
              </label>

              <input
                id="area"
                type="number"
                placeholder="Ex: 85"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Morada
              </label>

              <input
                id="address"
                type="text"
                placeholder="Rua, número..."
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Localidade
              </label>

              <input
                id="location"
                type="text"
                placeholder="Ex: Lisboa"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
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
            Valores relacionados com o investimento no imóvel.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="purchasePrice"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Valor de aquisição (€)
              </label>

              <input
                id="purchasePrice"
                type="number"
                placeholder="Ex: 150000"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="monthlyRent"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Renda mensal (€)
              </label>

              <input
                id="monthlyRent"
                type="number"
                placeholder="Ex: 950"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>
        </section>

        {/* Estado */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Estado do imóvel
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Indica a situação atual do imóvel.
          </p>

          <div className="mt-6">
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Estado
            </label>

            <select
              id="status"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="available">Disponível</option>
              <option value="rented">Arrendado</option>
              <option value="renovation">Em obras</option>
            </select>
          </div>
        </section>

        {/* Botões */}
        <div className="flex items-center justify-end gap-3 pb-8">
          <Link
            to="/properties"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
          >
            Cancelar
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Guardar imóvel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProperty;