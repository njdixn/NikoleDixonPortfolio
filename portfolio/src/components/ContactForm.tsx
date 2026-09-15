import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { CONTACT_DATA } from "../data/contact";

// Zod schema for client-side form validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name (minimum 2 characters)" })
    .max(100, { message: "Name is too long" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(3, { message: "Please enter a subject (minimum 3 characters)" })
    .max(150, { message: "Subject is too long" }),
  message: z
    .string()
    .min(10, { message: "Please enter a message (minimum 10 characters)" })
    .max(2000, { message: "Message cannot exceed 2000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const emailTo = CONTACT_DATA.email;
    const emailSubject = encodeURIComponent(`[Portfolio Contact] ${data.subject}`);
    const emailBody = encodeURIComponent(
      `Hello Nikole,\n\n${data.message}\n\nFrom:\n${data.name}\n${data.email}`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
    setLastMailtoUrl(mailtoUrl);
    setSubmitted(true);

    // Launch default email client
    window.location.href = mailtoUrl;
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
    setLastMailtoUrl(null);
  };

  return (
    <div className="bg-white rounded-lg border border-[#195342]/15 p-6 sm:p-8 shadow-sm">
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-[#195342]/10 text-[#195342] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-light text-[#2b2025]">
            Email Client Opened!
          </h3>
          <p className="text-sm text-[#5e595b] max-w-md mx-auto font-light leading-relaxed">
            Your message was formatted and passed to your default email client. If your client didn't open automatically, you can use the button below or email directly to{" "}
            <a href={`mailto:${CONTACT_DATA.email}`} className="text-[#195342] font-mono underline font-medium">
              {CONTACT_DATA.email}
            </a>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            {lastMailtoUrl && (
              <a
                href={lastMailtoUrl}
                className="btn-primary"
              >
                <Send className="w-4 h-4" />
                <span>Open Mail Client Again</span>
              </a>
            )}
            <button
              onClick={handleReset}
              className="btn-outline"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Send Another Message</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block font-mono text-xs tracking-wider uppercase text-[#2b2025] mb-1.5 font-medium">
                Your Name <span className="text-[#195342]">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="Nikole Dixon"
                className={`w-full px-3.5 py-2.5 rounded bg-[#f7f5f2] border ${
                  errors.name ? "border-red-500 focus:ring-red-400" : "border-[#195342]/20 focus:ring-[#195342]"
                } text-[#2b2025] text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-gray-400`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block font-mono text-xs tracking-wider uppercase text-[#2b2025] mb-1.5 font-medium">
                Email Address <span className="text-[#195342]">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className={`w-full px-3.5 py-2.5 rounded bg-[#f7f5f2] border ${
                  errors.email ? "border-red-500 focus:ring-red-400" : "border-[#195342]/20 focus:ring-[#195342]"
                } text-[#2b2025] text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-gray-400`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className="block font-mono text-xs tracking-wider uppercase text-[#2b2025] mb-1.5 font-medium">
              Subject <span className="text-[#195342]">*</span>
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              placeholder="Software Development Opportunity / Project Collaboration"
              className={`w-full px-3.5 py-2.5 rounded bg-[#f7f5f2] border ${
                errors.subject ? "border-red-500 focus:ring-red-400" : "border-[#195342]/20 focus:ring-[#195342]"
              } text-[#2b2025] text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-gray-400`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.subject.message}</span>
              </p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block font-mono text-xs tracking-wider uppercase text-[#2b2025] mb-1.5 font-medium">
              Message <span className="text-[#195342]">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder="Write your message here... Looking forward to discussing software engineering roles, technical projects, or creative inquiries."
              className={`w-full px-3.5 py-2.5 rounded bg-[#f7f5f2] border ${
                errors.message ? "border-red-500 focus:ring-red-400" : "border-[#195342]/20 focus:ring-[#195342]"
              } text-[#2b2025] text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-gray-400 resize-y`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          <p className="text-xs text-[#5e595b] font-light">
            Note: This static form runs client-side validation using React Hook Form & Zod, then launches a pre-formatted <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">mailto:</code> link directly into your native email client. No server tracking or storage.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full sm:w-auto"
          >
            <Send className="w-4 h-4" />
            <span>Generate & Send Email</span>
          </button>
        </form>
      )}
    </div>
  );
}

