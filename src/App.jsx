import Button from "./components/custom/Button.jsx"
import Header from "./components/Header.jsx"
import StudentTable from "./components/StudentTable.jsx"

function App() {
  return (
    <>
      <Header />
      <div className="control">
        <label />
        <Button>Delete</Button>
      </div>
      <div className="control">
        <label />
        <StudentTable />
      </div>

    </>
  )
}

export default App
