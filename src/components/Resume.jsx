import {Personal} from "./Person"
import {Experience} from "./Experience"

function Resume({personal}) {

    return (
<>
<Personal personal={personal} />
</>
    )
}

export {Resume}