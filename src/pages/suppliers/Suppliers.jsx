import React, { useState } from "react";
import Index from "./Index";
import View from "./View";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";

import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";

export default function Suppliers() {
  const [opened, { open, close }] = useDisclosure(false);

  const [SupplierData, setSupplierData] = useState([]);
  const [ViewSupplier, setViewSupplier] = useState([]);
  const [EditSupplier, setEditSupplier] = useState([]);
  const [DeleteSupplier, setDeleteSupplier] = useState([]);

  const [viewOpened, setViewOpened] = useState(false);
  const [viewEdit, setEditOpened] = useState(false);
  const [viewDelete, setDeleteOpened] = useState(false);

  const openView = () => setViewOpened(true);
  const closeView = () => setViewOpened(false);
  const openEdit = () => setEditOpened(true);
  const closeEdit = () => setEditOpened(false);
  const openDelete = () => setDeleteOpened(true);
  const closeDelete = () => setDeleteOpened(false);

  return (
    <div className="gap-y-5 w-full">
      <div className="grid justify-items-end p-5">
        <Button onClick={open}>Create Supplier</Button>
      </div>
      <div className="w-full">
        <Index
          setViewSupplier={setViewSupplier}
          setEditSupplier={setEditSupplier}
          setDeleteSupplier={setDeleteSupplier}
          openView={openView}
          openEdit={openEdit}
          openDelete={openDelete}
        />
      </div>
      {opened ? <Add opened={opened} close={close} /> : ""}
      {viewOpened && (
        <View opened={viewOpened} close={closeView} data={ViewSupplier} />
      )}
      {viewDelete && (<Delete opened={viewDelete} close={closeDelete} data={DeleteSupplier}/>)}
      {viewEdit && (
        <Update opened={viewEdit} close={closeEdit} data={EditSupplier} />
      )}
    </div>
  );
}
