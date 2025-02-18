import { ColumnDef } from "@tanstack/react-table"
import { dataTypes } from "@/lib/data"


export const colums: ColumnDef<dataTypes>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "Title",
        header: "Title"
    },
    {
        accessorKey: "priority",
        header: "Priority"
    },
    {
        accessorKey: "Result",
        header: "Result"
    },
    {
        accessorKey: "status",
        header: "Status"
    },
    {
        accessorKey: "Owner",
        header: "Owner"
    },
    {
        accessorKey: "Automation_status",
        header: "Automation Status"
    },
    {
        accessorKey: "Tags",
        header: "Tags"
    }
]