import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const footerLinks = [
    { footerLink: "About TP.GG", link: "/" },
    { footerLink: "로고 히스토리", link: "/" },
    { footerLink: "개인정보처리방침", link: "/" },
    { footerLink: "도움말", link: "/" },
    { footerLink: "제휴", link: "/" },
    { footerLink: "문의/피드백", link: "/" },
    { footerLink: "채용", link: "/" },
  ];
  const footerSNSs = [
    { footerSNS: "Twitter", link: "https://twitter.com" },
    { footerSNS: "Instagram", link: "https://www.instagram.com" },
    { footerSNS: "Facebook", link: "https://www.facebook.com" },
  ];
  return (
    <div className="l-footer">
      <div className="footer">
        <ul className="footer_links">
          {footerLinks.map(({ footerLink, link }, id) => (
            <li key={id} className="footer_links_item">
              <Link to={link}>{footerLink}</Link>
            </li>
          ))}
        </ul>
        <div className="footer_copyright">
          © 2020-2020 OP.GG. League of Legends Korea.
        </div>
        <ul className="footer_sns">
          {footerSNSs.map(({ footerSNS, link }, id) => (
            <li key={id} className="footer_sns_item">
              <Link to={link}>
                <i>{footerSNS}</i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
