import SessionCheck from "../../component/sessioncheck";
import axios from "axios";
import { useRouter } from "next/router";
import SideBar from "../../../pages/component/sidebar";
import Footer from "../../../pages/component/footer";
import { useState } from "react";

export default function GetMail({ data }) {
  const router = useRouter();

  //----mailer-----
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/admin/mail/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, text }),
    });

    const data = await response.json();

    console.log(data.message);
  };
  // mailer end --------

  return (
    <>
      <SessionCheck />
      <SideBar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        {/* heading */}
        <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Admin
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            List
          </mark>
        </h1>
        {/* heading end */}

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="px-6 py-4">{item.id}</td>
                  <td class="px-6 py-4">{item.name}</td>
                  <td class="px-6 py-4"> {item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --------mailer---------- */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        {/* heading */}
        <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Send
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            Mail
          </mark>
        </h1>
        {/* heading end */}

        <form onSubmit={handleSubmit}>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            To:
            <input
              type="email"
              value={to}
              onChange={(event) => setTo(event.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Subject:
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Body:
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          {/* ...............update button..................... */}
          <br />
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Send Mail
            </span>
          </button>
          {/* ...............update button end..................... */}
        </form>

        {/* ...............back button ..................... */}
        <br />
        <button
          type="button"
          onClick={() => router.back()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left w-5 h-5"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span class="sr-only">Icon description</span>
        </button>
        {/* ...............back button end..................... */}
      </div>
      {/* --------mailer end -------- */}

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/admin/findalladmin/");
  const data = await response.data;

  return { props: { data } };
}
