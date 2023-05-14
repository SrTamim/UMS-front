import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Footer from "/pages/component/footer";
import Header from "/pages/component/header";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form before submitting
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3000/admin/signin/",
          {
            email,
            pass,
          }
        );
        console.log("res: " + response.data);
        sessionStorage.setItem("email", response.data);
        router.push("/admin/dashboard");
      } catch (error) {
        console.log("error22: " + error.message);
        setError("invalid login");
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!pass) {
      errors.pass = "Password is required";
    } else if (!/[A-Z]/.test(pass)) {
      errors.pass = "Atlist one Capital Letter";
    } else if (!/[a-z]/.test(pass)) {
      errors.pass = "Atlist one Small Letter";
    } else if (!/[0-9]/.test(pass)) {
      errors.pass = "Atlist one Number";
    }
    return errors;
  };

  return (
    <>
      <Header />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Sign
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              IN
            </mark>
          </h1>
          <div className="relative mb-4">
            <label htmlfor="full-name" className="leading-7 text-sm text-gray-600">
              Email
            </label>

            <input
              type="email"
              className={`w-full bg-white rounded border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <div className="text-red-500 text-sm">{formErrors.email}</div>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlfor="pass" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              minLength="5"
              maxLength="5"
              className={`w-full bg-white rounded border ${
                formErrors.pass ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            {formErrors.pass && (
              <div className="text-red-500 text-sm">{formErrors.pass}</div>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Sign In
          </button>
          {error && (
            <div>
              <p
                id="outlined_error_help"
                className="mt-2 text-xs text-red-600 dark:text-red-400"
              >
                <span className="font-medium">{error}</span>
              </p>
            </div>
          )}
          <br />
          <br />
          New Here? Register Now <br />
          <br />
          <a
            href="/admin/dashboard/addadmin"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Register
          </a>
        </form>
      </div>
      <Footer />
    </>
  );
}
