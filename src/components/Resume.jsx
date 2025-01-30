import {Personal, PersonalForm} from "./Person"
import {Experience} from "./Experience"

function Resume({personal}) {

    return (
<>
<div className="resume">
<Personal personal={personal} />
</div>
</>
    )
}

export {Resume}