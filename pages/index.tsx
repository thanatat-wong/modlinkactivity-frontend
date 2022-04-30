import React, { useContext } from "react";
import Image from "next/image";

import logo from "../public/kmutt_modlink.png";
import menu from "../public/menu.svg";


const Home = () => {
  return (
    <div className="bg-base_orange">
      <div className="columns-3">
        <Image src={menu} height={30} width={30} objectFit="contain" />
        <Image src={logo} height={50} width={60} objectFit="contain" />
        <div className="row-2">
          <p className="text-[15px] text-white"><b>ระบบแนะนำกิจกรรมนักศึกษา</b></p>
          <p className="text-white">Activity Recommendation System</p>
        </div>
      </div>
    </div>
  )
}

export default Home;