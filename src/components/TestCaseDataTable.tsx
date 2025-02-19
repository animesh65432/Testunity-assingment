import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    FilterFn,
    getFilteredRowModel
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Dispatch, SetStateAction } from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    setGlobalFilter: Dispatch<SetStateAction<string>>;
    globalFilter: string;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value) => {
    const itemValue = String(row.getValue(columnId)).toLowerCase();
    const searchValue = String(value).toLowerCase();
    return itemValue.includes(searchValue);
};

export const TestCaseDataTable = <TData, TValue>({
    columns,
    data,
    setGlobalFilter,
    globalFilter
}: DataTableProps<TData, TValue>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 5
            }
        },
        state: {
            globalFilter
        },
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getFilteredRowModel: getFilteredRowModel()
    });


    const pageCount = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex;


    const getPageNumbers = () => {
        const pages = [];
        const maxButtons = 10;

        if (pageCount <= maxButtons) {
            for (let i = 0; i < pageCount; i++) {
                pages.push(i);
            }
        } else {
            pages.push(0);
            let start = Math.max(1, currentPage - 3);
            let end = Math.min(pageCount - 2, currentPage + 3);


            if (currentPage < 4) {
                end = 7;
            }
            if (currentPage > pageCount - 5) {
                start = pageCount - 8;
            }


            if (start > 1) {
                pages.push(-1);
            }


            for (let i = start; i <= end; i++) {
                pages.push(i);
            }


            if (end < pageCount - 2) {
                pages.push(-2);
            }

            pages.push(pageCount - 1);
        }

        return pages;
    };

    return (
        <div className="rounded-md">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex items-center justify-center space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <div className="flex gap-1">
                    {getPageNumbers().map((pageIndex, i) => {
                        if (pageIndex < 0) {
                            return <span key={`ellipsis-${i}`} className="px-2">...</span>;
                        }
                        return (
                            <Button
                                key={pageIndex}
                                variant={pageIndex === currentPage ? "default" : "outline"}
                                size="sm"
                                onClick={() => table.setPageIndex(pageIndex)}
                            >
                                {pageIndex + 1}
                            </Button>
                        );
                    })}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default TestCaseDataTable;