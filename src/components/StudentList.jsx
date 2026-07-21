import StudentCard from "./StudentCard";

const StudentList = ({
  students,
  title = "All Students",
  children,
}) => {
  if (!students || students.length === 0) {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <p className="text-gray-500">
          No students to display yet.
        </p>

        {children}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      {/* Responsive Grid - Stage 5 Requirement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>

      {children}
    </div>
  );
};

export default StudentList;