import { useContext, useActionState } from "react";
import { StudentContext } from "../context/StudentContextProvider";
import Form from "./custom/Form";


export default function Header() {
    const { addStudent } = useContext(StudentContext);

    function studentAction(prevState, formData) {
        const student = Object.fromEntries(formData.entries());
        addStudent(student);
    }
    const [formState, formAction, isLoading] = useActionState(studentAction, null);
    return (
        <header id="main-header">
            <Form formState={formState} formAction={formAction} isLoading={isLoading} />
        </header>
    )
}