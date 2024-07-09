import { DataTable } from "../components/Datatable/data-table";
import { columns } from "../components/Datatable/columns";
import { fetchData } from "@/api/api";
import { useEffect, useState } from "react";
import { Inspection } from "@/types/types";

function Dashboard() {
  const [tableData, setTableData] = useState<Inspection[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchDataAndLog = async () => {
      try {
        const data = await fetchData();
        setTableData(data);
        setIsLoading(false); 
        // console.log("Data fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); 
      }
    };
    fetchDataAndLog();
  }, []);

  return (
    <div className="p-4 mx-10">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DataTable columns={columns} data={tableData} />
      )}
    </div>
  );
}

export default Dashboard;
