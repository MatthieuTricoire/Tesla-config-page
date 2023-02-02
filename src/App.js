import "./App.css";
import Section from "./components/Section";
// HOOKS
import { useState } from "react";

// DATA
import data from "./assets/data/data.json";

function App() {
  const [selection, setSelection] = useState(undefined);
  const [selectionColor, setSelectionColor] = useState(0);
  const models = data.map((model) => ({
    text: model.model,
    price: model.price,
  }));

  const model = data[selection];

  const colors =
    model?.colors.map((color) => ({
      text: color.color,
      price: color.price,
    })) || [];

  const finalPrice =
    (model?.price || 0) + (model?.colors[selectionColor].price || 0);

  return (
    <>
      <h1>
        {selection} {selectionColor} {finalPrice}
      </h1>
      <Section
        title={"car"}
        data={models}
        selection={selection}
        onSelection={(index) => {
          setSelection(index);
          setSelectionColor(0);
        }}
      />
      <Section
        title={"color"}
        data={colors}
        selection={selectionColor}
        onSelection={setSelectionColor}
      />
      {/* <Section /> */}
      {/* <div className="price"></div> */}
    </>
  );
}

export default App;
