import { DataTable } from "./DataTable";
import { columns } from "./Column";
import data from "./UserData"

export default function UsersPage() {
    return <DataTable columns={columns} data={data} />;
}
