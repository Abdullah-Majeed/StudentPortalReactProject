import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";

export default function Form({ formAction, isLoading }) {
    return (
        <form action={formAction}>
            <Heading label="Passing Marks: " />
            <Input disbaled={isLoading} label="Full Name: " type="text" id="fullName" />
            <Input disbaled={isLoading} label="Marks: " type="number" id="marks" />
            <Input
                disbaled={isLoading}
                type="radio"
                label="Fee Paid"
                id="feePaid"
                options={[
                    { label: 'Yes', value: 'Yes' },
                    { label: 'No', value: 'No' },
                ]}
            />
            <div className="control">
                <label />
                <Button disbaled={isLoading}>Submit Data</Button>
            </div>
        </form>
    )
}