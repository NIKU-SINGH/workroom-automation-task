import { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { createPortal } from "react-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addNewInspection } from "@/api/api";

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    inspectionId: "",
    lotStatus: "",
    icPartName: "",
    supplierName: "",
    totalOrderQuantity: "",
    samplingSize: "",
    totalOK: "",
    totalNOK: "",
    createdAt: "",
    inspectionStatus: "",
  });

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const respone = await addNewInspection(formData);
    console.log("Submitting form data:", respone);
    // Close modal after submission
    setIsModalOpen(false);
    // Reset form data if needed

    setFormData({
      inspectionId: "",
      lotStatus: "",
      icPartName: "",
      supplierName: "",
      totalOrderQuantity: "",
      samplingSize: "",
      totalOK: "",
      totalNOK: "",
      createdAt: "",
      inspectionStatus: "",
    });
  };

  return (
    <>
      <Button
        onClick={handleButtonClick}
        className="bg-blue-600 font-normal gap-1"
      >
        <Plus size={20} strokeWidth={2} /> New Inspection
      </Button>

      {isModalOpen &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-[rgba(50,50,50,0.5)] flex justify-center items-center">
            <Card className="w-[500px] h-auto">
              <CardHeader>
                <CardTitle>Create New Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-1">
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="inspectionId">
                        Inspection ID
                      </Label>
                      <Input
                        id="inspectionId"
                        name="inspectionId"
                        value={formData.inspectionId}
                        onChange={handleInputChange}
                        placeholder="Enter Inspection ID"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="lotStatus">
                        Lot Status/Verdict
                      </Label>
                      <Input
                        id="lotStatus"
                        name="lotStatus"
                        value={formData.lotStatus}
                        onChange={handleInputChange}
                        placeholder="Enter Lot Status"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="icPartName">
                        IC Part Name
                      </Label>
                      <Input
                        id="icPartName"
                        name="icPartName"
                        value={formData.icPartName}
                        onChange={handleInputChange}
                        placeholder="Enter IC Part Name"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="supplierName">
                        Supplier Name
                      </Label>
                      <Input
                        id="supplierName"
                        name="supplierName"
                        value={formData.supplierName}
                        onChange={handleInputChange}
                        placeholder="Enter Supplier Name"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="totalOrderQuantity">
                        Total Order Quantity
                      </Label>
                      <Input
                        id="totalOrderQuantity"
                        name="totalOrderQuantity"
                        value={formData.totalOrderQuantity}
                        onChange={handleInputChange}
                        placeholder="Enter Total Order Quantity"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="samplingSize">
                        Sampling Size
                      </Label>
                      <Input
                        id="samplingSize"
                        name="samplingSize"
                        value={formData.samplingSize}
                        onChange={handleInputChange}
                        placeholder="Enter Sampling Size"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="totalOK">
                        Total OK
                      </Label>
                      <Input
                        id="totalOK"
                        name="totalOK"
                        value={formData.totalOK}
                        onChange={handleInputChange}
                        placeholder="Enter Total OK"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="totalNOK">
                        Total NOK
                      </Label>
                      <Input
                        id="totalNOK"
                        name="totalNOK"
                        value={formData.totalNOK}
                        onChange={handleInputChange}
                        placeholder="Enter Total NOK"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="createdAt">
                        Created At
                      </Label>
                      <Input
                        id="createdAt"
                        name="createdAt"
                        value={formData.createdAt}
                        onChange={handleInputChange}
                        placeholder="Enter Created At Date"
                      />
                    </div>
                    <div className="flex items-center space-y-1.5">
                      <Label className="w-60" htmlFor="inspectionStatus">
                        Inspection Status
                      </Label>
                      <Select>
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem
                            value="open"
                            onClick={() => setFormData((prevData) => ({
                              ...prevData,
                              inspectionStatus: "open",
                            }))}
                          >
                            Open
                          </SelectItem>
                          <SelectItem
                            value="ongoing"
                            onClick={() => setFormData((prevData) => ({
                              ...prevData,
                              inspectionStatus: "ongoing",
                            }))}
                          >
                            Ongoing
                          </SelectItem>
                          <SelectItem
                            value="submitted"
                            onClick={() => setFormData((prevData) => ({
                              ...prevData,
                              inspectionStatus: "submitted",
                            }))}
                          >
                            Submitted
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <CardFooter className="flex justify-end space-x-2 bottom-0">
                    <Button
                      type="submit"
                      className="bg-green-600 font-normal gap-1"
                    >
                      Create
                    </Button>
                    <Button
                      onClick={handleButtonClick}
                      className="bg-red-600 font-normal gap-1"
                    >
                      Close
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>,
          document.body
        )}
    </>
  );
}

export default Index;
