import { useGetUser } from "@/modules/api";
import { Options, OptionsOrGroups } from "react-select";

import {
  ColumnFiltersState,
  SortingFn,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  sortingFns,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  RankingInfo,
  rankItem,
  compareItems,
} from '@tanstack/match-sorter-utils'

const columnHelper = createColumnHelper<User>();


const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    )
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
    enableSorting: false
  }),
  columnHelper.accessor("first_name", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => "First Name",
    sortingFn: fuzzySort,
  }),
  columnHelper.accessor("last_name", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => "Last Name",
    sortingFn: fuzzySort,

  }),
  columnHelper.accessor("company", {
    header: () => "Company",
    cell: (info) => info.renderValue(),
    sortingFn: fuzzySort,

  }),
  columnHelper.accessor("code", {
    header: () => "Code",
    sortingFn: fuzzySort,

  }),
  columnHelper.accessor("status", {
    header: "Status",
    sortingFn: fuzzySort,

  }),
  columnHelper.accessor("access", {
    header: "access",
    enableSorting: false
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
