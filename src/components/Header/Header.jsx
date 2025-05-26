import React, { useState } from 'react';
import { Title, Text, Grid, Image } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles, headerContent, socials } from "../../data";
import Btn from "../Button";
import style from "./Header.module.css";
import "./Header.scss";
// import "/src/styles/Nav_Header.css";


export default function Header() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [downloaded, setDownloaded] = useState(false);

  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '../../assets/resume-cv/CV.pdf';
    downloadLink.download = 'CV.pdf';
    downloadLink.click();

    // Set the state to indicate that the CV has been downloaded
    setDownloaded(true);
  };


  return (
    <section id="home"  ref={ref} className={`header-container ${styles.body}`}>
       
      <Grid gutter={50} className={`header-main`}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className="header-grid-main"
        >
          <animated.div
            style={rightColAnimation}
            className={`animated-div-grid`}
          >
            <Title className={`animated-title`} order={4}>
              {headerContent.hi}
            </Title>

            <Title className={`font-sans ${style.title}`} order={1}>
              {headerContent.name}
            </Title>

            <Text className="animated-text">
              And I'm a <span className="text-accent placeholder"></span>
            </Text>

            <Text className="animated-text-2">{headerContent.text}</Text>

            <div className="header-social">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  className=""
                  key={index}
                >
                  {social.icon}
                </a>
              ))}
            </div>

              <div><Btn
                text="Download CV"
                className='cv-btn'
                xl="xl"
                click={handleDownload}
              /></div>

            {/* Display the text if the CV has been downloaded */}
            {downloaded && (
              <Text className="text-accent mt-2">You've downloaded my CV.</Text>
            )}
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={leftColAnimation} className={`floating-container ${style.floating}`}>
            <Image
              src={headerContent.img}
              className={`header-floating-img`}
            />
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
