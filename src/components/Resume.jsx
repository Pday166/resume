import {Personal, PersonalForm} from "./Person"
import {Experience} from "./Experience"
import { SiEducative } from "react-icons/si"

function Resume({personal, experience, expArr, editExp}) {

    return (
<>
<div className="resume">
<Personal personal={personal} />
<hr className="hr"></hr>
<Experience expArr={expArr} experience={experience} editExp={editExp}/>
</div>
</>
    )
}

export {Resume}