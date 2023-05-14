import { useState } from "react";
import { useRouter } from "next/router";
import SessionCheck from "../../component/sessioncheck";
import Footer from "../../../pages/component/footer";
import SideBar from "../../../pages/component/sidebar";

export default function AddCourse() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Cname: "",
    credit: "",
    room: "",
    time: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formData.Cname) {
      errors.Cname = "Course name is required";
    }

    if (!formData.credit) {
      errors.credit = "Credit is required";
    }

    if (!formData.room) {
      errors.room = "Room is required";
    }

    if (!formData.time) {
      errors.time = "Time is required";
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

    const response = await fetch("http://localhost:3000/admin/insertcourse/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    alert("Course data submitted successfully!");
    setFormData({
      Cname: "",
      credit: "",
      room: "",
      time: "",
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
              Course
            </mark>
          </h1>
          {/* heading end */}
          <form onSubmit={handleSubmit}>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Course Name:
              <input
                type="text"
                name="Cname"
                value={formData.Cname}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.Cname && (
                <div class="text-red-500 text-sm">{errors.Cname}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Credit:
              <input
                type="text"
                name="credit"
                value={formData.credit}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.credit && (
                <div class="text-red-500 text-sm">{errors.credit}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              room:
              <input
                type="text"
                name="room"
                value={formData.room}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.room && (
                <div class="text-red-500 text-sm">{errors.room}</div>
              )}
            </label>
            <br />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Time:
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.time && (
                <div class="text-red-500 text-sm">{errors.time}</div>
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
