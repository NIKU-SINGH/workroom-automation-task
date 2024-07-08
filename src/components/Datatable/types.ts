export type Inspection = {
    inspectionStatus: "Open" | "Ongoing" | "Submitted" | string;
    inspectionId: string;
    lotStatus: string;
    icPartName: string;
    supplierName: string;
    totalOrderQuantity: number;
    samplingSize: number;
    totalOK: number;
    totalNOK: number;
    createdAt: string; // Assuming createdAt is a date string
  };
  