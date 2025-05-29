import React from "react";

function TableBody({ device }) {
  return (
    <>
      <section className="my-3">
        <h2 className="text-center py-2 border font-bold bg-gray-100 dark:text-gray-800">
        {device?.title}
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
            <td className="border border-gray-300 p-2">
              {device?.specs?.display}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Back Camera</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.camera}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Front Camera</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.camera}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Chipset</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.chipset}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Battery</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.battery}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Memory</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.storage}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">RAM</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.storage}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Software</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.software}
            </td>
          </tr>
          <tr className="border border-gray-300 sm:table-row">
            <td className="border border-gray-300 p-2">Network</td>
            <td className="border border-gray-300 p-2">
              {device?.specs?.software}
            </td>
          </tr>
        </tbody>
      </table>
      </section>
    </>
  );
}

export default TableBody;
