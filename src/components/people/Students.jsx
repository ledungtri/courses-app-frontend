import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import DataTable from "../DataTable";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3000/people")
      .then((res) => setStudents(res.data));
  };

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
      <DataTable rows={students} columns={columns} />
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

export default Students;
