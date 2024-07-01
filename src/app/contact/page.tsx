"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";


const Page = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/")}
        className="rounded-full p-2 bg-white m-4"
      >
        Back
      </button>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="bg-white p-8 m-8 rounded shadow-lg ">
          <p className="text-4xl font-medium mb-2 text-purple-400 ">
            Contact Us
          </p>
          <p className="text-xl mb-6">
            We'd love to hear from you!
            <br />
            Let's get in touch
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <label className="mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  name="First Name"
                  id="firstName"
                  className="border p-2 rounded w-48 shadow appearance-none  text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  name="Last Name"
                  id="lastName"
                  className="border p-2 rounded w-48 shadow appearance-none  text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <label className="mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  name="Email"
                  id="email"
                  className="border p-2 rounded w-48 shadow appearance-none  text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1" htmlFor="contact">
                  Contact
                </label>
                <input
                  name="Contact"
                  id="contact"
                  className="border p-2 rounded w-48 shadow appearance-none  text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1" htmlFor="reason">
                Reason
              </label>
              <textarea
                className="rounded shadow-lg border-2 p-2 w-96  appearance-none  text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="reason"
              />
            </div>
          </div>
          <button className="rounded-full p-2 bg-purple-400 mt-4">
            Send Message
          </button>
          <div className="relative left-48">
        <Image
            src="/cat.jpg"
            width={150}
            height={50}
            className="mt-3 transform  transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 "
            alt="picture of communication"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
