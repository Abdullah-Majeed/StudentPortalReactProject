import { useContext } from "react";
import { StudentContext } from "../context/StudentContextProvider";

export default function StudentTable() {
    const { students } = useContext(StudentContext);
    
    const getPassFailStatus = (marks, feePaid) => {
        return marks >= 60 && feePaid === "Yes" ? "Pass" : "Fail";
    };
    if (students.length === 0) {
        return (
            <p className="control">
                No record found!
            </p>
        )
    }
    return (
        <main>
            <table className="table">
                <thead>
                    <tr>
                        <th />
                        <th>Full Name</th>
                        <th>Marks</th>
                        <th>Fee Paid</th>
                        <th>Pass/Fail</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 && students.map((row) => {
                        const passFail = getPassFailStatus(Number(row.marks), row.feePaid);
                        return (
                            <tr key={row.id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{row.fullName}</td>
                                <td>{row.marks}</td>
                                <td>{row.feePaid}</td>
                                <td className={passFail === "Pass" ? "status-pass" : "status-fail"}>
                                    {passFail}
                                </td>
                                <td>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </main>
    )
}