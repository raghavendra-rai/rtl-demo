import { setupServer } from "msw/node";
import { rest } from "msw";
import { baseUrl } from "../App/Service";
import { IGridData, RowData } from "../App/Components/Table";

export const columns: string[] = [
  "Dessert (100g serving)",
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
];

export const rows = [
  new RowData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  new RowData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  new RowData("Eclair", 262, 16.0, 24, 6.0),
  new RowData("Cupcake", 305, 3.7, 67, 4.3),
  new RowData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const server = setupServer(
  rest.get<boolean>(`${baseUrl}/login`, (req, res, ctx) => {
    const username = req.url.searchParams.get("username");
    const password = req.url.searchParams.get("password");
    const result = username === "u1" && password === "p1";
    return res(ctx.status(200), ctx.json(result));
  }),
  rest.get<IGridData>(`${baseUrl}/griddata`, (req, res, ctx) => {
    const gridData: IGridData = { rows, columns };
    return res(ctx.status(200), ctx.json(gridData));
  })
);
