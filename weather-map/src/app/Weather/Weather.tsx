"use client";

import "./Weather.style.css";
import { Button } from "@/ui/Button/Button";
import { FormEvent, useState } from "react";
import OpenWeather from "../components/OpenWeather/OpenWeather";

export const Weather = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <div className="weather-container" onSubmit={handleClick}>
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)}>Clima & Avisos</Button>
      )}
      {isOpen && <OpenWeather />}
    </div>
  );
};
