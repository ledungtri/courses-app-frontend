import React, { Fragment } from 'react';
import EnrolledCourses from "../courses/enrolledCourses";
import InstructingCoures from "../courses/instructingCoures";

function PersonDetail() {
    return ( 
        <Fragment>
            <h1>Person Name</h1>
            Name DOB, Phone, Email

            <EnrolledCourses></EnrolledCourses>
            <InstructingCoures></InstructingCoures>
        </Fragment>
    );
}
 
export default PersonDetail;