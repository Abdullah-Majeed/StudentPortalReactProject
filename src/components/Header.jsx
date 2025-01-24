import Button from "./custom/Button";
import Heading from "./custom/Heading";
import Input from "./custom/Input";

export default function Header() {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <header id="main-header">

            <form onSubmit={handleSubmit}>
                <Heading label="Passing marks: " />
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