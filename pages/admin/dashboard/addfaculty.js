import { useState } from "react";
import MyLayout from "@/pages/component/layout";
import { useRouter } from "next/router";
import SessionCheck from "../../component/sessioncheck";
import SideBar from "../../../pages/component/sidebar";
import Footer from "../../../pages/component/footer";

export default function AddFaculty() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Fidd: "",
    Fname: "",
    Fprogram: "",
    Fdep: "",
    Faddress: "",
    Fnum: "",
    Fdob: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formData.Fidd) {
      errors.Fidd = "id is required";
    }

    if (!formData.Fname) {
      errors.Fname = "name is required";
    }

    if (!formData.Fprogram) {
      errors.Fprogram = "Faculty is required";
    }

    if (!formData.Fdep) {
      errors.Fdep = "depertment is required";
    }
    if (!formData.Faddress) {
      errors.Faddress = "address is required";
    }
    if (!formData.Fnum) {
      errors.Fnum = "number is required";
    }
    if (!formData.Fdob) {
      errors.Fdob = "date of birth is required";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const response = await fetch("http://localhost:3000/admin/insertfaculty/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    alert("Faculty data submitted successfully!");
    setFormData({
      Fidd: "",
      Fname: "",
      Fprogram: "",
      Fdep: "",
      Faddress: "",
      Fnum: "",
      Fdob: "",
    });
    setErrors({});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <SessionCheck />
      <div>
        <SideBar />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          {/* heading */}
          <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Add
            <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Faculty
            </mark>
          </h1>
          {/* heading end */}
          <form onSubmit={handleSubmit}>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Faculty id:
              <input
                type="text"
                name="Fidd"
                value={formData.Fidd}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Fidd && (
                <div class="text-red-500 text-sm">{errors.Fidd}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name:
              <input
                type="text"
                name="Fname"
                value={formData.Fname}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Fname && (
                <div class="text-red-500 text-sm">{errors.Fname}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Faculty:
              <input
                type="text"
                name="Fprogram"
                value={formData.Fprogram}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Fprogram && (
                <div class="text-red-500 text-sm">{errors.Fprogram}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Depertment:
              <input
                type="text"
                name="Fdep"
                value={formData.Fdep}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Fdep && (
                <div class="text-red-500 text-sm">{errors.Fdep}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              address:
              <input
                type="text"
                name="Faddress"
                value={formData.Faddress}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Faddress && (
                <div class="text-red-500 text-sm">{errors.Faddress}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone Number:
              <input
                type="text"
                name="Fnum"
                value={formData.Fnum}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Fnum && (
                <div class="text-red-500 text-sm">{errors.Fnum}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of Birth:
              <input
                type="text"
                name="Fdob"
                value={formData.Fdob}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Fdob && (
                <div class="text-red-500 text-sm">{errors.Fdob}</div>
              )}
            </label>
            <br />

            {/* ...............submit button..................... */}
            <button
              type="submit"
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                ADD
              </span>
            </button>
            {/* ...............submit button end..................... */}
          </form>
          <br />

          {/* ...............back button..................... */}
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
        </div>
      </div>
      <Footer />
    </>
  );
}
