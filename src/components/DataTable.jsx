import React from "react";
import { DataGrid } from "@material-ui/data-grid";

function DataTable(props) {
  let rows = props.rows.map((row) => {
    row["id"] = row["_id"]["$oid"];
    return row;
  });

  return (
    <DataGrid autoHeight autoPageSize rows={rows} columns={props.columns} />
  );
}

export default DataTable;
