interface FormLayoutProps {
  children: React.ReactNode;
  label?: string | null;
  error?: string | null;
  htmlFor?: string;
}

export default function FormLayout({
  children,
  label,
  error,
  htmlFor,
}: FormLayoutProps) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-sm font-semibold text-gray-800 tracking-wide block my-1"
        >
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <small className="p-error block mt-1 text-xs text-red-500">{error}</small>
      )}
    </div>
  );
}
