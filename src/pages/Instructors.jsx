import React, { Fragment, useState } from "react";
import {DataGrid} from "@mui/x-data-grid";
import {Button} from "@mui/material";

function Instructors() {
  const [instructors, setInstructors] = useState([]);

  const columns = [
    { field: "course", headerName: "Course", flex: 0.5 },
    { field: "role", headerName: "Role", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "birth_date", headerName: "DOB", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
  ];

  return (
    <Fragment>
      <h1>Instructors</h1>
        <DataGrid autoHeight autoPageSize rows={instructors} columns={columns} />
      <Button color="primary" href="/people/new" variant="outlined">Person</Button>
    </Fragment>
  );
}

export default Instructors;
