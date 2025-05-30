import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { MenuWhatsAppBtn } from "./Menu_Whatsapp";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const menuItems = [
  { text: "Home", id: "home" },
  { text: "About", id: "about" },
  { text: "Upcoming Events", id: "sponsors" },
  { text: "Previous Events", id: "sigs" },
  { text: "FAQs", id: "faqs" },  // Added FAQs item
  { text: "Contact", id: "contact" } // Added Contact item
];

export const Navigation = ({ toggleOpen }) => (
  <motion.ul className="menu_ulist" variants={variants}>
    {menuItems.map((item) => (
      <MenuItem item={item} key={item.text} toggleOpen={toggleOpen} className="text-xs" />
    ))}
    {/* Reduced font size */}
    <MenuWhatsAppBtn/>
  </motion.ul>
);