import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <main className="flex items-center justify-center flex-col h-screen space-y-4">
        <h1 className="text-6xl font-bold">Workroom Automations</h1>
        <p className="w-2/4 text-center">
          Workroom Automations: Precision and Efficiency in Shop Floor Quality
          Inspections.
        </p>
        <Button>
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </main>
    </div>
  );
}

export default Landing;
