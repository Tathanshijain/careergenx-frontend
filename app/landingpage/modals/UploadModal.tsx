"use client";

import { useId, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { useModal } from "./ModalContext";

export default function UploadModal() {
  const { uploadOpen, closeUpload } = useModal();
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  if (!uploadOpen) return null;

  const openPicker = () => inputRef.current?.click();

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setFileName(files[0].name);
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeUpload();
      }}
    >
      <div className="relative w-full max-w-2xl rounded-[24px] bg-white p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          onClick={closeUpload}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        </button>

        <h2 className="mb-2 text-lg font-semibold text-slate-900">
          Upload Your Resume
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          Get real-time analysis and suggestions to improve your ATS score.
        </p>

        <label
          htmlFor={inputId}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          className={[
            "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-all",
            isDragging
              ? "border-[#0056E2] bg-[#F0F5FF]"
              : "border-[#8BAEFF] bg-white hover:border-[#5C8DFF] hover:bg-[#F8FAFF]",
          ].join(" ")}
        >
          <p className="text-lg font-semibold text-slate-800">
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
          <p className="max-w-md text-sm leading-relaxed text-slate-500">
            Upload your resume and get real time analysis and updates to
            improve your ATS score
          </p>
          {fileName ? (
            <p className="mt-1 text-xs font-medium text-[#0B45BC]">
              Selected: {fileName}
            </p>
          ) : null}
          <input
            id={inputId}
            ref={inputRef}
            type="file"
            accept=".pdf,.doc,.docx,application/pdf"
            className="sr-only"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
          />
        </label>
      </div>
    </div>
  );
}
