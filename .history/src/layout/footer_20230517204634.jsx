import React from "react";
import Avatar from "../components/avatar";
import Logo from "../assets/images/logo.jpeg";
import { GoLocation } from "react-icons/go";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { SiFacebook, SiMaildotru } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Footer = () => {
  return (
    <footer
      className="footer"
      sx={{
        backgroundColor: "highlight",
        color: "text",
      }}
    >
      <section className="footer--container overflow">
      <Fade direction="right" cascade damping={1}>
        <div className="footer--logo">
          <Avatar
            image={Logo}
            alt="Business Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <section className="footer--social">
          <h3 className="footer--social__title">
            Get in touch with us <SiMaildotru className="icon" />
          </h3>
          <div className="footer--social__content">
            <div className="footer--social__content--header">
              <h2 className="footer--social__content--header__title">
                Our Locations in Asaba, Delta State:
              </h2>
              <div className="footer--social__content--header__para">
                <p className="footer--social__content--header__text">
                  <GoLocation className="icon" />
                  <a
                    href="https://www.google.com/maps/dir/4.8174104,7.0047966/first+empire+asaba/@5.5137315,6.4494962,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1043f3eaf1de4363:0x5ddbcf4630d7afce!2m2!1d6.688877!2d6.2105744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer--social__content--header__text--link"
                  >
                    17 DBS Rd, Opposite first empire
                  </a>
                </p>
                <p className="footer--social__content--header__text">
                  <GoLocation className="icon" />
                  <a
                    href="https://www.google.com/maps/dir/4.8174104,7.0047966/Machala+Laundry+Service,+Providence+Plaza+Akpu+Junction,+Okpanam+Road,+Local,+Government+Area+320242,+Asaba,+Delta/@5.5209529,6.2899722,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1043f38f43a5554d:0x44afc26f586548e1!2m2!1d6.6778642!2d6.2250205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer--social__content--header__text--link"
                  >
                    Providence Plaza Akpu Junction Okpanam Road
                  </a>
                </p>
              </div>
            </div>
            <div className="footer--social__content--item">
              <a
                href="tel: +23409034789024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GiRotaryPhone className="footer--social__content--item--icon" />
              </a>
              <a
                href="https://web.facebook.com/groups/5384168368329844/?ref=share&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="footer--social__content--item--icon" />
              </a>
              <a
                href="mailto: Easyboi@myself.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail className="footer--social__content--item--icon" />
              </a>
              <a
                href="tel: +2347061516180"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImWhatsapp className="footer--social__content--item--icon" />
              </a>
            </div>
          </div>
        </section>
      </Fade>
      </section>
      <p className="footer--copyright">
        &copy; {new Date().getFullYear()} <span>MachalaLaundry</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
