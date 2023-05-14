import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import SideBar from "../../../pages/component/sidebar";
import Footer from "../../../pages/component/footer";
import SessionCheck from "../../component/sessioncheck";

export default function GetNotice({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck />
      <SideBar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        {/* heading */}
        <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Course
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
                  Course ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Course name
                </th>
                <th scope="col" class="px-6 py-3">
                  Credit
                </th>
                <th scope="col" class="px-6 py-3">
                  Room
                </th>
                <th scope="col" class="px-6 py-3">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.Sid}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="px-6 py-4">{item.Cid}</td>
                  <td class="px-6 py-4">{item.Cname}</td>
                  <td class="px-6 py-4"> {item.credit}</td>
                  <td class="px-6 py-4">{item.room}</td>
                  <td class="px-6 py-4">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/admin/findallcourse/"
  );
  const data = await response.data;

  return { props: { data } };
}
