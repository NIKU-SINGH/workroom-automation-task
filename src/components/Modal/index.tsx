import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { createPortal } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
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

function Index() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
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
          <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-[rgba(50,50,50,0.5)] flex justify-center items-center z-[8888]">
            <Card className="w-96 h-auto">
              <CardHeader>
                <CardTitle>Create New Integration</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 bottom-0">
                <Button
                  onClick={handleButtonClick}
                  className="bg-green-600 font-normal gap-1"
                >
                  {/* <Plus size={20} strokeWidth={2} /> */}
                  Create
                </Button>
                <Button
                  onClick={handleButtonClick}
                  className="bg-red-600 font-normal gap-1"
                >
                  Close
                </Button>
              </CardFooter>
            </Card>
          </div>,
          document.body
        )}
    </>
  );
}

export default Index;
