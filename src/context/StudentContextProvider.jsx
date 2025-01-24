import { createContext, useEffect, useReducer } from "react";
const initialData = [
    {
        "id": "s1",
        "fullName": "Jane Smith",
        "marks": "45",
        "feePaid": "No"
    },
    {
        "id": "s2",
        "fullName": "Sam Wilson",
        "marks": "78",
        "feePaid": "Yes"
    },
    {
        "id": "s3",
        "fullName": "Alice Johnson",
        "marks": "92",
        "feePaid": "Yes"
    }
]
export const StudentContext = createContext({
    students: [],
    addStudent: (student) => { },
    updateStudent: (student) => { },
    deleteStudent: (id) => { }
});

const studentReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return {
                ...state,
                students: [action.payload, ...state.students],
            };
        case 'UPDATE_STUDENT':
            return {
                ...state,
                students: state.students.map(student =>
                    student.id === action.payload.id
                        ? { ...student, ...action.payload }
                        : student
                ),
            };
        case 'DELETE_STUDENT':
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload),
            };
        default:
            return state;
    }
};
const StudentContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(studentReducer, {
        students: JSON.parse(localStorage.getItem('students')) || initialData
    });

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(state.students));
    }, [state.students]);

    // Add Student
    const addStudent = (student) => {
        dispatch({ type: 'ADD_STUDENT', payload: student });
    };

    // Update Student
    const updateStudent = (student) => {
        dispatch({ type: 'UPDATE_STUDENT', payload: student });
    };

    // Delete Student
    const deleteStudent = (id) => {
        dispatch({ type: 'DELETE_STUDENT', payload: id });
    };

    return (
        <StudentContext.Provider
            value={{
                students: state.students,
                addStudent,
                updateStudent,
                deleteStudent,
            }}
        >
            {children}
        </StudentContext.Provider>
    );
};
export default StudentContextProvider;