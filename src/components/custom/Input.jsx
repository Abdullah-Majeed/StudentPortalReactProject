export default function Input({ label, id, type, options, ...props }) {
    return (
        <p className="control">
            {type === 'radio' ? (
                <>
                    <label htmlFor={id}>{label}</label>
                    <div className="radio-group">
                        {options.map((option, index) => (
                            <label key={index}>
                                <input
                                    min={0}
                                    max={100}
                                    type="radio"
                                    name={id}
                                    value={option.value}
                                    required
                                    {...props}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <label htmlFor={id}>{label}</label>
                    <input type={type} {...props} id={id} name={id} required />
                </>
            )}
        </p>
    );
}
