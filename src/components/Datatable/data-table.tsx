import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Datepicker from "../Datepicker";
import Modal from "../Modal";
import DownloadButton from "../DownloadButton";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [filterValues, setFilterValues] = React.useState<{
    [key: string]: string;
  }>({});

  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  // Apply filters dynamically based on filterValues
  React.useEffect(() => {
    const newFilters = Object.entries(filterValues).map(([key, value]) => ({
      id: key,
      value,
    }));
    setColumnFilters(newFilters);
  }, [filterValues]);

  React.useEffect(() => {
    Object.entries(filterValues).forEach(([columnName, value]) => {
      if (value === "all") {
        table.getColumn(columnName)?.setFilterValue(undefined);
      } else {
        table.getColumn(columnName)?.setFilterValue(value);
      }
    });
  }, [filterValues, table]);

  // Get unique values from specified columns for filtering
  const getUniqueColumnValues = (columnName: string) => {
    const uniqueValues = new Set(data.map((item) => item[columnName as keyof typeof item]));
    return Array.from(uniqueValues);
  };

  // Calculate the number of rows displayed after filtering
  const displayedRowCount = React.useMemo(() => {
    return table.getRowModel().rows?.length ?? 0;
  }, [table.getRowModel().rows]);

  // Render select options for each filterable column
  const renderFilterOptions = (columnName: string) => (
    <>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={`Filter by ${columnName}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {getUniqueColumnValues(columnName).map((value : any,idx:number) => (
          <SelectItem key={idx} value={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </>
  );

  const filterColumnList = [
    "inspectionStatus",
    "supplierName",
    "icPartName",
    "lotStatus",
  ];

//   console.log("filter value", filterValues);
  return (
    <div>
      <div className="flex items-center py-4 space-x-4 flex-wrap space-y-2">
        {filterColumnList.map((columnName) => (
          <Select
            key={columnName}
            value={filterValues[columnName]}
            onValueChange={(value) =>
              setFilterValues((prev) => ({
                ...prev,
                [columnName]: value,
              }))
            }
          >
            {renderFilterOptions(columnName)}
          </Select>
        ))}
        <Datepicker />
        {/* Add button */}
        <Modal />
      </div>
      <hr className="w-full border-t-2 border-gray-200" />

      {/* Header section and download data */}
      <div className="h-16  flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Inspections{" "}
          <span className="text-gray-500 font-normal">{displayedRowCount}</span>
        </h2>
        <DownloadButton />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
