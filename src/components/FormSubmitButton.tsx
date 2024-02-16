"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={props.disabled || pending}
      {...props}
      className="hover:bg-primary-dark w-full rounded-lg bg-primary py-2 text-white"
    >
      <span className="flex items-center justify-center gap-1 ">
        {pending && <Loader2 size={20} className="animate-spin" />}
        {props.children}
      </span>
    </button>
  );
}