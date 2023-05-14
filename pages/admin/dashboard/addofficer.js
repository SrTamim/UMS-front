import { useState } from "react";
import MyLayout from "@/pages/component/layout";
import { useRouter } from "next/router";
import SessionCheck from "../../component/sessioncheck";
import SideBar from "../../../pages/component/sidebar";
import Footer from "../../../pages/component/footer";

export default function AddOfficer() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Oidd: "",
    Oname: "",
    Odep: "",
    Oaddress: "",
    Onum: "",
    Odob: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formData.Oidd) {
      errors.Oidd = "id is required";
    }

    if (!formData.Oname) {
      errors.Oname = "name is required";
    }

    if (!formData.Odep) {
      errors.Odep = "depertment is required";
    }
    if (!formData.Oaddress) {
      errors.Oaddress = "address is required";
    }
    if (!formData.Onum) {
      errors.Onum = "number is required";
    }
    if (!formData.Odob) {
      errors.Odob = "date of birth is required";
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

    const response = await fetch("http://localhost:3000/admin/insertofficer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    alert("officer data submitted successfully!");
    setFormData({
      Oidd: "",
      Oname: "",
      Odep: "",
      Oaddress: "",
      Onum: "",
      Odob: "",
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
              Officer
            </mark>
          </h1>
          {/* heading end */}
          <form onSubmit={handleSubmit}>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Officer id:
              <input
                type="text"
                name="Oidd"
                value={formData.Oidd}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Oidd && (
                <div class="text-red-500 text-sm">{errors.Oidd}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              officer name:
              <input
                type="text"
                name="Oname"
                value={formData.Oname}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Oname && (
                <div class="text-red-500 text-sm">{errors.Oname}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Depertment:
              <input
                type="text"
                name="Odep"
                value={formData.Odep}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Odep && (
                <div class="text-red-500 text-sm">{errors.Odep}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              address:
              <input
                type="text"
                name="Oaddress"
                value={formData.Oaddress}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Oaddress && (
                <div class="text-red-500 text-sm">{errors.Oaddress}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone Number:
              <input
                type="text"
                name="Onum"
                value={formData.Onum}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Onum && (
                <div class="text-red-500 text-sm">{errors.Onum}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of Birth:
              <input
                type="text"
                name="Odob"
                value={formData.Odob}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Odob && (
                <div class="text-red-500 text-sm">{errors.Odob}</div>
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
