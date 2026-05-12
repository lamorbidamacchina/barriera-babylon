import App from "./App.jsx";
import Privacy from "./Privacy.jsx";

function normalizePath(pathname) {
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export default function Root() {
  if (normalizePath(window.location.pathname) === "/privacy") {
    return <Privacy />;
  }
  return <App />;
}
