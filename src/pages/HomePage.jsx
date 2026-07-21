import { useMemo } from "react";
import EnrollForm from "../components/EnrollForm";
import StudentList from "../components/StudentList";
import { useStudents } from "../context/StudentContext";
import useLocalStorage from "../hooks/useLocalStorage";

const HomePage = () => {
  const {
    students,
    loading,
    error,
    refreshRoster,
    TRACKS,
    handleEnroll,
  } = useStudents();

  const [filter, setFilter] = useLocalStorage("studentFilter", "");

  const filteredStudents = useMemo(() => {
    console.log("Filtering students...");

    return students.filter((student) =>
      `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
  }, [students, filter]);

  const averageScore = useMemo(() => {
    console.log("Calculating average score...");

    if (students.length === 0) return 0;

    return (
      students.reduce((sum, student) => sum + student.score, 0) /
      students.length
    ).toFixed(1);
  }, [students]);

  return (
    <div className="app-shell">
      <EnrollForm
        tracks={TRACKS}
        onEnroll={handleEnroll}
      />

      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search students..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <p>
        <strong>Average Score:</strong> {averageScore}%
      </p>

      {loading && (
        <div className="status loading">
          Loading roster...
        </div>
      )}

      {error && (
        <div className="status error">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div style={{ marginTop: "1.5rem" }}>
          <StudentList
            students={filteredStudents}
            title="Student Roster"
          >
            <div className="list-footer">
              End of roster — {filteredStudents.length} total students
            </div>
          </StudentList>

          <div
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
            }}
          >
            <button
              onClick={refreshRoster}
              className="btn btn-secondary"
            >
              ↻ Refresh Roster
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;