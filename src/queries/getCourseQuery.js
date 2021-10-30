import {gql} from "@apollo/client";

function getCourseQuery(id) {
    return gql`{
        course(id: "${id}") {
            id,
            name,
            year,
            location,
            instructors {
                id
                fullChristianName
                birth { date }
                namedDate
                address { fullAddress }
                email
                phone
            }
            students {
                id
                fullChristianName
                birth { date } 
                address { fullAddress }
                mother { phone }
                father { phone }
            }
        }
    }`;
}

export default getCourseQuery;
