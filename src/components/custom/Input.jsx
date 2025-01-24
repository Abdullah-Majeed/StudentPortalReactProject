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
            <input {...props} id={id} name={id} required />
          </>
        )}
      </p>
    );
  }
  