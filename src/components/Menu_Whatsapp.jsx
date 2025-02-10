import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuWhatsAppBtn = ({ item }) => {
  return (
    <motion.li
      className="menu_list_whatsapp"
      variants={variants}
    >
      <div className='flex items-center menu_item'>
        <a href="https://chat.whatsapp.com/CthdcrweQat21qTLxRDJ63" className='whatsapp-btn'>
          
        </a>
      </div> 
    </motion.li>
  );
};