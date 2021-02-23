import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export class RowData {
  public name: string;
  public calories: number;
  public fat: number;
  public carbs: number;
  public protein: number;

  constructor(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    this.name = name;
    this.calories = calories;
    this.fat = fat;
    this.carbs = carbs;
    this.protein = protein;
  }
}

export interface IGridData {
  rows: RowData[];
  columns: string[];
}

interface ITableProps {
  data: IGridData;
}

export default function BasicTable(props: ITableProps) {
  const classes = useStyles();

  return (
    <div role="grid">
      {(!props.data.rows || props.data.rows.length === 0) && <div>No Rows</div>}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.data.columns.map((column) => (
                <TableCell key={column} align="right">
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
