// components/DrawerEl.jsx
import React from "react";
import { Drawer } from "antd";

const DrawerEl = ({ isDrawerVisible, closeDrawer }) => {
  return (
    <Drawer
      title="Menu"
      placement="right"
      closable={true}
      onClose={closeDrawer}
      visible={isDrawerVisible}
      width={250}
    >
      <ul className="text-white text-sm uppercase tracking-wide">
        <li className="text-black cursor-pointer">Industries</li>
        <li className="text-black cursor-pointer">Capabilities</li>
        <li className="text-black cursor-pointer">Projects</li>
        <li className="text-black cursor-pointer">Insights</li>
        <li className="text-black cursor-pointer">Careers</li>
        <li className="text-black cursor-pointer">About</li>
        <li className="text-black cursor-pointer">Contact Us</li>
      </ul>
    </Drawer>
  );
};

export default DrawerEl;
