import React from "react";
import { Button } from "@/components";

export default function TermsAndConditions() {
  return (
    <div className="text-white">
      <div className=" mx-auto px-4 py-16">
        <div className="mb-10 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Privacy Policy and Terms of Service
          </h1>
          <p className="text-lg lg:text-xl lg:max-w-3xl">
            Please read our privacy policy and terms of service carefully before
            using our services.
          </p>
        </div>

        <div className="mb-10 lg:mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between bg-gray-800 p-6 rounded-lg">
          <p className="text-lg font-medium mb-4 lg:mb-0">Privacy Policy.pdf</p>
          <Button color="cyan">Download</Button>
        </div>

        <div className="mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl mb-6">Terms of Service</h2>
          <p className="text-lg lg:text-xl">
            By using our services, you agree to our terms of service. Please
            read them carefully before using our services.
          </p>
        </div>

        <div className="bg-gray-800 p-6 lg:p-12 rounded-lg">
          <h2 className="text-2xl lg:text-3xl  mb-6">Document Contents</h2>
          <ul className="space-y-4 lg:space-y-6 list-none">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">●</span>
              <p>General provisions and definitions.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">●</span>
              <p>Rules for collecting and protecting personal data.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">●</span>
              <p>Cookie usage rules.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">●</span>
              <p>User rights and obligations.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
