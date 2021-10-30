import React from "react";
import { useQuery } from "@apollo/client";
import getCoursesQuery from "../queries/getCoursesQuery";
import Paper from "@mui/material/Paper";
import {Button, Link} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

function Courses() {
    const { loading, error, data } = useQuery(getCoursesQuery(2019));
    if (error) return <p>Error :(</p>;

    const columns = [
        { field: "name", headerName: "Name", flex: 1, renderCell: (param) => (<Link href={`/courses/${param.id}`}>{param.value}</Link>) },
        { field: "total", headerName: "Total", flex: 1 },
        { field: "onGoing", headerName: "On going", flex: 1 },
        { field: "droppedOut", headerName: "Dropped Out", flex: 1 },
        { field: "transferred", headerName: "Transferred", flex: 1 },
        { field: "passed", headerName: "Passed", flex: 1 },
        { field: "failed", headerName: "Failed", flex: 1 }
    ];

    return (
        <>
            <h1>Courses</h1>
            <Paper elevation={4}>
                <DataGrid autoHeight rows={data? data.courses : []} columns={columns} loading={loading}/>
            </Paper>
            <Button color="primary" href="/courses/new" variant="outlined" >Add Course</Button>
        </>
    );
}

export default Courses;
