import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CourseLayout from "@/pages/component/coursedata";
import SideBar from "../../../pages/component/sidebar";
import Footer from "../../../pages/component/footer";
import SessionCheck from "../../component/sessioncheck";

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const [Cid, setId] = useState("");
  const [Cname, setName] = useState("");
  const [credit, setDep] = useState("");
  const [room, setAddress] = useState("");
  const [time, setNum] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/admin/updateCourse/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Cid, Cname, credit, room, time }),
      });

      const data = await res.json();

      if (data.success) {
        setErrorMessage("");
        setId("");
        setName("");
        setDep("");
        setAddress("");
        setNum("");
      } else {
        setErrorMessage("Something went wrong.");
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("Course data updated successfully.");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: "updatecourse",
      query: { inputValue: inputValue },
    });
  };

  return (
    <>
      <SessionCheck />
      <SideBar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-0">
        <form onSubmit={handleFormSubmit}>
          {/* heading */}
          <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Search
            <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Course
            </mark>
          </h1>
          {/* heading end */}
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ID:
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* ...............submit button..................... */}
          <br />
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Search
            </span>
          </button>
          {/* ...............submit button end..................... */}
        </form>
        {data.status == null ? (
          <CourseLayout data={data} />
        ) : (
          <p style={{ color: "red" }}>{data.status}</p>
        )}

        {/* ...............error msg end..................... */}
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Update
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            Course
          </mark>
        </h1>

        <form onSubmit={handleUpdateStudent}>
          <div>
            <label
              htmlFor="Cid"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Course ID:
            </label>
            <input
              type="number"
              id="Cid"
              value={Cid}
              onChange={(e) => setId(e.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Cname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Course Name:
            </label>
            <input
              type="text"
              id="Cname"
              value={Cname}
              onChange={(e) => setName(e.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="credit"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Course Credit:
            </label>
            <input
              type="text"
              id="credit"
              value={credit}
              onChange={(e) => setDep(e.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="room"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Course Room:
            </label>
            <input
              type="text"
              id="room"
              value={room}
              onChange={(e) => setAddress(e.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="time"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Course Time:
            </label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setNum(e.target.value)}
              required={true}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <br />

          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {/* ...............update button..................... */}
          <br />
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Update
            </span>
          </button>
          {/* ...............update button end..................... */}

          {/* ...............back button..................... */}
          <br />
          <br />

          {/* ...............back button..................... */}
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
        </form>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
    const response = await axios.get(
      "http://localhost:3000/admin/findCourse/" + inputValue
    );
    const data = await response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: { status: "Enter valid Admin ID" },
      },
    };
  }
}
