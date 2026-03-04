import { baseUrl, blogBaseUrl, helpBaseUrl } from "@/utils";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

export default function MainFooter() {
  
  return (
    <footer className="bg-white border-t border-t-gray-lighter py-4 px-4 text-xs text-black-500">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div>
          <h4 className="font-semibold mb-2 text-sm">Explore</h4>
          <ul className="space-y-1">
            <li>
              <Link href={`${baseUrl}/events`} className="link">
                Discover
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/for-organisers`} className="link">
                Organisers
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/pricing`} className="link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href={`${blogBaseUrl}`} className="link">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link href={`${baseUrl}/about`} className="link">
                About
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/careers`} className="link">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm">Support</h4>
          <ul className="space-y-1">
            <li>
              <Link href={`${helpBaseUrl}`} className="link">
                Help
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/help/find-my-ticket`} className="link">
                Find My Ticket
              </Link>
            </li>
            <li>
              <Link href={`${helpBaseUrl}`} className="link">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm">Legal</h4>
          <ul className="space-y-1">
            <li>
              <Link href={`${baseUrl}/legals/terms-of-service`} className="link-secondary">
                Terms
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/legals/privacy-policy`} className="link-secondary">
                Privacy
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/legals/merchant-agreement`} className="link-secondary">
                Merchant Agreement
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/legals/cookies-policy`} className="link-secondary">
                Cookies
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}/legals/sms-policy`} className="link-secondary">
                SMS Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stroke my-4"></div>

      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h4 className="font-semibold mb-2 text-sm">Connect With Us</h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={`${baseUrl}/contact-support`} className="flex items-center gap-1 hover:text-primary-500">
              <MdSupportAgent className="text-lg" /> <span className="hidden sm:inline">Contact Support</span>
              <span className="sm:hidden">Support</span>
            </a>
            <div>|</div>
            <a
              href="https://x.com/tikirtin"
              className="flex items-start gap-1 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-md" /> <span className="hidden sm:inline">X</span>
            </a>
            <a
              href="https://web.facebook.com/people/Tikirtin/61581693234372/"
              className="flex items-start gap-1 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-md" /> <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/company/tikirtin"
              className="flex items-start gap-1 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-md" /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/tikirtin"
              className="flex items-start gap-1 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-md" /> <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@tikirtin"
              className="flex items-start gap-1 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-md" /> <span className="hidden sm:inline">TikTok</span>
            </a>
          </div>
        </div>

        <div className="text-gray text-xs text-left md:text-right">
          © {new Date().getFullYear()} Tikirtin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
