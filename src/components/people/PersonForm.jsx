import React, { Fragment, useReducer } from "react";
import axios from "axios";
import { FormGroup, FormLabel, TextField, Button } from "@material-ui/core";

function PersonForm(props) {
  const [person, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {}
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post("http://localhost:3000/people", person);
    props.history.push("/people");
  };

  const handleInput = (evt) => {
    console.log("handle inoput");
    const name = evt.target.id;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const Field = (props) => {
    return (
      <TextField
        id={props.id}
        label={props.label}
        type={props.type}
        required={props.required}
        InputLabelProps={{ shrink: true }}
        margin="normal"
        variant="outlined"
        onChange={handleInput}
      />
    );
  };

  const Group = (props) => {
    return (
      <FormGroup row>
        <FormLabel>{props.legend}</FormLabel>
        <FormGroup row>{props.children}</FormGroup>
      </FormGroup>
    );
  };

  return (
    <Fragment>
      <h1>Create New Person</h1>
      <form onSubmit={handleSubmit}>
        {/* <Group legend="General Info"> */}
        <fieldset>
          <Field id="christian_name" label="Christian Name"></Field>
          <TextField
            id="this"
            label="this"
            InputLabelProps={{ shrink: true }}
            margin="normal"
            variant="outlined"
            onChange={handleInput}
          ></TextField>
          <TextField id="that" label="that"></TextField>
          <Field id="name" label="Name" required></Field>
          <Field id="gender" label="Gender" required></Field>
          <Field
            id="birth_date"
            label="Birth Date"
            type="date"
            required
          ></Field>
          <Field id="birth_place" label="Birth Place"></Field>
          {/* </Group> */}
        </fieldset>

        <Group legend="Instructor Info">
          <Field id="occupation" label="Occupation"></Field>
          <Field id="patron_date" label="Patron Date"></Field>
          <Field id="phone" label="Phone"></Field>
          <Field id="email" label="Email"></Field>
        </Group>

        <Group legend="Address">
          <Field id="street_number" label="Street Number"></Field>
          <Field id="street_name" label="Street Name"></Field>
          <Field id="ward" label="Ward"></Field>
          <Field id="district" label="District"></Field>
          <Field id="area" label="Area"></Field>
        </Group>

        <Group legend="Parents">
          <Group legend="Father">
            <Field id="father_christian_name" label="Christian Name"></Field>
            <Field id="father_name" label="Name"></Field>
            <Field id="father_phone" label="Phone"></Field>
          </Group>
          <Group legend="Mother">
            <Field id="mother_chirstian_name" label="Christian Name"></Field>
            <Field id="mother_name" label="Name"></Field>
            <Field id="mother_phone" label="Phone"></Field>
          </Group>
        </Group>

        <Group legend="Sacraments">
          <Group legend="Baptism">
            <Field id="baptism_date" label="Date" type="date"></Field>
            <Field id="baptism_place" label="Place"></Field>
          </Group>
          <Group legend="Communion">
            <Field id="communion_date" label="Date" type="date"></Field>
            <Field id="communion_place" label="Place"></Field>
          </Group>
          <Group legend="Confirmation">
            <Field id="confirmation_date" label="Date" type="date"></Field>
            <Field id="confirmation_place" label="Place"></Field>
          </Group>
          <Group legend="Declaration">
            <Field id="declaration_date" label="Date" type="date"></Field>
            <Field id="declaration_place" label="Place"></Field>
          </Group>
        </Group>
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Fragment>
  );
}

export default PersonForm;
