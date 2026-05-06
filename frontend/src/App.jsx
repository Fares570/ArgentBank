import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import Transactions from "./pages/Transaction";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Layout>
  );
}