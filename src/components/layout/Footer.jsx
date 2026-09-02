import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
} from "react-icons/hi";


const socialLinks = [
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "#",
    label: "X",
  },
];


const quickLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "How it Works",
    href: "#how-it-works",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "FAQs",
    href: "#faqs",
  },
];


const Footer = () => {
  return (
    <footer className="scheduler-footer">

      <div className="scheduler-footer__inner">

        {/* =====================================================
            TOP CONTENT
        ====================================================== */}

        <div className="scheduler-footer__top">


          {/* ===================================================
              LEFT ABOUT
          ==================================================== */}

          <div className="scheduler-footer__about">

            <p className="scheduler-footer__description">
              Aeon Miles is an intelligent
              <br />
              back-office management
              <br />
              platform designed exclusively
              <br />
              for Amazon DSPs, streamlining
              <br />
              operations and driving smarter,
              <br />
              more profitable growth.
            </p>


            {/* SOCIAL ICONS */}

            <div className="scheduler-footer__socials">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                  >
                    <Icon />
                  </a>
                );
              })}

            </div>

          </div>



          {/* ===================================================
              CONTACT DETAILS
          ==================================================== */}

          <div className="scheduler-footer__contact">


            {/* ADDRESS */}

            <div className="scheduler-footer__contact-row">

              <div className="scheduler-footer__contact-icon">
                <HiOutlineLocationMarker />
              </div>

              <p>
                800 N King Street, Suite 304
                <br />
                #3725, Wilmington, Delaware 19801
              </p>

            </div>



            {/* EMAIL */}

            <div className="scheduler-footer__contact-row">

              <div className="scheduler-footer__contact-icon">
                <HiOutlineMail />
              </div>

              <a href="mailto:info@aeonsynergies.com">
                info@aeonsynergies.com
              </a>

            </div>



            {/* PHONE */}

            <div className="scheduler-footer__contact-row">

              <div className="scheduler-footer__contact-icon">
                <HiOutlinePhone />
              </div>

              <a href="tel:+13024989899">
                +1 302-498-9899
              </a>

            </div>



            {/* WEBSITE */}

            <div className="scheduler-footer__contact-row">

              <div className="scheduler-footer__contact-icon">
                <HiOutlineGlobeAlt />
              </div>

              <a
                href="https://www.aeonsynergies.com"
                target="_blank"
                rel="noreferrer"
              >
                www.aeonsynergies.com
              </a>

            </div>

          </div>



          {/* ===================================================
              QUICK LINKS
          ==================================================== */}

          <nav className="scheduler-footer__nav">

            {quickLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
              >
                {item.name}
              </a>
            ))}

          </nav>



          {/* ===================================================
              LOGO
          ==================================================== */}

          <div className="scheduler-footer__brand">

            <img
              src="/icons/aeon-scheduler-1.svg"
              alt="Aeon Scheduler"
            />

          </div>

        </div>



        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="scheduler-footer__divider" />



        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="scheduler-footer__bottom">

          <p>
            © 2016 Aeon Scheduler. All rights reserved.
          </p>


          <div className="scheduler-footer__legal">

            <a href="#">
              Privacy Policy
            </a>

            <span />

            <a href="#">
              Terms and Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};


export default Footer;