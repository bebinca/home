"use client";
import { useState } from "react";
import { basePath } from "../path";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 w-full px-4 py-4 sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center max-w-[1080px] mx-auto">
        <h1 className="text-2xl font-bold">Yuan Tian</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#publications" className="hover:underline color-gray-800">
            Publications
          </a>
          <a href="#experience" className="hover:underline color-gray-800">
            Experience
          </a>
          <a href={`${basePath}/pdfs/cv.pdf`} target="_blank" rel="noopener noreferrer" className="hover:underline color-gray-800">
            CV
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden border border-gray-500 rounded px-3 py-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-gray-800" />
            <div className="w-5 h-0.5 bg-gray-800" />
            <div className="w-5 h-0.5 bg-gray-800" />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-40 mt-4" : "max-h-0"
          }`}
        >
          <div className="space-y-2 text-center text-lg py-2">
            <a href="#publications" className="block hover:underline" onClick={() => setMenuOpen(false)}>
              Publications
            </a>
            <a href="#experience" className="block hover:underline" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a
              href={`${basePath}/pdfs/cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              CV
            </a>
          </div>
        </div>
      }
    </header>
  );
}
