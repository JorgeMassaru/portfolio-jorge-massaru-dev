"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type ProjectImage = {
  src: StaticImageData;
  alt: string;
};

type ProjectGalleryProps = {
  images: ProjectImage[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(
    null
  );
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  function openImage(image: ProjectImage) {
    setSelectedImage(image);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }

  function closeImage() {
    setSelectedImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }

  function increaseZoom() {
    setZoom((current) => Math.min(current + 0.25, 4));
  }

  function decreaseZoom() {
    setZoom((current) => {
      const newZoom = Math.max(current - 0.25, 1);

      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }

      return newZoom;
    });
  }

  function resetZoom() {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }

  function handleMouseDown(event: React.MouseEvent) {
    if (zoom <= 1) return;

    setIsDragging(true);

    setDragStart({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  }

  function handleMouseMove(event: React.MouseEvent) {
    if (!isDragging || zoom <= 1) return;

    setPosition({
      x: event.clientX - dragStart.x,
      y: event.clientY - dragStart.y,
    });
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  return (
    <>
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-zinc-900">
          Imagens do projeto
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openImage(image)}
              className="group w-full cursor-pointer overflow-hidden rounded-lg border-2 border-zinc-200 bg-zinc-50 p-0 text-left outline-none transition-all duration-200 hover:border-blue-500 focus:outline-none"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={closeImage}
        >
          <div
            className="relative h-[90vh] w-[90vw] overflow-hidden"
            onClick={(event) => event.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              cursor:
                zoom > 1
                  ? isDragging
                    ? "grabbing"
                    : "grab"
                  : "default",
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1600}
                height={1000}
                draggable={false}
                className="max-h-[90vh] max-w-[90vw] select-none rounded-lg object-contain"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: isDragging
                    ? "none"
                    : "transform 200ms ease-out",
                }}
              />
            </div>

            {/* Controles de zoom */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-black/70 p-2">
              <button
                type="button"
                onClick={decreaseZoom}
                className="cursor-pointer rounded px-3 py-1 text-xl text-white hover:bg-white/20"
                aria-label="Diminuir zoom"
              >
                −
              </button>

              <button
                type="button"
                onClick={resetZoom}
                className="cursor-pointer rounded px-3 py-1 text-sm text-white hover:bg-white/20"
              >
                {Math.round(zoom * 100)}%
              </button>

              <button
                type="button"
                onClick={increaseZoom}
                className="cursor-pointer rounded px-3 py-1 text-xl text-white hover:bg-white/20"
                aria-label="Aumentar zoom"
              >
                +
              </button>
            </div>

            {/* Fechar */}
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-3 top-3 cursor-pointer rounded-full bg-black/70 px-3 py-1 text-xl text-white hover:bg-black"
              aria-label="Fechar imagem"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}