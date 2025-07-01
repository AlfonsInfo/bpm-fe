"use client";

import { ProgressSpinner } from "primereact/progressspinner";

export default function PageLoading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <ProgressSpinner />
    </div>
  );
}
