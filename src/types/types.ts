import { ColumnDef } from "@tanstack/react-table";

// Define the Inspection type
export type Inspection = {
  inspectionStatus: "Open" | "Ongoing" | "Submitted" | string;
  inspectionId: string;
  lotStatus: string;
  icPartName: string;
  supplierName: string;
  totalOrderQuantity: string;
  samplingSize: string;
  totalOK: string;
  totalNOK: string;
  createdAt: string; // Assuming createdAt is a date string
};

// Define the InspectionData type
export type InspectionData = {
  result: Inspection[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalTopics: number;
};

// Define the DataTableProps interface
export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
