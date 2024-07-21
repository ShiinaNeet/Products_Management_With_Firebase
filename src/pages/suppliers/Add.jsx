import React, { useRef, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useToast } from "@/components/ui/use-toast";

function AddSupplier({ opened, close }) {
  const { toast } = useToast();

  const handleAddSupplier = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Suppliers"), {
        name: values.username,
        email: values.email,
        created_at: new Date(),
      })
        .then(() => {
          toast({
            title: "Created Successfully!",
            description: `The Supplier ${values.username} was successfully created.`,
            duration: 2000,
            variant: "success",
          });
        })
        .catch((err) => {
          toast({
            title: "Product Creation Failed!",
            description: `An error occurred while creating the product. Please try again later.`,
            duration: 2000,
            variant: "error",
          });
          console.error(err);
        })
        .finally(() => {
          close();
        });
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const inputFields = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Supplier Name",
      errormessage: "Name should be more than two (2) characters",
      label: "Username",
      autoComplete: "on",
      pattern: "^[A-Za-z\\s]{3,}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Supplier Email",
      errormessage: "Please enter a valid email address",
      label: "Email address",
      autoComplete: "on",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      required: true,
    },
  ];

  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  const [touched, setTouched] = useState({
    username: false,
    email: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: false,
    });
    isInvalid(e.target)
  };

  const isInvalid = (input) => {
    return touched[input.name] ? true : false;
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Supplier" centered>
        <form onSubmit={handleAddSupplier} className="flex flex-col">
          {inputFields.map((input) => (
            <div key={input.id} className="flex flex-col">
              <label htmlFor={input.name}>{input.label}</label>
              <input
                {...input}
                className={`p-2 border rounded-md ${isInvalid(input) ? "border-red-500" : "border-gray-300"}`}
                value={values[input.name]}
                onBlur={handleBlur}
                onFocus={handleBlur}
                onChange={onChange}
              />
              <span
                className={`text-red-500 mt-1 ${isInvalid(input) ? "block" : "hidden"}`}
              >
                {input.errormessage}
              </span>
            </div>
          ))}
          <div className="flex justify-center gap-x-2">
            <button
              type="submit"
              className="px-5 bg-blue-600 rounded-md border- hover:bg-blue-500 text-white"
            >
              Create
            </button>
            <button
              type="button"
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
export default AddSupplier;
