import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";

const StudentContext = createContext();

const TRACKS = ["Frontend", "Backend", "Mobile", "Data"];

const SEED_STUDENTS = [
  {
    id: "seed-1",
    firstName: "Amara",
    lastName: "Johnson",
    email: "amara@kodecamp.dev",
    track: "Frontend",
    score: 92,
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "seed-2",
    firstName: "Chidi",
    lastName: "Okafor",
    email: "chidi@kodecamp.dev",
    track: "Backend",
    score: 67,
    isActive: false,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const initialState = {
  students: [],
  loading: true,
  error: null,
};

function studentReducer(state, action) {
  switch (action.type) {
    case "SET_STUDENTS":
      return {
        ...state,
        students: action.payload,
      };

    case "ADD_STUDENT":
      return {
        ...state,
        students: [action.payload, ...state.students],
      };

    case "REMOVE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  const refreshRoster = useCallback(async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    dispatch({
      type: "SET_ERROR",
      payload: null,
    });

    try {
      const res = await fetch(
        "https://randomuser.me/api/?results=6&nat=us,gb"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();

      const fetched = data.results.map((user, i) => ({
        id: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        avatar: user.picture.thumbnail,
        track: TRACKS[i % TRACKS.length],
        score: Math.floor(Math.random() * 61) + 40,
        isActive: true,
      }));

      dispatch({
        type: "SET_STUDENTS",
        payload: [...SEED_STUDENTS, ...fetched],
      });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err.message,
      });

      dispatch({
        type: "SET_STUDENTS",
        payload: SEED_STUDENTS,
      });
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  }, []);

  useEffect(() => {
    refreshRoster();
  }, [refreshRoster]);

  const handleEnroll = useCallback((newStudent) => {
  console.log("handleEnroll recreated");

  dispatch({
    type: "ADD_STUDENT",
    payload: newStudent,
  });
}, []);
  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        loading: state.loading,
        error: state.error,
        dispatch,
        handleEnroll,
        refreshRoster,
        TRACKS,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudents must be used within StudentProvider");
  }

  return context;
}