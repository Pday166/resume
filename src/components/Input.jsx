
function Input({type, id, name, label, value, onChange}) {
    if (type === 'textarea'){
        return (
            <>
            <label htmlFor={id}>{label}</label>
            <textarea
            type={type} 
            id={id} 
            name={name}
            onChange={onChange}
            value={value}
            />
            </>
        )
    }
    return (
<>
<label htmlFor={id}>{label}:</label>
<input 
type={type} 
id={id} 
name={name}
onChange={onChange}
value={value}
/>
</>
)


}

export {Input}