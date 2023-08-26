import { useEffect } from "react";
import { createDevice } from "@rnbo/js";
import React from 'react';
import ReactDOM from 'react-dom/client';
const App = () => {
  // const patchExportURL = "patcher-export.json";
  // useEffect(() => {

  //   const WAContext = window.AudioContext
  //   const context = new WAContext();
  //   // Create gain node and connect it to audio output
  //   const outputNode = context.createGain();
  //   outputNode.connect(context.destination);

  //   // Fetch the exported patcher
  //   let response, patcher: any;
  //   const fetchData = async () => {
  //     try {
  //       response = await fetch(patchExportURL);
  //       patcher = await response.json();
  //     } catch (err) {
  //       console.log(err)
  //     }

  //     let dependencies = [];
  //     try {
  //       const dependenciesResponse = await fetch("export/dependencies.json");
  //       dependencies = await dependenciesResponse.json();

  //       // Prepend "export" to any file dependenciies
  //       dependencies = dependencies.map((d: { id: string, file: string; }) => d.file ? Object.assign({}, d, { file: "export/" + d.file }) : d);
  //     } catch (e) { }

  //     // Create the device
  //     const device = await createDevice({ context, patcher });
      
  //     // (Optional) Load the samples
  //     if (dependencies.length)
  //       await device.loadDataBufferDependencies(dependencies);

  //     // Connect the device to the web audio graph
  //     device.node.connect(outputNode);
  //   }
  // }, []);
  return (
    <div>
      <h1>Hey there yo</h1>
    </div>
  );
}

export default App;
