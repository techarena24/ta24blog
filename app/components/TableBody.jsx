import React from "react";

function TableBody() {
  return (
    <>
      <h2 className="text-center py-2 border bg-gray-100 dark:text-gray-800">
        Smartphone Full Specifications
      </h2>

      <table className="w-full border-collapse border border-gray-300 sm:table">
        <thead>
          <tr className="bg-gray-100 dark:text-gray-800">
            <th className="border border-gray-300 p-2">Specification</th>
            <th className="border border-gray-300 p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Display</td>
            <td className="border border-gray-300 p-2">6.7 inches, AMOLED</td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Camera</td>
            <td className="border border-gray-300 p-2">
              108MP Main, 12MP Ultra-wide
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Chipset</td>
            <td className="border border-gray-300 p-2">Snapdragon 8 Gen 2</td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Battery</td>
            <td className="border border-gray-300 p-2">5000 mAh</td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Memory</td>
            <td className="border border-gray-300 p-2">
              8GB RAM, 256GB Storage
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">OS</td>
            <td className="border border-gray-300 p-2">Android 13</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableBody;
