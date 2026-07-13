"use client";

import "./Carousel.css";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  return (

    <section className="carousel-section">

      <button className="arrow">&#10094;</button>

      <div className="carousel">

        {children}

      </div>

      <button className="arrow">&#10095;</button>

    </section>

  );
}