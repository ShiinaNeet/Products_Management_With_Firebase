import React, { useRef } from "react";
import { Modal, Button } from "@mantine/core";
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useToast } from "@/components/ui/use-toast";

function DeleteSupplier({ opened, close, data }) {
  const { toast } = useToast();
  const formRef = useRef(null);
  const handleDeleteSupplier = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = data.name

    try {
      await deleteDoc(doc(db, "Suppliers", data.id));
      toast({
        title: "Deleted Successfully!",
        description: `The Supplier ${name} was successfully updated.`,
        variant: "destructive",
        duration: 2000,
      });
      close();
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size="auto"
        withCloseButton={false}
      >
        <h1 className="text-2xl py-5">
          Do you want to Delete{" "}
          <span className="text-red-500">{data.name}</span> ?
        </h1>
        <form ref={formRef} className="flex flex-col gap-y-3">
          <input
            disabled
            value={data.name}
            className="p-2"
            type="text"
            placeholder="Supplier Name"
            name="name"
          />
          <input
            disabled
            value={data.email}
            className="p-2"
            type="text"
            placeholder="Supplier Email"
            name="email"
          />
          <div className="flex justify-center gap-x-2">
            <button
              className="px-5 bg-red-600  rounded-md border- hover:bg-red-500 text-white"
              onClick={handleDeleteSupplier}
            >
              Delete
            </button>
            <button
              className="p-2 px-5 rounded-md hover:bg-blue-500 hover:text-"
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default DeleteSupplier;
