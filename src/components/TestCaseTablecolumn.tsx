import { ColumnDef } from "@tanstack/react-table"
import { dataTypes } from "@/lib/data"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<dataTypes>[] = [
    {
        id: "select",
        accessorKey: "id",
        header: ({ table }) => (
            <div className="flex items-center gap-2">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
                <div>Id</div>
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
                <div className="truncate max-w-[50px] sm:max-w-[80px] md:max-w-[100px]">
                    {row.original.id}
                </div>
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "Title",
        header: "Title",
        cell: ({ row }) => {
            const title = row.original.Title

            return (
                <div
                    className="truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap"
                    title={title}
                >
                    <p>{title}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "priority",
        header: "Priority",
        cell: ({ row }) => {
            return (
                <div className="bg-violet-200 p-1 rounded-md text-center min-w-[70px] sm:min-w-[100px]">
                    <p className="text-violet-800">{row.original.priority}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "Result",
        header: "Result"
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
                <div className="bg-green-200 p-1 rounded-md text-center min-w-[70px] sm:min-w-[100px]">
                    <p className="text-green-700">{row.original.status}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "Owner",
        header: "Owner"
    },
    {
        accessorKey: "Automation_status",
        header: "Automation Status",
        cell: ({ row }) => {
            return (
                <Button variant="outline" className="min-w-[100px] sm:min-w-[150px]">
                    {row.original.Automation_status}
                </Button>
            )
        }
    },
    {
        accessorKey: "Tags",
        header: "Tags",
        cell: ({ row }) => {
            const displayTags = row.original.Tags.slice(0, 2);

            return (
                <div className="flex gap-2 flex-wrap max-w-[120px] sm:max-w-[180px]">
                    {displayTags.map((tag, index) => (
                        <div
                            key={index}
                            className={`px-2 py-1 rounded-md text-sm ${index % 2 === 0
                                ? "bg-violet-200 text-violet-700"
                                : "bg-blue-200 text-blue-700"
                                }`}
                        >
                            {tag}
                        </div>
                    ))}
                    {row.original.Tags.length > 2 && (
                        <div className="text-gray-500 font-bold">
                            +4
                        </div>
                    )}
                </div>
            )
        }
    },
    {
        id: "actions",
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                        <DropdownMenuItem>Update</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
];
