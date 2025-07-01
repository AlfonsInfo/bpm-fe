/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from "formik";
import { InputText } from "primereact/inputtext";

interface FormikInputTextProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  [key: string]: any; // untuk menangkap props tambahan seperti type, disabled, dll
}

export default function FormikInputText({
  name,
  label,
  placeholder,
  className = "",
  ...props
}: FormikInputTextProps) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-semibold text-gray-800 tracking-wide"
        >
          {label}
        </label>
      )}
      <InputText
        id={name}
        {...field}
        {...props}
        className={`w-full ${hasError ? "p-invalid" : ""} ${className}`}
        placeholder={placeholder}
      />
      {hasError && (
        <small className="p-error block mt-1 text-xs">{meta.error}</small>
      )}
    </div>
  );
}
