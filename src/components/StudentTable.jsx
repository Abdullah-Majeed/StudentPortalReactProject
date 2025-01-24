export default function StudentTable() {
    const data = [
        { id: 1, fullName: "John Doe", marks: 85, feePaid: "No", pass: "Pass" },
        { id: 2, fullName: "Jane Smith", marks: 45, feePaid: "No", pass: "Fail" },
        { id: 3, fullName: "Sam Wilson", marks: 78, feePaid: "Yes", pass: "Pass" },
        { id: 4, fullName: "Alice Johnson", marks: 92, feePaid: "Yes", pass: "Pass" },
    ];
    const getPassFailStatus = (marks, feePaid) => {
        return marks >= 60 && feePaid === "Yes" ? "Pass" : "Fail";
    };
    return (
        <main>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#0047AB", color: "white" }}>
                        <th style={{ padding: "10px", textAlign: "center" }}>
                        </th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Full Name</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Marks</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Fee Paid</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Pass/Fail</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        const passFail = getPassFailStatus(row.marks, row.feePaid);
                        return (
                            <tr
                                key={row.id}
                                style={{
                                    backgroundColor: index % 2 === 1 ? "#f2f2f2" : "white", // Grey for even rows
                                    borderBottom: "1px solid #ddd",
                                    color: '#000000'
                                }}
                            >
                                <td style={{ padding: "10px", textAlign: "center" }}>
                                    <input type="checkbox" />
                                </td>
                                <td style={{ padding: "10px" }}>{row.fullName}</td>
                                <td style={{ padding: "10px", textAlign: "center" }}>{row.marks}</td>
                                <td style={{ padding: "10px", textAlign: "center" }}>{row.feePaid}</td>
                                <td
                                    style={{
                                        padding: "10px",
                                        textAlign: "center",
                                        color: passFail === "Pass" ? "green" : "red",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {passFail}
                                </td>
                                <td style={{ padding: "10px", textAlign: "center" }}>
                                    <a
                                        href="#"
                                        style={{
                                            color: "#007bff",
                                            textDecoration: "underline",
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            alert(`Editing ${row.fullName}`);
                                        }}
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}