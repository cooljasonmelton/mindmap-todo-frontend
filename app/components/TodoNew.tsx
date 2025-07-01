"use client";

import { useState } from "react";
import { ToDoItem } from "../types";
import { CloseButton } from "./CloseButton";

interface ToDoNewProps {
  cancelCreateTodo: () => void;
}
interface FormErrorState {
  title?: string;
}

// TODO: set up isImportant logic (rn it isn't doing anything)

export const TodoNew = (props: ToDoNewProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isImportant: false,
  });
  const [errors, setErrors] = useState<FormErrorState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    // TODO: maken "if" more broad to clear any error and not just 'title'
    if (name === "title") {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ToDoItem> = {};

    if (!formData.title.trim()) {
      newErrors.title = "required";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
      <div>
        <div className="flex justify-end items-start">
          <h2 className="h3 mr-auto ml-auto">Create Task</h2>
          <CloseButton onClick={props.cancelCreateTodo} />
        </div>
        <div>
          <div className="flex gap-1">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <p className="form-label !text-[var(--error-700)]">
              {errors?.title && errors.title}
            </p>
          </div>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`form-input border-2 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter title"
          />
        </div>

        <div>
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input border-2 border-gray-300"
            placeholder="Enter description"
          />
        </div>
        <div className="flex items-center ml-2">
          <input
            id="isImportant"
            name="isImportant"
            type="checkbox"
            className="h-4 w-4 mr-1 my-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="isImportant" className="form-label">
            Important
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit}
          className={`btn-primary ${isSubmitting ? "disabled" : ""}`}
        >
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
};
