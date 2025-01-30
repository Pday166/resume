
function PersonalForm(){
    return (
<>

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