"use client";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSearch,
  FaTwitter
} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Button, Input, Section } from "@/components";

export default function SupportPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center mx-auto mb-6">
        <HiOutlineMailOpen className="text-4xl text-cyan-500" />
      </div>

      <h1 className="text-4xl font-bold mb-4 text-center">Support Center</h1>
      <p className="text-center text-lg text-gray-300">
        How can we help you today?
      </p>

      <div className="mt-6 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full py-3 px-4 pl-10 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 text-white placeholder-gray-400"
            placeholder="Search for help..."
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <Section>
        <h2 className="text-2xl mb-6">Help Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Security",
            "Transactions",
            "Verification",
            "Payment",
            "Delivery",
            "Technical Support"
          ].map(category => (
            <div
              key={category}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-xl font-medium mb-2 text-cyan-500">
                {category}
              </h3>
              <p className="text-gray-400">
                Find help and support articles for {category.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Popular Articles">
        <h2 className="text-2xl  mb-6 text-center">Contact Us</h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" className="mt-4" />
            <Input type="text" placeholder="Subject" className="mt-4" />
            <textarea
              className="w-full py-3 px-2 mt-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 text-white placeholder-gray-400"
              placeholder="Your message"
            />
            <Button color="transparent" className="mt-4">
              Send Message
            </Button>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <h3 className="font-medium mb-4 text-cyan-500">Email</h3>
            <p className="text-gray-400 mb-4">
              Send us an email at{" "}
              <a
                href="mailto:nstx@gmail.com"
                className="text-cyan-500 underline"
              >
                nstx@gmail.com
              </a>
            </p>
            <h3 className="font-medium mb-4 text-cyan-500">Phone</h3>
            <p className="text-gray-400">
              Call us at{" "}
              <a href="tel:+380997484505" className="text-cyan-500 underline">
                +(380) 99-748-45-05
              </a>
              <FaPhone className="inline-block ml-2 text-cyan-500" />
            </p>
            <h3 className="mt-3 font-medium mb-4 text-cyan-500">
              Working Hours
            </h3>
            <p className="text-gray-400">Mon-Fri: 9 AM - 6 PM (GMT+2)</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-medium mb-4 text-cyan-500">
            Follow us on Social Media
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-cyan-500"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-cyan-500"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-cyan-500"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl mb-6 text-white text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I reset my password?",
              answer:
                "You can reset your password by clicking on the 'Forgot password' link on the login page.tsx."
            },
            {
              question: "How can I contact support?",
              answer:
                "You can contact our support team via email or phone. See the contact section below."
            },
            {
              question: "How to verify my account?",
              answer:
                "Account verification can be done through the settings page.tsx. Follow the instructions provided there."
            },
            {
              question: "What are the supported payment methods?",
              answer:
                "We support various payment methods including credit/debit cards, PayPal, and cryptocurrencies."
            }
          ].map(({ question, answer }) => (
            <div
              key={question}
              className="p-4 bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium mb-2 text-cyan-500">
                {question}
              </h3>
              <p className="text-gray-400">{answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Subscribe to Our Newsletter">
        <h2 className="text-2xl mb-6 text-center">
          Subscribe to Our Newsletter
        </h2>
        <div className="flex justify-center w-full">
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-r-none"
          />
          <Button color="cyan" className="rounded-l-none">
            Subscribe
          </Button>
        </div>
      </Section>
    </div>
  );
}
