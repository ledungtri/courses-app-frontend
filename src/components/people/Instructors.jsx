import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DataTable from "../DataTable";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function Instructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3000/people")
      .then((res) => setInstructors(res.data));
  };

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
      <DataTable rows={instructors} columns={columns} />
      <Button
        color="primary"
        href="/people/new"
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Add Person
      </Button>
    </Fragment>
  );
}

export default Instructors;
