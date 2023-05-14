import MyLayout from "@/pages/component/layout";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../../../../pages/component/headerAdmin";
import SideBar from "../../../../pages/component/sidebar"; 
import Footer from "../../../../pages/component/footer";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <SideBar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        {/* heading */}
        <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            Notice
          </mark>
        </h1>
        {/* heading end */}

        <h2 class="mb-9 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Subject: {data.Nsub}
        </h2>
        <h2 class="mb-9 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Notice: {data.Ndetails}
        </h2>
        <br></br>
        {/* ...............back button ..................... */}
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

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/admin/findNotice/" + id
  );
  const data = await response.data;

  return { props: { data } };
}
