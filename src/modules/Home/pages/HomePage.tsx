import { NextPage } from "next";
import { useHomePage } from "../hooks/useHomePage";
import { Button, Input, Layout, Loading, SearchInput } from "@/components";
import ReactSelect from "react-select";
import { flexRender } from "@tanstack/react-table";
import { Pagination } from "../components/Pagination";

export const HomePage: NextPage = () => {
  const { isLoading, users, isError, pageSizeOptions, table, handleSearch } =
    useHomePage();

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        !isError && (
          <div>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row">
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
                <SearchInput onSearch={handleSearch} className="" />
              </div>
              <div>
                <Button>Add Customer</Button>
              </div>
            </div>
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
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
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination table={table} />
          </div>
        )
      )}
    </Layout>
  );
};
