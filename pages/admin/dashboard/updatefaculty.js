import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import FacultyLayout from "@/pages/component/facultydata";
import SideBar from "../../component/sidebar";
import Footer from "../../component/footer";
import SessionCheck from "../../component/sessioncheck";

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const [Fid, setId] = useState("");
  const [Fidd, setIdd] = useState("");
  const [Fname, setName] = useState("");
  const [Fprogram, setProgram] = useState("");
  const [Fdep, setDep] = useState("");
  const [Faddress, setAddress] = useState("");
  const [Fnum, setNum] = useState("");
  const [Fdob, setDob] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/admin/updateFaculty/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fid,
          Fidd,
          Fname,
          Fprogram,
          Fdep,
          Faddress,
          Fnum,
          Fdob,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setErrorMessage("");
        setId("");
        setIdd("");
        setName("");
        setProgram("");
        setDep("");
        setAddress("");
        setNum("");
        setDob("");
      } else {
        setErrorMessage("Something went wrong.");
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("Student data updated successfully.");
      setSuccessMessage("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: "updatefaculty",
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
              Faculty
            </mark>
          </h1>
          {/* heading end */}
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              DEP:
            </label>
            <input
              type="text"
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
          <FacultyLayout data={data} />
        ) : (
          <p class="text-red-500 text-sm">{data.status}</p>
        )}
      </div>

      <form onSubmit={handleUpdateStudent}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          {/* heading */}
          <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Update
            <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Faculty
            </mark>
          </h1>
          {/* heading end */}

          <label
            htmlFor="Fid"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ID:
          </label>
          <input
            type="number"
            id="Fid"
            value={Fid}
            onChange={(e) => setId(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label
            htmlFor="Fidd"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Faculty ID:
          </label>
          <input
            type="number"
            id="Fidd"
            value={Fidd}
            onChange={(e) => setIdd(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />

          <label
            htmlFor="Fname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name:
          </label>
          <input
            type="text"
            id="Fname"
            value={Fname}
            onChange={(e) => setName(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label
            htmlFor="Fprogram"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Faculty:
          </label>
          <input
            type="text"
            id="Fprogram"
            value={Fprogram}
            onChange={(e) => setProgram(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label
            htmlFor="Fdep"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Depertment:
          </label>
          <input
            type="text"
            id="Fdep"
            value={Fdep}
            onChange={(e) => setDep(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label
            htmlFor="Faddress"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            address:
          </label>
          <input
            type="text"
            id="Faddress"
            value={Faddress}
            onChange={(e) => setAddress(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label
            htmlFor="Fnum"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number:
          </label>
          <input
            type="text"
            id="Fnum"
            value={Fnum}
            onChange={(e) => setNum(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label
            htmlFor="Fdob"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date of Birth:
          </label>
          <input
            type="text"
            id="Fdob"
            value={Fdob}
            onChange={(e) => setDob(e.target.value)}
            required={true}
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          <br />
          {/* ...............submit button..................... */}
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Update
            </span>
          </button>
          {/* ...............submit button end..................... */}

          <br />
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
        </div>
      </form>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
    const response = await axios.get(
      "http://localhost:3000/admin/findFacultydep/" + inputValue
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
        data: { status: "Enter valid Faculty Dep" },
      },
    };
  }
}
