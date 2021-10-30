import React from "react";
import { useParams } from "react-router-dom";
import {useQuery} from "@apollo/client";
import getCourseQuery from "../queries/getCourseQuery";
import { DataGrid } from '@mui/x-data-grid';
import Paper from "@mui/material/Paper";
import {Link, Typography} from "@mui/material";

function CourseDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(getCourseQuery(id));
    const course = data? data.course : {};
    if (error) return <p>Error :(</p>;

    const instructorColumns = [
        { field: "fullChristianName", headerName: "Name", flex: 1.5, renderCell: (param) => (<Link href={`/people/${param.id}`}>{param.value}</Link>) },
        { field: "birth", headerName: "Birth Date", flex: 1, valueGetter: (param) => param.value.date },
        { field: "namedDate", headerName: "namedDate", flex: 1 },
        { field: "address", headerName: "Address", flex: 2, valueGetter: (param) => param.value.fullAddress },
        { field: "phone", headerName: "phone", flex: 1 }
    ];

    const studentColumns = [
        { field: "fullChristianName", headerName: "Name", flex: 1.5, renderCell: (param) => (<Link href={`/people/${param.id}`}>{param.value}</Link>) },
        { field: "birth", headerName: "Birth Date", flex: 1, valueGetter: (param) => param.value.date },
        { field: "address", headerName: "Address", flex: 2, valueGetter: (param) => param.value.fullAddress },
        { field: "father", headerName: "Father Phone", flex: 1, valueGetter: (param) => param.value.phone },
        { field: "mother", headerName: "Mother Phone", flex: 1, valueGetter: (param) => param.value.phone }
    ];

    return (
        <>
            <Typography variant="h4" align="center">{course.name}</Typography>
            <Paper elevation={4}>
                <Typography variant="body1" align="center">{course.year}</Typography>
                <Typography variant="body1" align="center">{course.location}</Typography>
            </Paper>
            <Typography variant="h4" align="center">Instructors</Typography>
            <DataGrid components={Paper} autoHeight rows={course.instructors? course.instructors : []} columns={instructorColumns} loading={loading}/>

            <Typography variant="h4" align="center">Students</Typography>
            <DataGrid autoHeight rows={course.students? course.students : []} columns={studentColumns} loading={loading}/>
        </>
    );
}

export default CourseDetail;
