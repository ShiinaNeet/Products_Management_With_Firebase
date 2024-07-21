import { NavLink } from "@mantine/core";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import { useUserStore } from "../lib/UserStore";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";

const Navbar = ({setPage}) => {
  const { currentUser } = useUserStore();
  return (
    <div className="h-full w-full max-[1200px]:hidden flex flex-col items-start justify-between bg-gray-900 text-white">
      <div className="mb-auto bg-slate-900 w-full p-5">
        <h1>{currentUser.email}</h1>
      </div>
      <div className="flex flex-col items-center w-full">
        <NavLink
          label="Users"
          leftSection={<IconGauge size="1rem" stroke={1.5} />}
          childrenOffset={28}
          className="hover:text-black"
          onClick={() => setPage("Users")}
        />

        <NavLink
          label="Products"
          leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
          childrenOffset={28}
          defaultOpened
          className="hover:text-black"
          onClick={() => setPage("Products")}
        />
        <NavLink
          label="Suppliers"
          leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
          childrenOffset={28}
          defaultOpened
          className="hover:text-black"
          onClick={() => setPage("Suppliers")}
        />
      </div>

      <button className="mt-auto" onClick={() => signOut(auth)}>
        Logout
      </button>
    </div>
  );
};
export default Navbar;
