"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-100 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/ufc-favicon-trimed.png"
                alt="Union French Cleaners Logo"
                width={40}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
              <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                Union French Cleaners
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              <a
                href="#home"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-neutral-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4 animate-in slide-in-from-top">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
                >
                  Home
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors tracking-wide uppercase"
                >
                  Contact
                </a>
                <a
                  href="tel:415-923-1212"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-emerald-50/30 pt-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 right-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-16 sm:py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="mb-6 sm:mb-8 inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-neutral-700 text-xs sm:text-sm font-medium tracking-wide">
                Serving San Francisco since 1989
              </span>
            </div>

            {/* Logo */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <Image
                src="/logo.png"
                alt="Union French Cleaners - super clean"
                width={500}
                height={200}
                priority
                className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto"
              />
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 mb-3 sm:mb-4 font-light tracking-wide max-w-3xl mx-auto px-4">
              Premium dry cleaning & garment care
            </p>
            <p className="text-base sm:text-lg text-neutral-600 mb-8 sm:mb-12 font-light italic px-4">
              Where tradition meets excellence
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a
                href="#contact"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-white transition-all bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:scale-105 transform text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Book Appointment</span>
              </a>
              <a
                href="tel:415-923-1212"
                className="w-full sm:w-auto group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-medium text-neutral-700 border-2 border-neutral-300 rounded-full hover:bg-neutral-100 transition-all backdrop-blur-sm hover:border-emerald-500 text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>415-923-1212</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-1 sm:mb-2">
                  35+
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 uppercase tracking-wider">
                  Years
                </div>
              </div>
              <div className="text-center border-x border-neutral-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-1 sm:mb-2">
                  10K+
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 uppercase tracking-wider">
                  Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 uppercase tracking-wider">
                  Quality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 sm:py-24 lg:py-32 bg-white relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">
                Our Expertise
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 mb-4 sm:mb-6 tracking-tight px-4">
              Premium <span className="font-semibold">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-light px-4">
              Exceptional care for your most treasured garments
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Service Card 1 */}
            <div className="group relative bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center text-2xl">
                  👔
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Dry Cleaning
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Expert care for suits, dresses, and delicate garments with
                precision and attention to detail.
              </p>
              <div className="mt-6 inline-flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-2xl">
                  👕
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Shirt Service
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Professional laundering and pressing for dress shirts with
                crisp, clean results every time.
              </p>
              <div className="mt-6 inline-flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl">
                  ✨
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Alterations
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Expert tailoring and alterations to ensure the perfect fit for
                all your garments.
              </p>
              <div className="mt-6 inline-flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center text-2xl">
                  🧥
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Leather & Suede
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Specialized care for leather jackets, suede items, and fine
                leather goods.
              </p>
              <div className="mt-6 inline-flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group relative bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl">
                  👗
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Wedding Gowns
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Gentle cleaning and preservation for your precious wedding dress
                and special occasion wear.
              </p>
              <div className="mt-6 inline-flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group relative bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                  🏠
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Household Items
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Professional cleaning for curtains, drapes, comforters, and all
                your home textiles.
              </p>
              <div className="mt-6 inline-flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-emerald-600 font-medium text-xs sm:text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 mb-4 sm:mb-6 tracking-tight px-4">
                Heritage <span className="font-semibold">& Excellence</span>
              </h2>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-6 sm:p-10 lg:p-14">
                  <div className="mb-6">
                    <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
                      Union French Cleaners
                    </h3>
                    <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg px-4 py-2">
                      <span className="text-white font-semibold text-sm tracking-wide">
                        super clean
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                    Serving San Francisco Since 1989
                  </h4>

                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4 sm:mb-6">
                    For over three decades,{" "}
                    <strong>Union French Cleaners</strong> has been the
                    cornerstone of quality garment care in San Francisco. Our
                    unwavering commitment to excellence has earned us the trust
                    of thousands of satisfied clients.
                  </p>

                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                    We combine time-honored techniques with modern technology to
                    deliver impeccable results every time.
                  </p>
                </div>

                {/* Right Side - Features */}
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                  <h4 className="text-2xl font-semibold text-white mb-8">
                    Why Choose Us
                  </h4>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 text-neutral-200 leading-relaxed">
                        Eco-friendly cleaning processes safe for you and the
                        environment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 text-neutral-200 leading-relaxed">
                        Expert care for all fabric types and specialty items
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 text-neutral-200 leading-relaxed">
                        Fast turnaround without compromising quality
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 text-neutral-200 leading-relaxed">
                        Prime location in the heart of San Francisco
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 text-neutral-200 leading-relaxed">
                        Professional staff dedicated to your satisfaction
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-emerald-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-tight px-4">
              Visit <span className="font-semibold">Our Store</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-light px-4">
              We're located in the heart of San Francisco, ready to serve you
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Contact Info Card */}
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl font-semibold mb-8 text-white">
                  Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-white">Address</h4>
                      </div>
                      <p className="text-neutral-300 ml-13">
                        1718 Union St.
                        <br />
                        San Francisco, CA 94123
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-white">Email</h4>
                      </div>
                      <a
                        href="mailto:unionfrenchcleaners1718@gmail.com"
                        className="text-neutral-300 hover:text-emerald-400 transition ml-13 break-all"
                      >
                        unionfrenchcleaners1718@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-white">Phone</h4>
                      </div>
                      <a
                        href="tel:415-923-1212"
                        className="text-neutral-300 hover:text-emerald-400 transition text-xl ml-13"
                      >
                        415-923-1212
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-white">Website</h4>
                      </div>
                      <a
                        href="http://www.UnionFrenchCleaners.com"
                        className="text-neutral-300 hover:text-emerald-400 transition ml-13"
                      >
                        www.UnionFrenchCleaners.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl font-semibold mb-8 text-white">
                  Hours
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-medium text-white">Mon - Fri</span>
                    <span className="text-emerald-50">7AM - 7PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-medium text-white">Saturday</span>
                    <span className="text-emerald-50">8AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-medium text-white">Sunday</span>
                    <span className="text-emerald-50">Closed</span>
                  </div>
                </div>

                <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-2 text-white">
                    Same-Day Service
                  </h4>
                  <p className="text-emerald-50 text-sm">
                    Drop-off & pick-up available upon request
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 overflow-hidden">
              <div className="aspect-video bg-neutral-800 rounded-xl sm:rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3890777678847!2d-122.43735708468205!3d37.79808397975645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e8c8c8c8c9%3A0x0!2s1718%20Union%20St%2C%20San%20Francisco%2C%20CA%2094123!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Union French Cleaners</h3>
              <div className="flex items-center space-x-2 mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg px-3 py-1.5">
                  <span className="text-white font-semibold text-xs tracking-wide">
                    super clean
                  </span>
                </div>
                <span className="text-neutral-500 text-sm">
                  - Best Dry Cleaners in SF
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed max-w-md mb-6">
                San Francisco's premier dry cleaning service since 1989. Quality
                garment care with a commitment to excellence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:415-923-1212"
                  className="w-10 h-10 bg-neutral-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </a>
                <a
                  href="mailto:unionfrenchcleaners1718@gmail.com"
                  className="w-10 h-10 bg-neutral-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="text-sm">
                  1718 Union St.
                  <br />
                  San Francisco, CA 94123
                </li>
                <li>
                  <a
                    href="tel:415-923-1212"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    415-923-1212
                  </a>
                </li>
                <li className="text-sm">
                  Mon-Fri: 7AM-7PM
                  <br />
                  Sat: 8AM-6PM
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neutral-500 text-sm">
                © 1989-2025 Union French Cleaners. All rights reserved.
              </p>
              <p className="text-neutral-500 text-sm">
                Best Dry Cleaners in San Francisco
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
