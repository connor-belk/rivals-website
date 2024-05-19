"use client";

import { useState } from "react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const clearFormData = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");

    const contactForm = document.getElementById(
      "contact-form"
    ) as HTMLFormElement;
    contactForm.reset();
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, subject, message });
    // Put db call here
    clearFormData();
  };

  return (
    <>
      <h2 className="text-white text-3xl font-bold text-center mt-6">
        Contact Us
      </h2>
      <div className="w-full flex flex-col justify-center items-center mt-4 mb-8">
        <div className="border border-slate-300/40 w-[90%]"></div>
      </div>
      <form
        id="contact-form"
        action="#"
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center justify-center gap-3 mt-8 mb-5 max-w-[800px] mx-auto text-white"
      >
        <section className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 w-[100%]">
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="bg-black py-2 px-4 border border-gray-500 rounded-2xl w-[80%] md:w-[40%]"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="bg-black py-2 px-4 border border-gray-500 rounded-2xl w-[80%] md:w-[40%]"
          />
        </section>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="bg-black py-2 px-4 border border-gray-500 rounded-2xl w-[80%]"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="bg-black py-2 px-4 border border-gray-500 rounded-2xl w-[80%]"
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="bg-black py-2 px-4 border border-gray-500 rounded-2xl w-[80%] min-h[40px] overflow-auto resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white text-2xl py-2 px-4 rounded-full w-40"
        >
          Send
        </button>
      </form>
    </>
  );
}
