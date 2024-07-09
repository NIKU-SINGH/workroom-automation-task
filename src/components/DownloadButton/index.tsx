import React from 'react';
import jsPDF from 'jspdf';
import { tableData } from '@/data/data'; // Adjust the path as per your project structure
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const Index: React.FC = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Set PDF title
    doc.setProperties({
      title: 'Inspection Data PDF',
    });

    // Table header
    const headers = Object.keys(tableData[0]); // Assuming all inspections have same keys
    const data = tableData.map(data => Object.values(data));

    // Add table headers
    doc.text('Inspection Data', 14, 10);
    // @ts-ignore
    doc.autoTable({
      head: [headers],
      body: data,
    });

    // Save the PDF
    doc.save('inspection_data.pdf');
  };

  return (
    <>
      <div className="space-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="icon" onClick={downloadPDF}>
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download Inspection Data</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default Index;
