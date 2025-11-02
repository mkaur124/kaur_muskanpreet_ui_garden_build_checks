// import React from "react";
import "./App.css";

// Components
import Button from "./components/Button";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import HeroImage from "./components/HeroImage";
import Img from "./components/Img";
import Label from "./components/Label";
import Radiobutton from "./components/Radiobutton";
import Table from "./components/Table";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      {/* Buttons */}
      <h2>Buttons</h2>
      <Button label="Visible Button" />
      <Button label="Disabled Button" disabled />
      <hr />

      {/* Cards */}
      <h2>Cards</h2>
      <Card title="Card 1" description="This is card 1" />
      <br />
      <Card title="Card 2" description="This is card 2" disabled />
      <hr />

      {/* Dropdown */}
      <h2>Dropdown</h2>
      <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
      <br />
      <Dropdown options={["Option 1", "Option 2", "Option 3"]} disabled />
      <hr />

      {/* HeroImage */}
      <h2>Hero Image</h2>
      <HeroImage src="/logo512.png" alt="Visible Hero" />
      <br />
      <HeroImage src="/logo512.png" alt="Disabled Hero" disabled />
      <hr />

      {/* Img */}
      <h2>Img</h2>
      <Img src="/logo192.png" alt="Visible Img" />
      <br />
      <Img src="/logo192.png" alt="Disabled Img" disabled />
      <hr />

      {/* Label */}
      <h2>Label</h2>
      <Label text="Label" />
      <br />
      <Label text="Label" disabled />
      <hr />

      {/* Radiobutton */}
      <h2>Radiobutton</h2>
      <Radiobutton label="Option 1" name="group1" value="1" />
      <br />
      <Radiobutton label="Option 2" name="group1" value="2" disabled />
      <hr />

      {/* Table */}
      <h2>Table</h2>
      <Table
        headers={["Name", "Age", "City"]}
        data={[
          ["Alice", 25, "Toronto"],
          ["Bob", 30, "Vancouver"],
          ["Charlie", 22, "Montreal"],
        ]}
      />
      <br />
      <Table
        headers={["Name", "Age", "City"]}
        data={[
          ["Alice", 25, "Toronto"],
          ["Bob", 30, "Vancouver"],
          ["Charlie", 22, "Montreal"],
        ]}
        disabled
      />
      <hr />
    </div>
  );
}

export default App;
