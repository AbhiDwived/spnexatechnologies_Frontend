import Image from "next/image";
import { footerColumns, footerContact } from "@/data/footer";
import { footerSocialLinks } from "@/data/navigation";
import { SocialIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__top">
        {footerColumns.map((column) => (
          <div className="footer__col" key={column.id}>
            <h4>{column.heading}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col footer__col--contact">
          <h4>Contact Us</h4>
          <p className="footer__contact-line">&#128231; {footerContact.email}</p>
          <p className="footer__contact-line">&#127470;&#127475; {footerContact.phone}</p>
          <p className="footer__contact-line">&#128205; {footerContact.address}</p>
          <p className="footer__follow-label">Follow Us on</p>
          <div className="footer__social">
            {footerSocialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                aria-label={social.label}
                className="social-dot social-dot--sm"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__brand">
        <Image
          src="/assets/images/logo.png"
          alt="SP Nexa Technologies"
          width={280}
          height={70}
          className="footer__logo-mark"
        />
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; 2026 SP Nexa Technologies | All rights reserved</p>
          <p>&#9888;&#65039; Scam Alert :-</p>
          <p>
            <a href="#">Term &amp; Condition.</a> <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
