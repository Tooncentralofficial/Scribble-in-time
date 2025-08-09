import { FacebookIcon, InstagramIcon, LinkedinIcon, Xicon } from "@/assets";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Hero Section with Background Image - Positioned to overlap navbar */}
      <div className="relative -mb-[250px] sm:-mb-[315px] lg:-mb-[430px] -mt-[320px] sm:-mt-[385px] lg:-mt-[500px] z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="bg-cover bg-center bg-no-repeat h-[350px] sm:h-[450px] lg:h-[616px] rounded-lg flex items-center"
            style={{
              backgroundImage: "url('/footer.jpg')",
            }}
          >
            <div className="px-6 sm:px-8 lg:px-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  Preserve Your
                  <br />
                  Legacy Today
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-100 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                  Whether it&apos;s your legacy, a loved one&apos;s journey, or
                  a cultural treasure, we&apos;ll help you preserve it for
                  generations to come.
                </p>
                <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-2 lg:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors">
                  See Packages
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links Section - Dark Background */}
        <div className="bg-gray-900 pt-[120px] sm:pt-[140px] lg:pt-[190px]">
          <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
            {/* Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
              {/* Logo and Contact */}
              <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
                <div className="mb-6">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white mb-4"
                    style={{ fontFamily: "serif", fontStyle: "italic" }}
                  >
                    A Scribble in Time
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 break-words">
                    Email: contact.ascribbleintime@gmail.com
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Preserving African stories, one voice at a time.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-3 justify-center sm:justify-start">
                  <Link
                    href="https://x.com/AScribbleinTime?t=kZi3gNR6sAeV39f5q83GUQ&s=09"
                    className="w-10 h-10 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  >
                    <span className="text-white text-sm sm:text-xs">
                      <Xicon width={16} height={16} />
                    </span>
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/16pe7S6cb1/"
                    className="w-10 h-10 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <span className="text-white text-sm sm:text-xs">
                      <FacebookIcon width={16} height={16} />
                    </span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/a_scribbleintime?utm_source=qr&igsh=dmNwcDRvZHU3aTZs"
                    className="w-10 h-10 sm:w-8 sm:h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                  >
                    <span className="text-white text-sm sm:text-xs">
                      <InstagramIcon width={16} height={16} />
                    </span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/a-scribble-in-time/"
                    className="w-10 h-10 sm:w-8 sm:h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <span className="text-white text-sm sm:text-xs">
                      <LinkedinIcon width={16} height={16} />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Company Links */}
              <div className="text-center sm:text-left">
                <h4 className="text-white font-semibold mb-4 text-base">
                  Company
                </h4>
                <ul className="space-y-3 sm:space-y-2 text-gray-300 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Portfolios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Writers
                    </a>
                  </li>
                </ul>
              </div>

              {/* About Links */}
              <div className="text-center sm:text-left">
                <h4 className="text-white font-semibold mb-4 text-base">
                  About
                </h4>
                <ul className="space-y-3 sm:space-y-2 text-gray-300 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Packages
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-it-works"
                      className="hover:text-white transition-colors block py-1"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="text-center sm:text-left">
                <h4 className="text-white font-semibold mb-4 text-base">
                  Resources
                </h4>
                <ul className="space-y-3 sm:space-y-2 text-gray-300 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors block py-1"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <Link
                      href="https://ascribbleintime.substack.com"
                      className="hover:text-white transition-colors block py-1"
                    >
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter Subscription */}
              <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
                <h4 className="text-white font-semibold mb-4 text-base">
                  Subscribe to our Newsletter
                </h4>
                <div className="flex flex-col space-y-3 max-w-xs mx-auto sm:mx-0">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="px-3 py-3 sm:py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400 w-full"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 sm:py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors w-full">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-600 pt-6 sm:pt-8 mt-6 sm:mt-8">
              <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed px-4">
                © Copyright 2025. All Rights Reserved by A Scribble in Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}