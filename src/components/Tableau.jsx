/* eslint-disable react/prop-types */
import { useState, useMemo, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";

const Tableau = ({ employees, handleDelete }) => {
  const [filter, setFilter] = useState("");
  const [pageSize, setPageSize] = useState(10); // Nombre d'éléments par page
  const [pageIndex, setPageIndex] = useState(0); // Index de la page actuelle

  useEffect(() => {
    console.log("Received employees:", employees);
  }, [employees]);

  const columns = useMemo(
    () => [
      { header: "First Name", accessorKey: "firstName" },
      { header: "Last Name", accessorKey: "lastName" },
      { header: "Start Date", accessorKey: "startDate" },
      { header: "Department", accessorKey: "department" },
      { header: "Date of Birth", accessorKey: "dateOfBirth" },
      { header: "Street", accessorKey: "street" },
      { header: "City", accessorKey: "city" },
      { header: "State", accessorKey: "state" },
      { header: "Zip Code", accessorKey: "zipCode" },
      {
        header: "Actions",
        cell: ({ row }) => (
          <button
            className="delete-btn"
            onClick={() => handleDelete(row.original.id)}
          >
            Delete
          </button>
        ),
      },
    ],
    [handleDelete]
  );

  const table = useReactTable({
    data: useMemo(() => employees, [employees]),
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter,
      pagination: { pageSize, pageIndex },
    },
    onGlobalFilterChange: setFilter,
    onPaginationChange: (updater) => {
      setPageIndex(updater.pageIndex ?? pageIndex);
      setPageSize(updater.pageSize ?? pageSize);
    },
  });

  console.log("Employees in Redux:", employees);
  console.log(table.getRowModel());
  console.log(table.getHeaderGroups());

  return (
    <div className="table-container">
      <div className="table-container-header">
        {/* Sélection du nombre d'éléments par page */}
        <div className="page-size-select-container">
          <p>Show</p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="page-size-select"
          >
            {[10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p>entries</p>
        </div>

        {/* Barre de recherche */}
        <div className="search-bar-container">
          <p>Search: </p>
          <input
            type="text"
            placeholder=""
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="search-bar"
          />
        </div>
      </div>

      {/* Table */}
      <table className="employee-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell ??
                      cell.column.columnDef.accessorKey,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination-container">
        <div className="pagination-info">
          <p>
            Show {pageSize * table.getState().pagination.pageIndex + 1} to{" "}
            {Math.min(
              pageSize * (table.getState().pagination.pageIndex + 1),
              table.getFilteredRowModel().rows.length
            )}{" "}
            of {table.getFilteredRowModel().rows.length} entries
          </p>
        </div>
        <div className="pagination-controls">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <span>
            Page {table.getState().pagination.pageIndex + 1} /{" "}
            {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
