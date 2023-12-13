import { NextPage } from "next";
import { useHomePage } from "../hooks/useHomePage";
import {
  Button,
  Input,
  Layout,
  Loading,
  SearchInput,
  Select,
} from "@/components";
import ReactSelect from "react-select";
import { flexRender } from "@tanstack/react-table";
import { Pagination } from "../components/Pagination";
import { PlusIcon } from "@/components/icons/PlusIcon";

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
            <div className="w-full my-4 flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <div className="mr-3 text-xs font-medium">Show</div>
                <Select
                  options={pageSizeOptions}
                  defaultValue={pageSizeOptions[0]}
                  onChange={(option) => {
                    table.setPageSize(option?.value!);
                  }}
                />
                <div className="ml-3 text-xs font-medium">entries</div>
                <div className="ml-6">
                  <SearchInput
                    placeholder="Search..."
                    onSearch={handleSearch}
                    className=""
                  />
                </div>
              </div>
              <div>
                <Button variant="primary" leftIcon={<PlusIcon />}>
                  Add Customer
                </Button>
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
