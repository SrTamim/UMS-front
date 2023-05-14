import { useState } from "react";
import MyLayout from "@/pages/component/layout";
import { useRouter } from "next/router";
import SessionCheck from "../../component/sessioncheck";
import SideBar from "../../../pages/component/sidebar";
import Footer from "../../../pages/component/footer";

export default function AddStudent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Sidd: "",
    Sname: "",
    Sprogram: "",
    Sdep: "",
    Saddress: "",
    Snum: "",
    Sdob: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formData.Sidd) {
      errors.Sidd = "id is required";
    }

    if (!formData.Sname) {
      errors.Sname = "name is required";
    }

    if (!formData.Sprogram) {
      errors.Sprogram = "program is required";
    }

    if (!formData.Sdep) {
      errors.Sdep = "depertment is required";
    }
    if (!formData.Saddress) {
      errors.Saddress = "address is required";
    }
    if (!formData.Snum) {
      errors.Snum = "number is required";
    }
    if (!formData.Sdob) {
      errors.Sdob = "date of birth is required";
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

    const response = await fetch("http://localhost:3000/admin/insertstudent/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    alert("Student data submitted successfully!");
    setFormData({
      Sidd: "",
      Sname: "",
      Sprogram: "",
      Sdep: "",
      Saddress: "",
      Snum: "",
      Sdob: "",
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
              Student
            </mark>
          </h1>
          {/* heading end */}

          <form onSubmit={handleSubmit}>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Student id:
              <input
                type="text"
                name="Sidd"
                value={formData.Sidd}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Sidd && (
                <div class="text-red-500 text-sm">{errors.Sidd}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Student name:
              <input
                type="text"
                name="Sname"
                value={formData.Sname}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Sname && (
                <div class="text-red-500 text-sm">{errors.Sname}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Faculty:
              <input
                type="text"
                name="Sprogram"
                value={formData.Sprogram}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Sprogram && (
                <div class="text-red-500 text-sm">{errors.Sprogram}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Depertment:
              <input
                type="text"
                name="Sdep"
                value={formData.Sdep}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Sdep && (
                <div class="text-red-500 text-sm">{errors.Sdep}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              address:
              <input
                type="text"
                name="Saddress"
                value={formData.Saddress}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Saddress && (
                <div class="text-red-500 text-sm">{errors.Saddress}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone Number:
              <input
                type="text"
                name="Snum"
                value={formData.Snum}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-whi
          te dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Snum && (
                <div class="text-red-500 text-sm">{errors.Snum}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of Birth:
              <input
                type="text"
                name="Sdob"
                value={formData.Sdob}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Sdob && (
                <div class="text-red-500 text-sm">{errors.Sdob}</div>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
