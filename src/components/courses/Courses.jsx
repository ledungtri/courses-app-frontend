import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../DataTable";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => setCourses(res.data));
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "total", headerName: "Total", flex: 1 },
    { field: "on_going", headerName: "On going", flex: 1 },
    { field: "dropped_out", headerName: "Dropped Out", flex: 1 },
    { field: "transferred", headerName: "Transferred", flex: 1 },
    { field: "failed", headerName: "Failed", flex: 1 },
    { field: "passed", headerName: "Passed", flex: 1 },
  ];

  return (
    <Fragment>
      <h1>Courses</h1>
      <DataTable rows={courses} columns={columns}></DataTable>
      <Button
        color="primary"
        href="/courses/new"
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Add Course
      </Button>
    </Fragment>
  );
}

export default Courses;
