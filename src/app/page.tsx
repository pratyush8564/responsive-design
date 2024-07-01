"use client"
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  return (
    <div className="bg-gray-800 m-8 p-8 marginTop rounded">
    
      <nav className="flex items-center justify-between p-6 rounded">
        <div className="text-white text-5xl font-bold">NextTail</div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/feature" className="text-white hover:text-gray-300">Feature</Link>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/service" className="text-white hover:text-gray-300">Service</Link>
          <Link href="/products" className="text-white hover:text-gray-300">Product</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link href="/design" className="text-white hover:text-gray-300">Design</Link>
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center h-full m-8 rounded">
        <LoginForm />
      </div>
    </div>
  );
}
