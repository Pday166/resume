
function Input({type, id, name, label, value, onChange}) {
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