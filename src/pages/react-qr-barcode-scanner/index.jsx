import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Page } from "zmp-ui";

function BarcodeScanner() {
  const [data, setData] = React.useState("Not Found");

  return (
    <div>
      <h1>BARCODE</h1>
      <BarcodeScannerComponent
        width={100}
        height={100}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
      <BarcodeScannerComponent />
    </div>
  );
}

export default BarcodeScanner;
