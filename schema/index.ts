import { z } from "zod";

export const admissionSchema = z.object({
  studentName: z.string().min(2, "Student's name is required"),
  parentName: z.string().min(2, "Parent's name is required"),
  phone: z.string().min(10, "Valid 10-digit phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  classApplying: z.string().min(1, "Please select a class"),
  previousSchool: z.string().optional(),
  message: z.string().max(500, "Message is too long").optional(),
  website: z.string().optional(), // Honeypot ke liye
});

export type AdmissionFormData = z.infer<typeof admissionSchema>;