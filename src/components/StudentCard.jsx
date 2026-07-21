// Styling Method: CSS Modules

import { Link } from "react-router-dom";
import styles from "../styles/StudentCard.module.css";

function getGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "D";
}

const StudentCard = ({ student }) => {
  const borderColor =
    student.score >= 70
      ? styles.green
      : student.score >= 60
      ? styles.yellow
      : styles.red;

  return (
    <div className={`${styles.card} ${borderColor}`}>
      <img
        src={student.avatar}
        alt={`${student.firstName} ${student.lastName}`}
        className={styles.avatar}
      />

      <h3 className={styles.name}>
        <Link to={`/students/${student.id}`}>
          {student.firstName} {student.lastName}
        </Link>
      </h3>

      <p className={styles.detail}>
        {student.track}
      </p>

      <p className={styles.detail}>
        {student.email}
      </p>

      <p className={styles.detail}>
        Score: {student.score} ({getGrade(student.score)})
      </p>

      <span
        className={
          student.isActive
            ? styles.activeBadge
            : styles.inactiveBadge
        }
      >
        {student.isActive ? "Active" : "Inactive"}
      </span>

      <br />

      <Link
        to={`/students/${student.id}`}
        className={styles.button}
      >
        View Details
      </Link>
    </div>
  );
};

export default StudentCard;