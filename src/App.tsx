import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Dashboard";

import Properties from "./pages/Properties";
import CreateProperty from "./pages/CreateProperty";
import PropertyDetails from "./pages/PropertyDetails";

import Works from "./pages/Works";
import CreateWork from "./pages/CreateWork";
import WorkDetails from "./pages/WorkDetails";

import Expenses from "./pages/Expenses";
import CreateExpense from "./pages/CreateExpense";
import ExpenseDetails from "./pages/ExpenseDetails";

import Documents from "./pages/Documents";
import CreateDocument from "./pages/CreateDocument";
import DocumentDetails from "./pages/DocumentDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Aplicação */}
        <Route element={<AppLayout />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Imóveis */}
          <Route path="/properties" element={<Properties />} />
          <Route
            path="/properties/new"
            element={<CreateProperty />}
          />
          <Route
            path="/properties/:id"
            element={<PropertyDetails />}
          />

          {/* Obras */}
          <Route path="/works" element={<Works />} />
          <Route
            path="/works/new"
            element={<CreateWork />}
          />
          <Route
            path="/works/:id"
            element={<WorkDetails />}
          />

          {/* Despesas */}
          <Route path="/expenses" element={<Expenses />} />
          <Route
            path="/expenses/new"
            element={<CreateExpense />}
          />
          <Route
            path="/expenses/:id"
            element={<ExpenseDetails />}
          />

          {/* Documentos */}
          <Route
            path="/documents"
            element={<Documents />}
          />
          <Route
            path="/documents/new"
            element={<CreateDocument />}
          />
          <Route
            path="/documents/:id"
            element={<DocumentDetails />}
          />
        </Route>

        {/* Qualquer rota desconhecida */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;