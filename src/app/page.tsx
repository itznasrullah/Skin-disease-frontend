"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import IconUpload from "./image-upload";
import Bargraph from "./bargraph";
import ThemeToggler from "../components/Header/ThemeToggler";

const Prototype: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<any>>([]);
  const [label, setLabel] = useState<string>("");
  const serverLight = useRef<HTMLDivElement>(null);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/jpg": [],
    },
    onDrop: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
            method: "POST",
            body: formData,
          });
          const res = await response.json();
          setLabel(res.prediction);
          setData(res.probabilities);
        } catch (error) {
          console.error("Error:", error);
          setLabel("Error");
        }
        setLoading(false);
      };

      fetchData();
    }
  }, [file]);

  useEffect(() => {
    const id = setInterval(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/`)
        .then((res) => res.json())
        .then((json) => {
          if (serverLight.current) {
            serverLight.current.style.background = "lightgreen";
          }
          clearInterval(id);
        })
        .catch((e) => {
          console.log("SERVER IS NOT READY\n\nRETRYING IN 5s...\n\n");
        });
    }, 5000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  const handleLinkUpload = async () => {
    setLoading(true);
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      setFile(
        Object.assign(blob, {
          preview: URL.createObjectURL(blob),
        })
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching image:", error);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setData([]);
    setLabel("");
    setLink("");
    setLoading(false);
  };

  return (
    <section className="p-[120px]">
      <ThemeToggler />
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "red",
          position: "absolute",
          right: "30px",
          top: "100px",
        }}
        ref={serverLight}
      />
      {!file && (
        <div className="container">
          <div className="-mx-4 flex flex-col items-center justify-center">
            <div className="flex h-[350px] w-[550px] items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-primary/5 p-4 text-primary dark:bg-primary/10">
              <div className="flex h-full w-full flex-col items-center justify-center gap-[30px]" {...getRootProps()}>
                <input {...getInputProps()} />
                <IconUpload />
                <p className="text-xl">Drag & Drop CXR Image here OR Click to Browse.</p>
              </div>
            </div>

            <div className="py-[50px] text-3xl text-slate-400">Or</div>

            <div className="flex w-[50%] justify-center">
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Paste image link here"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
              <button
                className="flex items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                onClick={handleLinkUpload}
                disabled={!link}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
      {file && (
        <div className="flex flex-col justify-center">
          <div className={`container flex gap-[30px] ${label ? "justify-between" : "justify-center"}`}>
            <div>
              <img src={file.preview} className="aspect-auto w-[400px]" alt="Preview" />
              {!label && <div className="scanner" />}
            </div>
            {label && data && (
              <div className="relative flex-1">
                <Bargraph data={data} />
                <p className="absolute right-0 top-0 text-2xl text-[#001b89d4] dark:text-[#fff]">
                  Prediction: <b>{label}</b>
                </p>
              </div>
            )}
          </div>
          <button
            className="mx-auto mt-20 flex w-[300px] items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            onClick={handleReset}
          >
            Upload Another
          </button>
        </div>
      )}
    </section>
  );
};

export default Prototype;
