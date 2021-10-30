import React, { Fragment } from 'react';
import EnrolledCourses from "../components/courses/enrolledCourses";
import InstructingCoures from "../components/courses/instructingCoures";

function PersonDetail() {
    return ( 
        <Fragment>
            <h1>Person Name</h1>
            Name DOB, Phone, Email

            <EnrolledCourses/>
            <InstructingCoures/>
        </Fragment>
    );
}
 
export default PersonDetail;