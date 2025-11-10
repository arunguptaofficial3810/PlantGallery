'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo.webp";
import style from "./style.module.scss";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { navLinks } from "@/app/utils";
import Modal from "@/Components/Modal/page";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = (name: string | undefined) => {
    setIsopen(!isOpen);
    console.log(name);
    
    if(name === 'LOGIN_MODAL_OPEN') handleLoginClick()
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
    // setIsopen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.wrapper}>
      <Link href={"/"}>
        <div className={style.logoSection} onClick={() => setIsopen(false)}>
          <Image src={logo} alt="logo" width={25} height={25} />
          <span className={style.logoName}>Plant Gallery</span>
        </div>
      </Link>
      <ul className={`${style.links} ${isOpen && style.visible}`}>
        {navLinks?.map((e, index) => (
          <li key={index} onClick={()=>toggle(e?.action)}>
            {e?.icon && e.icon}
            <Link href={e.link}>{e?.name}</Link>
          </li>
        ))}
      </ul>
      </div>
      {isOpen ? <CloseOutlined className={style.menu} onClick={()=>toggle('LOGIN_MODAL_OPEN')} /> : <MenuOutlined className={style.menu} onClick={()=>toggle('LOGIN_MODAL_OPEN')} />}
      {isModalOpen && <Modal onClose={handleModalClose} />}
    </nav>
  );
};

export default Header;
