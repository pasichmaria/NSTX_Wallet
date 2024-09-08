"use client";

import { useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { Button } from "@/components/buttons";

const user = {
  firstName: "Kiborg",
  lastName: "Ybivtsya",
  email: "kiborg@gmail.com",
  phone: "+380997484505",
  balances: [
    {
      id: 1,
      value: 10230,
      currency: "USDT"
    },
    {
      id: 2,
      value: 20088,
      currency: "TRX"
    }
  ],
  employmentType: "Службовець/Працівник по найму",
  experience: "8 років",
  monthlyIncome: "12,000.00 ₴",
  idCard: "85482051",
  idRecord: "85482051519-31281",
  validUntil: "28.10.2028",
  issueDate: "28.10.1996",
  issuingAuthority: "4174",
  taxNumber: "417593921",
  registration: "Київ соборний 245",
  birthDate: "03.06.1981",
  isVerified: true
};

export default function Settings() {
  const [open, setOpen] = useState(false);

  return (
      <div className="container mx-auto p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="p-6 rounded-lg bg-gray-900 shadow-xl border border-solid border-blue-400 border-opacity-50">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl mb-6 border-b border-blue-400 pb-2">
                Account
              </h2>
              {user.isVerified && (
                  <MdVerifiedUser className="text-green-500" size={20} />
              )}
            </div>
            <div className="space-y-4">
              <img
                  src={`https://avatars.dicebear.com/api/avataaars/${user.email}.svg`}
                  alt="avatar"
                  className="rounded-full w-20 h-20 shadow-lg"
              />
              <div>
                <p className="text-sm text-gray-400">Username</p>
                <p className="text-lg">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg">{user.phone}</p>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg">{user.email}</p>
              </div>
              <Button color="blue" className="w-full">
                Edit
              </Button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-xl bg-gray-900 border border-solid border-blue-400 border-opacity-50 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl mb-6 border-b border-blue-400 pb-2">
                Personal Data
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Employment Type</p>
                  <p className="text-lg">{user.employmentType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Experience</p>
                  <p className="text-lg">{user.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Monthly Income</p>
                  <p className="text-lg">{user.monthlyIncome}</p>
                </div>
              </div>
            </div>
            <Button color="blue" className="w-full mt-6">
              Edit
            </Button>
          </div>

          <div className="p-6 rounded-lg bg-gray-900  shadow-xl border border-solid border-blue-400 border-opacity-50">
            <h2 className="text-2xl mb-6 border-b border-blue-400 pb-2">
              Documents
            </h2>
            <Button
                color="blue"
                className="w-full uppercase"
                onClick={() => setOpen(!open)}
            >
              Show documents
            </Button>
            {open && (
                <div className="space-y-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>
                    <p className="text-lg">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">ID Card</p>
                    <p className="text-lg">{user.idCard}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">ID Record</p>
                    <p className="text-lg">{user.idRecord}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Valid Until</p>
                    <p className="text-lg">{user.validUntil}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Issue Date</p>
                    <p className="text-lg">{user.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Issuing Authority</p>
                    <p className="text-lg">{user.issuingAuthority}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Tax Number</p>
                    <p className="text-lg">{user.taxNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Registration</p>
                    <p className="text-lg">{user.registration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Birth Date</p>
                    <p className="text-lg">{user.birthDate}</p>
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}
