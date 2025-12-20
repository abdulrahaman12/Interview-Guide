import React from "react";
import UsersPage from "../components/table/UserPage";

const TableData = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="font-bold text-center text-lg m-3">Table Pagination</h2>
      <UsersPage />
    </div>
  );
};

export default TableData;
