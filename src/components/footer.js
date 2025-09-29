"use client";
import {
  FiShoppingCart,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://1.envato.market/veganfry",
      title: "Buy Now",
      icon: <FiShoppingCart size={24} />,
    },
    {
      href: "https://dribbble.com/shreethemes",
      title: "Dribbble",
      icon: <FiDribbble size={24} />,
    },
    {
      href: "http://linkedin.com/company/shreethemes",
      title: "LinkedIn",
      icon: <FiLinkedin size={24} />,
    },
    {
      href: "https://www.facebook.com/shreethemes",
      title: "Facebook",
      icon: <FiFacebook size={24} />,
    },
    {
      href: "https://www.instagram.com/shreethemes/",
      title: "Instagram",
      icon: <FiInstagram size={24} />,
    },
    {
      href: "https://twitter.com/shreethemes",
      title: "Twitter",
      icon: <FiTwitter size={24} />,
    },
    {
      href: "mailto:support@shreethemes.in",
      title: "Email",
      icon: <FiMail size={24} />,
    },
  ];
    return ( 
 
        <footer className="relative bg-slate-950  text-gray-200">
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-16 px-0">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-6">
                <div className="text-center">
                  <h5 className="tracking-wider text-gray-100 font-medium text-lg mb-4">
                    Open Hours
                  </h5>
                  <p className="mb-2 text-gray-200/80">
                    Monday - Friday: 10:00AM - 11:00PM
                  </p>
                  <p className="mb-0 text-gray-200/80">
                    Saturday - Sunday: 9:00AM - 1:00PM
                  </p>
                </div>

                <div className="text-center">
                  <h5 className="tracking-wider text-gray-100 font-medium text-lg mb-4">
                    Reservation
                  </h5>
                  <p className="mb-2">
                    <a href="tel:+152534-468-854" className="text-gray-200/80">
                      +152 534-468-854
                    </a>
                  </p>
                  <p className="mb-0">
                    <a
                      href="mailto:contact@example.com"
                      className="text-gray-200/80"
                    >
                      contact@example.com
                    </a>
                  </p>
                </div>

                <div className="text-center">
                  <h5 className="tracking-wider text-gray-100 font-medium text-lg mb-4">
                    Address
                  </h5>
                  <p className="mb-0 text-gray-200/80">
                    C/54 Northwest Freeway, <br /> Suite 558, USA 485
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 mt-12">
                <div className="text-center">
                <a>hifooter</a>
                  <img
                    src=""
                    alt="Logo"
                    className="mx-auto block"
                  /> 
                  
                  <p className="max-w-xl mx-auto mt-6">
                    Splash your dream color Bring your home to lively Colors. We
                    make it a priority to offer flexible services to accomodate
                    your needs
                  </p>
                </div>

                <ul className="list-none text-center mt-6 space-x-2">
                  {socialLinks.map(({ href, title, icon }, idx) => (
                    <li key={idx} className="inline">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={title}
                        className="inline-flex items-center justify-center  text-base  border border-gray-800 rounded-md hover:bg-orange-500 hover:border-orange-500 transition px-3 py-2"
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 px-0 border-t border-slate-800">
        <div className="container relative mx-auto px-4 text-center">
          <div className="grid md:grid-cols-1">
            <p className="mb-0 text-gray-400 text-sm">
              © {currentYear} Veganfry. Design with{" "}
              <MdFavorite className="inline text-red-600" /> by{" "}
              <a
                href="yoyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset underline"
              >
               yoyo
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>

     );
}

export default Footer;