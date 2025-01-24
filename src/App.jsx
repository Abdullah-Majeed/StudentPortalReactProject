import Button from "./components/custom/Button.jsx"
import Header from "./components/Header.jsx"
import StudentTable from "./components/StudentTable.jsx"
import StudentContextProvider from "./context/StudentContextProvider.jsx"
function App() {
  return (
    <StudentContextProvider>
      <Header />
      <div className="control">
        <label />
        <Button>Delete</Button>
      </div>
      <div className="control">
        <label />
        <StudentTable />
      </div>
    </StudentContextProvider>
  )
}

export default App
