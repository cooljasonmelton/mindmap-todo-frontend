"use client";

import { useState } from "react";
import { ToDoItem } from "../types";
import { CloseButton } from "./CloseButton";

interface ToDoNewProps {
  cancelCreateTodo: () => void;
}
interface FormErrorState {
  title?: string;
  description?: string;
}

export const TodoNew = (props: ToDoNewProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isImportant: false,
  });
  const [errors, setErrors] = useState<FormErrorState>({
    title: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ToDoItem> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);

      // Reset form
      setFormData({ title: "", description: "", isImportant: false });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card !bg-[var(--jmc-orange)] !text-[var(--jmc-black)] px-2 pt-2 pb-4 mx-[-1px] mb-[-1px]">
      <div className="flex items-start justify-between">
        {/* <h2 className="h3 p-0 mb-2">NEW TODO TITLE</h2> */}
        <CloseButton onClick={props.cancelCreateTodo} />
      </div>
      {/* <p className="">NEW TODO DESCRIPTION</p> */}
      <div
      // className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div
        // className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              // className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              // className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              //   errors.title ? "border-red-500" : "border-gray-300"
              // }`}
              placeholder="Enter title"
            />
            {errors.title && (
              <p
              // className="mt-1 text-sm text-red-600"
              >
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              // className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              // className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              //   errors.description ? "border-red-500" : "border-gray-300"
              // }`}
              placeholder="Enter description"
            />
            {errors.description && (
              <p
              // className="mt-1 text-sm text-red-600"
              >
                {errors.description}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="btn-primary"
            // className={`w-full py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            //   isSubmitting
            //     ? "bg-gray-400 cursor-not-allowed"
            //     : "bg-blue-600 hover:bg-blue-700 text-white"
            // }`}
          >
            {isSubmitting ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};
