import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import users from "./UserData";
import { useState } from "react";

const TableComp = () => {
  const columns = Object.keys(users[0]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead className="w-[100px]" key={col}>
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              {columns.map((col) => (
                <TableCell className="font-medium">{user[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      ;
    </div>
  );
};

export default TableComp;
