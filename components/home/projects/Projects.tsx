import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "No hard feeling feedback",
    imgSrc: "/project-imgs/test3.png",
    code: "https://github.com/spiderkd/No_hard_felling_feedback",
    projectLink: "https://www.nohardfellingfeedback.xyz/",
    tech: ["React", "Nextjs", "Tailwind", "Google generative ai"],
    description:
      "A dynamic feedback platform enabling anonymous message sharing with AI-generated suggestions for engaging interactions.",
    modalContent: (
      <>
        <p>
          Ever wondered what people really think but are too shy to say? Our
          anonymous feedback platform bridges the gap by allowing users to share
          their thoughts freely. Whether it's constructive criticism, heartfelt
          messages, or anonymous compliments, this space is all about open
          expression.With the added power of AI, users can get generative
          message suggestions, making feedback even more engaging and easy to
          start. Perfect for anyone seeking honest feedback without the fear of
          judgment
        </p>
        <p>
          The tech stack is based on Nextjs with the custom tailwind components,
          It uses google generative ai for the message suggestions.
        </p>
      </>
    ),
  },
  {
    title: "Yoom",
    imgSrc: "/project-imgs/zoom.png",
    code: "https://github.com/spiderkd/video_conference_app",

    projectLink:
      "https://video-conference-zoom-clone.vercel.app/sign-in?redirect_url=https%3A%2F%2Fvideo-conference-zoom-clone.vercel.app%2F",
    tech: ["Nextjs", "Tailwind", "Clerk Auth", "Stream.io"],
    description:
      "A real-time anonymous messaging platform using Socket.IO for instant feedback and conversations, enhanced with AI-generated message suggestions.",
    modalContent: (
      <>
        <p>
          Yoom is an innovative platform designed for anonymous, real-time
          conversations and feedback. With Yoom, users can share their thoughts
          without barriers, making it ideal for gathering honest opinions or
          sharing secrets.
        </p>
        <p>
          Leveraging Stream.io for seamless real-time messaging and enhanced
          with AI-generated suggestions, Yoom offers a dynamic, interactive
          experience where users can exchange messages instantly and
          anonymously.
        </p>
      </>
    ),
  },
  {
    title: "Video Blog website Backend",
    imgSrc: "/project-imgs/youtube.webp",
    code: "https://github.com/spiderkd/youtube-backend",
    projectLink: "",
    tech: ["React", "Express", "MongoDB"],
    description:
      "A scalable and efficient backend for a YouTube-like platform, offering video uploads, streaming, user authentication, and real-time features.",
    modalContent: (
      <>
        <p>
          This backend code powers a YouTube-like platform with comprehensive
          features such as user authentication, video uploads, and adaptive
          streaming. It includes essential video-sharing functionalities like
          managing likes, comments, subscriptions, and playlists. Users can
          easily interact with videos, subscribe to channels, and create
          personal playlists for a personalized experience.
        </p>
        <p>
          The tech stack used is Javascript, express, MongoDB, Cloudinary, and
          JWT for authentication.
        </p>
      </>
    ),
  },
  {
    title: "Blogtube",
    imgSrc: "/project-imgs/blog.png",
    code: "https://github.com/spiderkd/BlogTube",

    projectLink: "#",
    tech: ["React", "Appwrite", "Tailwind"],
    description:
      "A minimalist blog platform with rich text editing, user authentication, and CRUD functionality powered by React, Appwrite, and Tailwind CSS.",
    modalContent: (
      <>
        <p>
          Dive into a seamless blogging experience with our minimalist platform,
          designed for those who love to share ideas effortlessly. Built using
          React and powered by Appwrite, this blog app features a clean and
          intuitive interface, making it easy to create, edit, and manage your
          content.
        </p>
        <p>
          The tech stack is based on Reactjs with the custom Styled components,
          connected to a Appwrite backend, with images in cloudinary .
        </p>
      </>
    ),
  },
  {
    title: "Real Time ChessGame",
    imgSrc: "/project-imgs/chess.png",
    code: "https://github.com/spiderkd/chessGame",
    projectLink: "https://intelligent-truth-production.up.railway.app/",
    tech: ["ejs", "Socket.io", "Chessjs"],
    description:
      "A real-time multiplayer chess game built with Socket.IO, featuring smooth move synchronization, timer management, and spectator mode.",
    modalContent: (
      <>
        <p>
          Experience the classic game of chess for the digital age with
          real-time multiplayer features. This interactive chess platform allows
          players to compete seamlessly, with moves synchronized in real-time
          using Socket.IO.
        </p>
        <p>
          Simply enter the game lobby. The match begins automatically when two
          players join the same room. The game also includes a timer for each
          player, ensuring a fair and competitive experience. Spectators can
          also join the game to watch the action unfold in real-time.
        </p>
      </>
    ),
  },
];
