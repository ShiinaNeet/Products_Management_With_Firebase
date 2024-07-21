import React, { useRef } from "react";
import { Modal, Button } from "@mantine/core";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

function View({ opened, close, data }) {
  if (!data) return null;
  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Supplier" centered>
        <form
          className="flex flex-col gap-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={data.name}
            className="p-2"
            disabled
            type="text"
            placeholder="Supplier Name"
            name="name"
            autoComplete="true"
          />
          <input
            value={data.email}
            className="p-2"
            disabled
            type="text"
            placeholder="Supplier Email"
            name="email"
            autoComplete="true"
          />
          <div className="flex justify-center gap-x-2">
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

export default View;
