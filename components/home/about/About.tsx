import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Yash Kedia, and I&apos;m a Bachelor of technology
              student in Production and Industrial Engineering .
              <br />
              <br />I have experience working in both frontend and backend web
              development worlds, with a focus on frontend development. I&apos;m
              passionate about creating beautiful, responsive websites that
              provide a great user experience.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skills include HTML, CSS, JavaScript, and various frontend
              frameworks like React and Next.js. I&apos;ve also worked with
              backend technologies like Node.js, express, and MongoDB , allowing
              me to build full-stack applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy Novels. I believe that
              maintaining a healthy work-life balance is crucial for staying
              productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              learn and grow as a developer. If you&apos;re interested in
              working together or have any questions, please don&apos;t hesitate
              to get in touch! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
