// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedIn.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <h1 className="text-center xl:text-start text-textSecondary text-[23px]">
              Education
            </h1>
            <br/>
            <h3 className="text-textSecondary text-[18px]">
              Bachelor of Science
              <br/>
              Rajshahi University of Engineering & Technology (RUET)
              <br/>
              Department of Electrical & Computer Engineering
              <br/>
              Rajshahi, Bangladesh
              <br/>
              CGPA : 3.30/4.00
              <br/>
              <br/>
              Higher Secondary Certificate
              <br/>
              BPATC School & College
              <br/>
              Dhaka, Bangladesh
              <br/>
              Science
              <br/>
              GPA : 4.83/5.00
            </h3>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" link="https://www.facebook.com/mdrafiimam.96" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" link="https://instagram.com/rafiimam96?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"/>
            <SocialMediaIcon imgSrc={gitHub} title="GitHub" link="https://github.com/rafiimam"/>
            <SocialMediaIcon imgSrc={linkedIn} title="LinkedIn" link="https://www.linkedin.com/in/rafiimam49/" />
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;