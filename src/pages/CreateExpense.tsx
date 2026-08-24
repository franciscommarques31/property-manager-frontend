import { Link } from "react-router-dom";

function CreateExpense() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Cabeçalho */}
      <div className="mb-8">
        <Link
          to="/expenses"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar às despesas
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-slate-900">
          Adicionar despesa
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Regista um custo associado à gestão ou manutenção do imóvel.
        </p>
      </div>

      <form className="space-y-6">
        {/* Informação da despesa */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Informação da despesa
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Indica a que imóvel pertence esta despesa e qual o seu tipo.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Descrição */}
            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Descrição
              </label>

              <input
                id="description"
                type="text"
                placeholder="Ex: Pagamento do IMI"
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
                <option value="lisboa">Apartamento Lisboa</option>
                <option value="sintra">Apartamento Sintra</option>
                <option value="loures">Apartamento Loures</option>
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
                <option value="taxes">Impostos</option>
                <option value="condominium">Condomínio</option>
                <option value="insurance">Seguro</option>
                <option value="utilities">Água / Luz / Gás</option>
                <option value="accounting">Contabilidade</option>
                <option value="administrative">Administrativo</option>
                <option value="banking">Custos bancários</option>
                <option value="other">Outro</option>
              </select>
            </div>
          </div>
        </section>

        {/* Informação financeira */}
        <section className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Informação financeira
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Valor */}
            <div>
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Valor (€)
              </label>

              <input
                id="amount"
                type="number"
                step="0.01"
                placeholder="Ex: 350"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Data */}
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Data da despesa
              </label>

              <input
                id="date"
                type="date"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Periodicidade */}
            <div>
              <label
                htmlFor="frequency"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Periodicidade
              </label>

              <select
                id="frequency"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="once">Única</option>
                <option value="monthly">Mensal</option>
                <option value="quarterly">Trimestral</option>
                <option value="semiannual">Semestral</option>
                <option value="annual">Anual</option>
              </select>

              <p className="mt-2 text-xs text-slate-400">
                Define quando esta despesa deverá voltar a ser paga.
              </p>
            </div>

            {/* Método de pagamento */}
            <div>
              <label
                htmlFor="paymentMethod"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Método de pagamento
              </label>

              <select
                id="paymentMethod"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="">Selecionar método</option>
                <option value="transfer">Transferência bancária</option>
                <option value="card">Cartão</option>
                <option value="cash">Dinheiro</option>
                <option value="direct-debit">Débito direto</option>
                <option value="other">Outro</option>
              </select>
            </div>

            {/* Estado */}
            <div>
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
                <option value="paid">Pago</option>
                <option value="pending">Pendente</option>
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
            to="/expenses"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
          >
            Cancelar
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Guardar despesa
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateExpense;