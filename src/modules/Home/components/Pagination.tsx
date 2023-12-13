import { Table } from "@tanstack/react-table";
import { FC } from "react";

type Props = {
  table: Table<User>;
};
export const Pagination: FC<Props> = (props) => {
  const { table } = props;
  return (
    <div className="flex items-center gap-2">
      <button
        className="border rounded p-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"Previous"}
      </button>
      {table.getPageOptions().map((pageOption) => {
        const isCurrentPage = table.getState().pagination.pageIndex === pageOption
        return <button disabled={isCurrentPage} onClick={()=>table.setPageIndex(pageOption)} key={pageOption.toString()}>{pageOption + 1}</button>;
      })}
      <button
        className="border rounded p-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {"Next"}
      </button>
    </div>
  );
};
