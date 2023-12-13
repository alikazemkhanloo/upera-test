import { NextPage } from "next";
import { useHomePage } from "../hooks/useHomePage";
import { Button, Loading, SearchInput, Select } from "@/components";
import { flexRender } from "@tanstack/react-table";
import { Pagination } from "../components/Pagination";
import { twMerge } from "tailwind-merge";
import { PlusIcon, SortIcon, DeleteIcon, EditIcon } from "@/components/icons";

export const HomePage: NextPage = () => {
  const { isLoading, users, isError, pageSizeOptions, table, handleSearch } =
    useHomePage();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        !isError && (
          <div>
            <div className="m-4 flex flex-row justify-between items-center">
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
            <table className="w-full table-auto">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        className={twMerge(
                          "text-sm font-bold text-left py-4 pr-2",
                          header.id === "id" && "text-center"
                        )}
                        key={header.id}
                      >
                        <div
                          onClick={header.column.getToggleSortingHandler()}
                          className={twMerge(
                            header.column.getCanSort() &&
                              "flex items-center justify-between cursor-pointer select-none"
                          )}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.getCanSort() ? (
                            <SortIcon sortType={header.column.getIsSorted()} />
                          ) : undefined}
                        </div>
                      </th>
                    ))}
                    <th
                      className={twMerge(
                        "text-sm font-bold text-left py-4 pr-2"
                      )}
                    >
                      Action
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row, index) => (
                  <tr
                    className={twMerge(
                      index % 2 === 0
                        ? "bg-light-background dark:bg-dark-background"
                        : "bg-light-table-odd dark:bg-dark-table-odd"
                    )}
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        className={twMerge(
                          "font-medium text-sm text-left py-[23.4px] pr-2",
                          cell.id.endsWith("_id") && "text-center"
                        )}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    <td
                      className={twMerge(
                        "font-medium text-sm text-left py-[23.4px]"
                      )}
                    >
                      <div className="flex">
                        <EditIcon className="cursor-pointer" />
                        <DeleteIcon className="ml-4 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="h-16 flex justify-center items-center ">
              <Pagination table={table} />
            </div>
          </div>
        )
      )}
    </div>
  );
};
