import { ColumnDef } from "@tanstack/react-table";
import Inspection from "../types/Inspection";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export const columns: ColumnDef<Inspection>[] = [
  {
    accessorKey: "inspectionStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Inspection Status</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("inspectionStatus") || "Not yet started";
      return (
        <div className="text-center">
          <span
            className={`px-4 py-1 text-xs font-semibold rounded-md ${
              status === "Open"
                ? "bg-blue-100 text-blue-800"
                : status === "Ongoing"
                ? "bg-yellow-100 text-yellow-800"
                : status === "Submitted"
                ? "bg-green-100 text-green-800"
                : "bg-red-300 text-gray-800"
            }`}
          >
            {status}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "inspectionId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Inspection ID</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const inspectionId = row.getValue("inspectionId") || "not found";
      return <div className="text-center">{inspectionId}</div>;
    },
  },
  {
    accessorKey: "lotStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Lot Status/Verdict</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const lotStatus = row.getValue("lotStatus") || "not found";
      return <div className="text-center">{lotStatus}</div>;
    },
  },
  {
    accessorKey: "icPartName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">IC Part Name</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const icPartName = row.getValue("icPartName") || "not found";
      return <div className="text-center">{icPartName}</div>;
    },
  },
  {
    accessorKey: "supplierName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Supplier Name</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const supplierName = row.getValue("supplierName") || "not found";
      return <div className="text-center">{supplierName}</div>;
    },
  },
  {
    accessorKey: "totalOrderQuantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Total Order Quantity</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const totalOrderQuantity = parseInt(row.getValue("totalOrderQuantity"));
      return <div className="text-center">{totalOrderQuantity}</div>;
    },
  },
  {
    accessorKey: "samplingSize",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Sampling Size</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const samplingSize = parseInt(row.getValue("samplingSize"));
      return <div className="text-center">{samplingSize}</div>;
    },
  },
  {
    accessorKey: "totalOK",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Total OK</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const totalOK = parseInt(row.getValue("totalOK"));
      return <div className="text-center">{totalOK}</div>;
    },
  },
  {
    accessorKey: "totalNOK",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Total NOK</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const totalNOK = parseInt(row.getValue("totalNOK"));
      return <div className="text-center">{totalNOK}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-black">Created At</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue("createdAt")).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
      return <div>{createdAt}</div>;
    },
  },
];
