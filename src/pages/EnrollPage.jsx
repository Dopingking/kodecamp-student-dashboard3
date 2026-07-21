import { useNavigate } from "react-router-dom";
import EnrollForm from "../components/EnrollForm";
import { useStudents } from "../context/StudentContext";

const EnrollPage = () => {
  const navigate = useNavigate();

  const { TRACKS, handleEnroll } = useStudents();

  function handleEnrollAndRedirect(student) {
    handleEnroll(student);

    // Required for Stage 5
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate("/");
  }

  return (
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1.5rem",
          color: "#0f172a",
        }}
      >
        ➕ Enroll New Student
      </h2>

      <div className="enroll-form">
        <EnrollForm
          tracks={TRACKS}
          onEnroll={handleEnrollAndRedirect}
        />
      </div>
    </div>
  );
};

export default EnrollPage;