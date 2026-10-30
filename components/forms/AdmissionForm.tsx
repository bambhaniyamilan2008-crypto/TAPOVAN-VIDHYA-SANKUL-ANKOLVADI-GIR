"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { admissionSchema } from "@/schema";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";

type AdmissionFormData = z.infer<typeof admissionSchema>;

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setIsSuccess(true);
      reset(); // Form clear kar do
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center shadow-sm">
        <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
        <p className="text-gray-700">
          Thank you for showing interest in Tapoval Vidhya Sankul. Our admission team will contact you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-school-blue font-semibold hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
      {errorMessage && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-6 text-sm border border-red-200">
          {errorMessage}
        </div>
      )}

      {/* Honeypot Field - Hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Student's Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            {...register("studentName")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue focus:border-transparent outline-none transition-all"
            placeholder="e.g. Rahul Sharma"
          />
          {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Parent's Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            {...register("parentName")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue focus:border-transparent outline-none transition-all"
            placeholder="e.g. Amit Sharma"
          />
          {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue focus:border-transparent outline-none transition-all"
            placeholder="10-digit mobile number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue focus:border-transparent outline-none transition-all"
            placeholder="Optional"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Class Applying For <span className="text-red-500">*</span></label>
          <select
            {...register("classApplying")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select a class</option>
            <option value="KG">Kindergarten</option>
            <option value="Primary (1-5)">Primary (Std 1 to 5)</option>
            <option value="Secondary (6-10)">Secondary (Std 6 to 10)</option>
            <option value="11-Science">Std 11 Science</option>
            <option value="11-Commerce">Std 11 Commerce</option>
            <option value="11-Arts">Std 11 Arts</option>
            <option value="12-Science">Std 12 Science</option>
            <option value="12-Commerce">Std 12 Commerce</option>
            <option value="12-Arts">Std 12 Arts</option>
          </select>
          {errors.classApplying && <p className="text-red-500 text-xs mt-1">{errors.classApplying.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Previous School</label>
          <input
            type="text"
            {...register("previousSchool")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue focus:border-transparent outline-none transition-all"
            placeholder="Name of current/last school"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message (Optional)</label>
        <textarea
          {...register("message")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-blue focus:border-transparent outline-none transition-all resize-none"
          placeholder="Any specific questions or requirements?"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-school-blue hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin mr-2 h-5 w-5" /> Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </button>
      <p className="text-xs text-gray-500 text-center mt-4">
        Your data is secure and will only be used for admission purposes.
      </p>
    </form>
  );
}