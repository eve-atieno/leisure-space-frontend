import React from "react";
import "tailwindcss/tailwind.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/Images/navbar.png";

const Invoice = () => {
  const generatePDF = () => {
    const input = document.getElementById("invoice");
    html2canvas(input, { dpi: 300 }).then((canvas) => {
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 595, 842);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <div
        id="invoice"
        className="bg-white w-96 h-max shadow-md rounded my-6 p-8"
      >
        <div className="flex justify-between mb-4">
          <img src={logo} alt="logo" className="h-16" />
          <div className="flex flex-col">
            <p className="font-bold">Company Name</p>
            <p className="text-sm">Address Line 1</p>
            <p className="text-sm">Address Line 2</p>
            <p className="text-sm">City, State Zip</p>
          </div>
        </div>
        <div className="flex justify-between border-b-2 pb-2 mb-8">
          <p className="font-bold">Item Description</p>
          <p className="font-bold">Amount</p>
        </div>
        <div className="flex justify-between mb-8">
          <p>Brochure Design</p>
          <p>$200.00</p>
        </div>
        <div className="flex justify-between mb-8">
          <p>Payment Method:</p>
          <p className="font-bold">Credit Card</p>
        </div>
        <div className="flex justify-between border-t-2 pt-2 font-bold">
          <p>Total</p>
          <p>$220.00</p>
        </div>
      </div>
      <button
        className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default Invoice;
