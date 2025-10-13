'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo.webp";
import style from "./style.module.scss";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [ isOpen, setIsopen ] = useState(false)

  const toggle = () => {
    setIsopen(!isOpen)
  }

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className={style.navbar}>
      <div className={style.wrapper}>
      <Link href={"/"}>
        <div className={style.logoSection}>
          <Image src={logo} alt="logo" width={25} height={25} />
          <span className={style.logoName}>Plant Gallery</span>
        </div>
      </Link>
      <ul className={`${style.links} ${isOpen && style.visible}`}>
        {navLinks?.map((e, index) => (
          <li key={index} onClick={toggle}>
            <Link href={e.link}>{e?.name}</Link>
          </li>
        ))}
      </ul>
      </div>
      {isOpen ? <CloseOutlined className={style.menu} onClick={toggle} /> : <MenuOutlined className={style.menu} onClick={toggle} />}
    </nav>
  );
};

export default Header;
