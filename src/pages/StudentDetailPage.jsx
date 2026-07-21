import { Link, useParams } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import "../styles/StudentDetail.css"; // Stage 5 requirement

const StudentDetailPage = () => {
  const { id } = useParams();
  const { students } = useStudents();

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="detail-card">
        <h2>Student not found</h2>
        <p>The requested student does not exist.</p>

        <Link to="/" className="btn btn-primary">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-card">
      <div className="detail-header">
        <img
          src={student.avatar}
          alt={`${student.firstName} ${student.lastName}`}
          className="detail-avatar"
        />

        <h2>
          {student.firstName} {student.lastName}
        </h2>

        <p className="detail-track">
          {student.track} Track
        </p>
      </div>

      <div className="detail-info">
        <p>
          <strong>📧 Email:</strong> {student.email}
        </p>

        <p>
          <strong>📊 Score:</strong> {student.score}/100
        </p>

        <p>
          <strong>🎯 Status:</strong>

          <span
            className={
              student.isActive ? "status-active" : "status-inactive"
            }
          >
            {student.isActive ? "Active" : "Inactive"}
          </span>
        </p>
      </div>

      <Link to="/" className="btn btn-primary">
        ← Back to Roster
      </Link>
    </div>
  );
};

export default StudentDetailPage;