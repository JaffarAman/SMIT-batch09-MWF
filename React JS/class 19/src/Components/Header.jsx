import React from "react";

const Header = () => {
  return (
    <div className="border-b-2 border-green-600 py-5 px-10 flex justify-between">
      <h1 className="text-3xl">NAVBAR</h1>

      <div>
        <img
          src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
          className="w-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
