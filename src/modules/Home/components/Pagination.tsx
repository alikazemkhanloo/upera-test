import { Button } from "@/components";
import { Table } from "@tanstack/react-table";
import { FC } from "react";

type Props = {
  table: Table<User>;
};
export const Pagination: FC<Props> = (props) => {
  const { table } = props;
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="text"
        className="font-medium text-xs text-light-gray dark:text-dark-gray"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"Previous"}
      </Button>
      {table.getPageOptions().map((pageOption) => {
        const isCurrentPage =
          table.getState().pagination.pageIndex === pageOption;
        return (
          <Button
            className="text-xs font-medium"
            variant={isCurrentPage ? "primary" : "secondary"}
            disabled={isCurrentPage}
            onClick={() => table.setPageIndex(pageOption)}
            key={pageOption.toString()}
          >
            {pageOption + 1}
          </Button>
        );
      })}
      <Button
        variant="text"
        className="font-medium text-xs text-light-gray dark:text-dark-gray"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {"Next"}
      </Button>
    </div>
  );
};
