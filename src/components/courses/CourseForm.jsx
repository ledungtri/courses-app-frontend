import React, { Fragment, useReducer } from "react";
import {Button, TextField} from "@mui/material";

function CourseForm(props) {
  const [course, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {}
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // axios.post("http://localhost:3000/courses", course);
    props.history.push("/courses");
  };

  const handleInput = (evt) => {
    console.log("handle inoput");

    const name = evt.target.id;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <Fragment>
      <h1>Create New Course</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <TextField
            id="year"
            label="Year"
            type="number"
            required
            onChange={handleInput}
          />
          <TextField
            id="family"
            label="Family"
            required
            onChange={handleInput}
          />
          <TextField
            id="level"
            label="Level"
            type="number"
            onChange={handleInput}
          />
          <TextField id="group" label="Group" required onChange={handleInput} />
          <TextField id="location" label="Location" onChange={handleInput} />
        </fieldset>

        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Fragment>
  );
}

export default CourseForm;
