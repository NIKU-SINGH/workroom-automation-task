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
  const newdata = {
    inspectionStatus: "Ongoing",
    inspectionId: "INS002",
    lotStatus: "In Progress",
    icPartName: "IC5678",
    supplierName: "Supplier B",
    totalOrderQuantity: "500",
    samplingSize: "25",
    totalOK: "23",
    totalNOK: "2",
    createdAt: "2024-07-02T09:00:00Z",
  };
  tableData.push(newdata);

  return newInspection;
};
