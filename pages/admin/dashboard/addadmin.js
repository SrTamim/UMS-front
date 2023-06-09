import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import MyLayout from "@/pages/component/layout";
import { useRouter } from "next/router";
import SessionCheck from "../../component/sessioncheck";
import Footer from "../../../pages/component/footer";
import Header from "/pages/component/header";

export default function AddAdmin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //session
  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpg", "image/png"];

    if (!allowedtypes.includes(file.type)) {
      return false;
    }
  };
  //----------------

  const [success, setSuccess] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("pass", data.pass);
    formData.append("address", data.address);
    formData.append("myfile", data.myfile[0]);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Signup successfully");
      reset();
    } catch (error) {
      setSuccess("Signup not successfull  ");
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Sign
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            up
          </mark>
        </h1>

        {success}
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div>
            <label
              htmlFor="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.type === "required"
                  ? "Email is required"
                  : "Invalid email address"}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="pass"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="pass"
              {...register("pass", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,5}$/,
              })}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.pass && (
              <p className="text-red-500 text-sm">
                {errors.pass.type === "required"
                  ? "password is required"
                  : "A-Z , a-z , 0-9 , 5 character"}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              address
            </label>
            <textarea
              id="address"
              {...register("address", { required: true })}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">address is required</p>
            )}
          </div>
          <br />
          <div>
            <label
              htmlFor="file"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              File
            </label>
            <input
              type="file"
              id="myfile"
              {...register("myfile", {
                required: true,
                validate: validateFile,
              })}
            />
            {errors.myfile && (
              <p className="text-red-500 text-sm">
                {errors.myfile.type === "required"
                  ? "file is required"
                  : "invalid file"}
              </p>
            )}
          </div>
          <br />
          {/* ...............submit button..................... */}
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
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
      <Footer />
    </>
  );
}
