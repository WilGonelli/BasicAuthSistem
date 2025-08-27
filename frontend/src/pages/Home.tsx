import { Navigate } from "react-router-dom";
import { useUser } from "../viewmodels/userViewModel";

export default function Home() {
  const { user, loading } = useUser();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>{user.id}</h1>
    </div>
  );
}
