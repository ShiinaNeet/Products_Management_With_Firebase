import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import moment from "moment";

export default function Index({
  setViewSupplier,
  setEditSupplier,
  setDeleteSupplier,
  openView,
  openEdit,
  openDelete,
}) {
  const handleView = (supplier) => {
    setViewSupplier(supplier);
    openView();
  };
  const EditSupplier = (supplier) => {
    setEditSupplier(supplier);
    openEdit();
  };
  const DeleteSupplier = (supplier) => {
    setDeleteSupplier(supplier);
    openDelete();
  };

  const [suppliersData, setSuppliersData] = useState([]);
  const Fetchdata = async () => {
    const q = query(collection(db, "Suppliers"));
    const unsub = onSnapshot(q, (snapshot) => {
      const datalist = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        created_at: doc.data().created_at.toDate(),
      }));
      setSuppliersData(datalist);
    });
  };
  useEffect(() => {
    Fetchdata();
  }, []);

  const rows = suppliersData.map((supplier) => (
    <Table.Tr key={supplier.id}>
      <Table.Td className="max-w-[600px] truncate">{supplier.name}</Table.Td>
      <Table.Td className="max-w-[600px] truncate">{supplier.email}</Table.Td>
      <Table.Td>{moment(supplier.created_at).format("MMMM Do, YYYY")}</Table.Td>
      <Table.Td>
        <div className="flex gap-x-3 w-full items-center justify-center">
          <button
            className="bg-blue-500 text-white px-3 hover:bg-blue-600"
            onClick={() => handleView(supplier)}
          >
            View
          </button>
          <button
            className="bg-yellow-500 text-white px-3 hover:bg-yellow-600"
            onClick={() => EditSupplier(supplier)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 hover:bg-red-600"
            onClick={() => DeleteSupplier(supplier)}
          >
            Delete
          </button>
        </div>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="px-5 max-sm:px-1 w-full">
      <Table.ScrollContainer minWidth={800} type="native">
        <Table stickyHeader highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="flex-3">Name</Table.Th>
              <Table.Th className="flex-3">Email</Table.Th>
              <Table.Th className="flex-2">Created At</Table.Th>
              <Table.Th className="flex-1">
                {" "}
                <div className="text-center">Action</div>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}
