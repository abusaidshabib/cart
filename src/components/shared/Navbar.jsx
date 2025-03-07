import React from "react";
import logo from "@/assets/main/Logo.svg";
import { FiSearch } from "react-icons/fi";

import myitems from "@/assets/navbar/myitems.svg";
import account from "@/assets/navbar/account.svg";
import addtocart from "@/assets/navbar/addtocart.svg";
import menu from "@/assets/navbar/menu.svg";
import becomeseller from "@/assets/navbar/becomeasellers.svg";
import dropshipper from "@/assets/navbar/becomeadropshipper.svg";
import bestseller from "@/assets/navbar/bestsellers.svg";


const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-5/6 mx-auto p-4">
        <div className="max-w-32">
          <img src={logo} srcSet="logo@2x.png 2x" alt="Logo" />
        </div>
        <div className="grid place-items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-transparent rounded-full p-1 pl-4 w-80 border-primary border-2 focus:outline-none"
            />
            <button className="absolute top-1 right-1 bg-primary rounded-full p-1">
              <FiSearch className="" size={20} />
            </button>
          </div>
        </div>

        <div className="col-span-1 place-items-end">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-end gap-2">
              <div>
                <img src={myitems} alt="" />
              </div>
              <div>
                <p className="text-sm">Recorder</p>
                <p className="text-lg font-bold">My Items</p>
              </div>
            </div>
            <div className="flex items-end gap-2 border-l-2 pl-3 border-secondary">
              <div>
                <img src={account} alt="" />
              </div>
              <div>
                <p className="text-sm">Sign In</p>
                <p className="text-lg font-bold">Account</p>
              </div>
            </div>
            <div className="flex items-end gap-2 border-l-2 pl-3 border-secondary">
              <div>
                <img src={addtocart} alt="" />
              </div>
              <div>
                <span className="text-sm bg-primary p-1 rounded-sm">0</span>
                <p className="">$ 0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/5 flex items-center justify-between">
        <div className="w-5/6 mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-start gap-3">
              <img src={menu} alt="" srcSet="" className="w-4" />
              <p className="text-black py-2">All categories</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <img src={bestseller} alt="" srcSet="" className="w-4" />
              <p className="text-black py-2">Best Sellers</p>
            </div>
          </div>
          <div className="flex items-center gap-5 pr-4">
            <div className="flex items-center justify-start gap-3">
              <img src={becomeseller} alt="" srcSet="" className="w-4" />
              <p className="text-black py-2">Become a sellers</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <img src={dropshipper} alt="" srcSet="" className="w-4" />
              <p className="text-black py-2">Become a dropshippers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
