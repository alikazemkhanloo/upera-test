import { useGetUser } from "@/modules/api";
import { Options, OptionsOrGroups } from "react-select";

import {
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("first_name", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => "First Name",
  }),
  columnHelper.accessor("last_name", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => "Last Name",
  }),
  columnHelper.accessor("company", {
    header: () => "Company",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("code", {
    header: () => "Code",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("access", {
    header: "access",
  }),
];

export const useHomePage = () => {
  const { data: users, isLoading, isError } = useGetUser();

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: users?.data || [],
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  const pageSizeOptions: { value: number; label: string }[] = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 40, label: "40" },
    { value: 50, label: "50" },
  ];

  const handleSearch = (text: string) => {
    setGlobalFilter(text);
  };

  return {
    users,
    table,
    pageSizeOptions,
    isLoading,
    isError,
    handleSearch,
  };
};
