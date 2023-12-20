"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/ResearchHeader2-1030x687.png";
const RegistertPage = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute h-full w-full">
        <Image
          className="h-full w-full"
          src={image}
          width={500}
          height={500}
          alt="registert image"
        ></Image>
      </div>
      <div className="  absolute h-full w-full flex justify-center items-center ">
        <div className="h-3/4 w-3/4 border-2 shadow-3xl border-blue-700  rounded-xl">
          <h1 className="text-3xl font-bold text-center mt-20  text-white">
            Registert Form
          </h1>
          <h1 className="text-xl font-bold text-center mb-10 mt-5 text-white">
            fill out the form Form bellow for student aplecation
          </h1>

          <form className="px-8 xl:px-20 text-white">
            <div className="flex gap-5 xl:gap-10 w-full justify-between py-5 ">
              <div className="w-full">
                <h3 className="mb-3">First Name :</h3>
                <input
                  type="text"
                  name="first_name"
                  className="outline-none w-full p-2 bg-transparent border text-white"
                  placeholder="please inter youe frist name..."
                ></input>
              </div>
              <div className="w-full">
                <h3 className="mb-3">Last Name :</h3>
                <input
                  type="text"
                  name="last_name"
                  className="outline-none w-full p-2 bg-transparent border text-white"
                  placeholder="please inter youe last name..."
                ></input>
              </div>
            </div>
            <div className="flex gap-5 py-5 xl:gap-10 w-full justify-between ">
              <div className="w-full">
                <h3 className="mb-3">Age :</h3>
                <input
                  type="date"
                  name="age"
                  className="outline-none w-full p-2 bg-transparent border text-white"
                ></input>
              </div>
              <div className="w-full">
                <h3 className="mb-3">Grade :</h3>
                <input
                  type="text"
                  name="group"
                  className="outline-none w-full p-2 bg-transparent border text-white"
                ></input>
              </div>
            </div>
            <div className="flex gap-5 py-5 xl:gap-10 w-full justify-between ">
              <div className="w-full">
                <h3 className="mb-3">Courses :</h3>
                <input
                  type="text"
                  name="group"
                  className="outline-none w-full p-2 bg-transparent border text-white"
                ></input>
              </div>
            </div>
            <div>
              <input
                className="px-4 py-2 border  rounded-md cursor-pointer"
                type="submit"
                value={"submite"}
              ></input>
            </div>
            <div>
              <a rel="" aria-flowto=""></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistertPage;
