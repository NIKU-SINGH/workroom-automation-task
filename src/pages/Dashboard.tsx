import * as React from "react";
import { Button } from "../components/ui/button";
import { ChevronRight, Download, Plus, RefreshCw } from "lucide-react";
import Combobox from "../components/Combobox";
import Datepicker from "../components/Datepicker";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DataTable } from "../components/Datatable/data-table";
import { columns } from "../components/Datatable/columns";
import { data } from "../data/data";

function Dashboard() {
  return (
    <>
      {/* Filter Section */}
      <div className=" p-4 mx-10 flex items-center justify-between flex-wrap">
        <div className="flex gap-2 flex-wrap">
          <Combobox />
          <Combobox />
          <Combobox />
          <Combobox />
          <Datepicker />
        </div>
        {/* Add button */}
        <Button className="bg-blue-600 font-normal gap-1">
          <Plus size={20} strokeWidth={2} /> New Inspection
        </Button>
      </div>
      <hr className="w-full border-t-2 border-gray-200" />
      {/* Header section and download data */}
      <div className="h-16 p-4 mx-10 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Inspections <span className="text-gray-500 font-normal">(32)</span>
        </h2>
        <div className="space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" size="icon">
                  <RefreshCw className="h-4 w-4" strokeWidth={2} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      {/* Render the table */}
      <div className=" p-4 mx-10">
        <DataTable columns={columns} data={data} />{" "}
      </div>
    </>
  );
}

export default Dashboard;
