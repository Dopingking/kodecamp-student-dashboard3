// Styling Method: Inline Styles

import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "70vh",
    textAlign: "center",
    padding: "2rem",
  },

  title: {
    fontSize: "5rem",
    color: "#2563eb",
    fontWeight: "bold",
    marginBottom: "1rem",
  },

  subtitle: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#1e293b",
  },

  text: {
    color: "#64748b",
    marginBottom: "2rem",
  },

  button: {
    background: "#2563eb",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>

      <h2 style={styles.subtitle}>
        Page Not Found
      </h2>

      <p style={styles.text}>
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link to="/" style={styles.button}>
        ← Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;