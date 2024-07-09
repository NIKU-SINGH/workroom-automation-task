// api/fetchData.ts
import { Inspection } from "@/types/types";
import { tableData } from "../data/data";

export const fetchData = async (): Promise<Inspection[]> => {
  // Simulate a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tableData;
};

export const addNewInspection = async (
  newInspection: Inspection
): Promise<Inspection> => {
  // Simulate a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  tableData.push(newInspection);

  return newInspection;
};
