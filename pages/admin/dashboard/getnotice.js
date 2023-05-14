import Link from "next/link";
import { useState } from "react";
import SessionCheck from "../../component/sessioncheck";
import axios from "axios";
import SideBar from "../../../pages/component/sidebar";
import { useRouter } from "next/router";
import Footer from "../../../pages/component/footer";

export default function GetNotice({ data }) {
  const router = useRouter();
  const [Nid, setNoticeId] = useState("");
  const [status, setStatus] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/admin/deleteNotice/",
        { data: { Nid: Nid } }
      );
      setStatus(`Notice with ID ${Nid} has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting notice: ${error.message}`);
    }
  };

  return (
    <>
      <SessionCheck />
      <SideBar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        {/* heading */}
        <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          ALL
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            Notice
          </mark>
        </h1>
        {/* heading end */}

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Notice ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Notice Subject
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.Nid}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="px-6 py-4">{item.Nid}</td>
                  <td class="px-6 py-4">
                    <Link href={"/admin/dashboard/users/" + item.Nid}>
                      {item.Nsub}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Delete
            <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Notice
            </mark>
          </h1>
          <label
            htmlFor="Nid"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Notice ID:
          </label>
          <input
            type="text"
            id="Nid"
            value={Nid}
            onChange={(e) => setNoticeId(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
              focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {/* ...............delete button..................... */}
          <br />
          <button
            onClick={handleDelete}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Delete
            </span>
          </button>
          {/* ...............delete button end..................... */}
          <div>{status}</div>
          <br />
          <br />
          <button
            type="button"
            onClick={() => router.back()}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {" "}
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/admin/findallnotice/"
  );
  const data = await response.data;

  return { props: { data } };
}
