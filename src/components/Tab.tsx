import { useContext } from "react";
import { TeamsFxContext } from "./Context";
import { Dashboard } from "./Dashboard/Dashboard";
import "./Styling/Variables.css";
import "./Styling/index.css";

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <Dashboard />
    </div>
  );
}
