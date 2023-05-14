import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Session() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // checks if the code is running on the client-side and not on the server-side.
      const session = sessionStorage.getItem("email");
      if (session) {
        setEmail(sessionStorage.getItem("email"));
      }
    }
  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/admin/signout");
      console.log(response.data);
      sessionStorage.removeItem("email");
      setEmail(null);
      router.push("../");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {email !== null ? (
        <>
          <button
            onClick={handleSignOut}
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Log out
          </button>
        </>
      ) : (
        <Link href="/admin/dashboard/addadmin">Sign in</Link>
      )}
    </>
  );
}
