import React, { Fragment, useState } from "react";
import {DataGrid} from "@mui/x-data-grid";
import {Button} from "@mui/material";

function Students() {
  const [students, setStudents] = useState([]);

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "birth_date", headerName: "DOB", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "father_phone", headerName: "Father phone", flex: 1 },
    { field: "mother_phone", headerName: "Mother phone", flex: 1 },
    { field: "course", headerName: "Course", flex: 0.5 },
    { field: "result", headerName: "Result", flex: 0.5 },
  ];

  return (
    <Fragment>
      <h1>Students</h1>
      <DataGrid autoHeight autoPageSize rows={students} columns={columns} />
      <Button color="primary" href="/people/new" variant="outlined">Add Person</Button>
    </Fragment>
  );
}

export default Students;
