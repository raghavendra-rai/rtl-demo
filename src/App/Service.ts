import { IGridData } from "./Components/Table";

const delay = async () => {
  await new Promise((r) => setTimeout(r, 1000));
};

export const baseUrl = "http://localhost:3456";

export const login = async (
  userName: string,
  password: string
): Promise<boolean> => {
  await delay();
  const resp = await fetch(
    `${baseUrl}/login?username=${userName}&password=${password}`
  );
  return ((await resp.json()) as unknown) as boolean;
};

export const getGridData = async (): Promise<IGridData> => {
  await delay();
  const resp = await fetch(`${baseUrl}/griddata`);
  return ((await resp.json()) as unknown) as IGridData;
};
