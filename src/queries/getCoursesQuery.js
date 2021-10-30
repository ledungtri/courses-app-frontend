import {gql} from "@apollo/client";

function getCoursesQuery(year) {
    return gql`{
        courses(year: ${year}) {
            id,
            name,
            total,
            onGoing,
            passed,
            transferred,
            droppedOut,
            failed
        }
    }`;
}

export default getCoursesQuery;
