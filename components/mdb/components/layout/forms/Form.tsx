"use client";

import { ReactNode, FormHTMLAttributes } from "react";
import clsx from "clsx";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  spacing?: string;
  fullWidth?: boolean;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "5/8"
    | "3/4"
    | "full";
  className?: string;
  width?: string;
}

/**
 * Form
 * ---------------------
 * A styled form wrapper with spacing, layout control, and full a11y.
 *
 * ✅ Use for:
 * - Signup/login forms
 * - Profile settings or dashboards
 * - Wrapping FieldGroup, FormRow, and field inputs
 *
 * 🧠 Design Notes:
 * - Uses HTML <form> tag with forwarded props
 * - Applies consistent spacing (`gap-...`)
 * - Supports `maxWidth` constraint for responsive layout
 *
 * 🛠️ Props:
 * - children: ReactNode — form content
 * - spacing?: string — Tailwind gap between rows (default: 'gap-6')
 * - fullWidth?: boolean — removes max-width constraint
 * - maxWidth?: string — constrain form width (default: 'md')
 * - className?: string — override outer styles
 * - ...rest: standard <form> props (onSubmit, etc.)
 *
 * 🚀 Example Usage:
 * <Form onSubmit={handleSubmit}>
 *   <FormRow label="Email"><EmailInput /></FormRow>
 * </Form>
 *
 * <Form maxWidth="lg" spacing="gap-8" className="bg-brand-dark text-white p-8 rounded-xl">
 *   <FieldGroup title="Account Info">
 *     <TextInput name="username" />
 *     <PasswordInput name="password" />
 *   </FieldGroup>
 * </Form>
 */

export default function Form({
  children,
  spacing = "gap-6",
  fullWidth = false,
  maxWidth = "4xl",
  className,
  width,
  ...rest
}: FormProps) {
  const w = width || "";
  return (
    <form
      className={clsx(
        "w-full flex flex-col",
        spacing,
        !fullWidth && `max-w-${maxWidth} ${width} mx-auto`,
        className
      )}
      {...rest}
    >
      {children}
    </form>
  );
}
