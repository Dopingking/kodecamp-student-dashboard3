import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StatusMessage from "./components/StatusMessage";
import HomePage from "./pages/HomePage";
import StudentDetailPage from "./pages/StudentDetailPage";
import EnrollPage from "./pages/EnrollPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useStudents } from "./context/StudentContext";

function getAverage(students) {
  if (students.length === 0) return 0;
  return students.reduce((sum, s) => sum + s.score, 0) / students.length;
}

function App() {
  const { students, loading, error } = useStudents();

  const average = getAverage(students);
  const total = students.length;

  return (
    <div>
      <Header
        title="KodeCamp 6.0 — Enrollment Portal"
        studentCount={total}
        averageScore={average}
      />

      <Navbar />

      <div className="container">
        {loading && <StatusMessage type="loading" />}

        {error && <StatusMessage type="error" message={error} />}

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/students/:id"
            element={<StudentDetailPage />}
          />

          <Route
            path="/enroll"
            element={<EnrollPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;