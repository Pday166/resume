import {Personal, PersonalForm} from "./Person"
import {Experience} from "./Experience"

function Resume({personal, experience}) {

    return (
<>
<div className="resume">
<Personal personal={personal} />
<hr className="hr"></hr>
<Experience expArr={experience}/>
</div>
</>
    )
}

export {Resume}