"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    tel: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ name: "", tel: "", email: "", password: "" });

    try {
        const res = await fetch("https://presentation-day-1-annieruok.vercel.app/api/v1/auth/register", {
            method: "POST",
            body: JSON.stringify({ ...formValues, role: "user" }),
            headers: {
              "Content-Type": "application/json",
            },
          });

      setLoading(false);
      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || "An error occurred"); // Make sure the message is a string
        setLoading(false);
        return;
      }
  
      signIn(undefined, { callbackUrl: "/" });
    } catch (error) {
      setLoading(false);
      // Assuming error is of type any, check if it's an Error object and use its message
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div className="mb-6">
        <input
          required
          type="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="tel"
          name="tel"
          value={formValues.tel}
          onChange={handleChange}
          placeholder="Tel-num"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          className={`${input_style}`}
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
        className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        disabled={loading}
      >
        {loading ? "loading..." : "Sign Up"}
      </button>
    </form>
  );
};
