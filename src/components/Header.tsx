"use client";
import disconnectUser from "@/actions/disconnectUser";

const Header = () => {
  return (
    <div>
      <h2>Ma Todo List</h2>
      <button
        onClick={() => {
          disconnectUser();
        }}
      >
        Disconnect
      </button>
    </div>
  );
};

export default Header;
