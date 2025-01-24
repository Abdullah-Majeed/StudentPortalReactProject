import Button from "./custom/Button";
import Input from "./custom/Input";

export default function Header() {
    return (
        <header id="main-header">
            <p>
                <label>Passing Marks: </label>
                <span>60/100</span>
            </p>
            <form>
                <Input label="Full Name: " type="text" id="full-name" />
                <Input label="Marks: " type="number" id="marks" />
                <Input
                    type="radio"
                    label="Fee Paid"
                    id="feePaid"
                    options={[
                        { label: 'Yes', value: 'yes' },
                        { label: 'No', value: 'no' },
                    ]}
                />
                <div className="control">
                    <label />
                    <Button>Submit Data</Button>
                </div>
            </form>
        </header>
    )
}