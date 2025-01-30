
function PersonalForm({personal, handleChange}){
    return (
<>
<form action="" className="form">
    <label htmlFor="name">Name:</label>
<input 
type="text" 
id="name" 
className="input" 
name="name" 
onChange={handleChange}
value={personal.name}
/>
<label htmlFor="phone">Phone:</label>
<input 
type="text" 
id="phone"
name="phone"
className="input" 
onChange={handleChange}
value={personal.phone}
/>
<button type="button" className="btn">Submit</button>
</form>
</>
    )
}



function Personal({personal}){
    return (
<>
<div className="personal">
<h1>{personal.name}</h1>
<p>{personal.phone}</p>
</div>
</>
    )
}



export {Personal, PersonalForm}