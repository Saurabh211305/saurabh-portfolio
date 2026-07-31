"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(1, "Enter your company name"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Tell me a little about the goal"),
});

type FormValues = z.infer<typeof schema>;

const budgetRanges = [
  "Under ₹1,50,000/mo",
  "₹1,50,000 – ₹3,00,000/mo",
  "₹3,00,000 – ₹10,00,000/mo",
  "₹10,00,000+/mo",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormValues) {
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nBudget: ${data.budget}\n\n${data.message}`
    );
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Discovery call request — ${data.company}`
    )}&body=${body}`;
    window.open(mailto, "_self");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-ink/10 bg-surface p-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-signal" />
        <p className="font-display text-xl">Your email client should be open now.</p>
        <p className="max-w-sm text-sm text-muted-on-light">
          If it didn&apos;t open, email directly at{" "}
          <a href={`mailto:${site.email}`} className="text-signal-ink underline">
            {site.email}
          </a>{" "}
          or message on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <input
            id="name"
            {...register("name")}
            className="mt-2 w-full rounded-xl border border-ink/15 bg-surface px-4 py-3 text-sm outline-none focus:border-signal"
          />
          {errors.name && <p className="mt-1 text-xs text-signal-ink">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-2 w-full rounded-xl border border-ink/15 bg-surface px-4 py-3 text-sm outline-none focus:border-signal"
          />
          {errors.email && <p className="mt-1 text-xs text-signal-ink">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          {...register("company")}
          className="mt-2 w-full rounded-xl border border-ink/15 bg-surface px-4 py-3 text-sm outline-none focus:border-signal"
        />
        {errors.company && <p className="mt-1 text-xs text-signal-ink">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="text-sm font-medium">
          Monthly ad spend budget
        </label>
        <select
          id="budget"
          {...register("budget")}
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-ink/15 bg-surface px-4 py-3 text-sm outline-none focus:border-signal"
        >
          <option value="" disabled>
            Select a range
          </option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {errors.budget && <p className="mt-1 text-xs text-signal-ink">{errors.budget.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          What are you looking to grow?
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="mt-2 w-full rounded-xl border border-ink/15 bg-surface px-4 py-3 text-sm outline-none focus:border-signal"
        />
        {errors.message && <p className="mt-1 text-xs text-signal-ink">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-signal-deep px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-ink disabled:opacity-60"
      >
        Send message <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}
