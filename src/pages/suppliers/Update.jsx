import React, { useRef, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

import { useToast } from "@/components/ui/use-toast";

function UpdateSupplier({ opened, close, data }) {
  const formRef = useRef(null);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  const { toast } = useToast();

  const handleUpdateSupplier = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    try {
      const setUpdateRef = doc(db, "Suppliers", data.id);
      await updateDoc(setUpdateRef, {
        name: name,
        email: email,
        created_at: new Date(),
      });
      toast({
        title: "Update Successfully!",
        description: `The Supplier ${name} was successfully updated.`,
        duration: 2000,
        variant: "info",
      });

      close();
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Supplier" centered>
        <form ref={formRef} className="flex flex-col gap-y-3">
          <input
            className="p-2"
            value={name}
            type="text"
            placeholder="Supplier Name"
            name="name"
            autoComplete="true"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-2"
            value={email}
            type="text"
            placeholder="Supplier Email"
            name="email"
            autoComplete="true"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center gap-x-2">
            <button
              className="px-5 bg-blue-600  rounded-md border- hover:bg-blue-500 text-white"
              onClick={handleUpdateSupplier}
            >
              Update
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

export default UpdateSupplier;
