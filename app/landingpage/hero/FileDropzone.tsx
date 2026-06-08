"use client";

import { useId, useRef, useState, type ChangeEvent, type DragEvent } from "react";

export default function FileDropzone() {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const openPicker = () => inputRef.current?.click();

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setFileName(files[0].name);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
  };

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  const onDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  return (
    <div className="relative w-full">
      <div className="rounded-[28px] bg-white p-3.5 shadow-[0_30px_70px_-15px_rgba(7,29,89,0.35)] ring-1 ring-black/5 sm:rounded-[32px] sm:p-4">
        <label
          htmlFor={inputId}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          className={[
            "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed bg-white px-8 py-12 text-center transition-colors sm:px-12 sm:py-14",
            isDragging
              ? "border-[#5C8DFF] bg-[#F4F8FF]"
              : "border-[#8BAEFF] hover:border-[#5C8DFF] hover:bg-[#F8FAFF]",
          ].join(" ")}
        >
          <p className="text-lg font-semibold text-slate-800 sm:text-xl md:text-2xl">
            Drag &amp; Drop files or{" "}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openPicker();
              }}
              className="font-semibold text-[#0B45BC] underline underline-offset-4 hover:text-[#09399c]"
            >
              browse
            </button>
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
            Upload your resume and get real time analysis and updates to
            improve your ATS score
          </p>
          {fileName ? (
            <p className="mt-1 text-xs font-medium text-[#0B45BC] sm:text-sm">
              Selected: {fileName}
            </p>
          ) : null}
          <input
            id={inputId}
            ref={inputRef}
            type="file"
            accept=".pdf,.doc,.docx,application/pdf"
            className="sr-only"
            onChange={onInputChange}
          />
        </label>
      </div>
    </div>
  );
}
