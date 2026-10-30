"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message.");
      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-green-800">Message Sent!</h3>
        <p className="text-green-700 text-sm mt-2">We will get back to you shortly.</p>
        <button onClick={() => setIsSuccess(false)} className="mt-4 text-sm font-semibold underline">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errorMsg && <p className="text-red-600 bg-red-50 p-3 rounded">{errorMsg}</p>}
      
      {/* Honeypot */}
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block text-sm font-semibold mb-1">Full Name *</label>
        <input type="text" {...register("name")} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-school-blue outline-none" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Phone *</label>
          <input type="tel" {...register("phone")} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-school-blue outline-none" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input type="email" {...register("email")} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-school-blue outline-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Message *</label>
        <textarea {...register("message")} rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-school-blue outline-none resize-none"></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full bg-school-blue text-white font-bold py-3 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors">
        {isSubmitting ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : "Send Message"}
      </button>
    </form>
  );
}