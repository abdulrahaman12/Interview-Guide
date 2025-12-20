import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "fullName",
        header: "Name",
        cell: ({ row }) => row.getValue("fullName"),
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "contact",
        header: "Contact",
        cell: ({ row }) => row.getValue("contact"),
    },
    {
        accessorKey: "createdDate",
        header: "Created Date",
    },
    
];
