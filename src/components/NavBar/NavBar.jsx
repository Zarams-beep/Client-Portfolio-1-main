import React from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Text } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import classes from "./NavBar.module.css";
import Btn from "../Button";
import { styles } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import "/src/styles/Nav_Header.css";

const navLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#projects" },
];

export default function NavBar({ colorScheme, toggleColorScheme }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [activeSection, setActiveSection] = useState("");
  const isLandingPage = window.location.pathname === "/"; // Adjust the pathname as needed'
  const navigate = useNavigate();

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      closeDrawer();
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // Adjust for header height
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  

  return (
    <Box className="nav-bar-main">
      <header
        className={`nav-bar-container ${classes.header} ${styles.body}`}
      >
        <Group h="100%" className="nav-logo">
          <Text className="">SuccessStack</Text>
        </Group>

        <Group h="100%" gap={0} className="nav-link ">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              className={`${classes.link} ${
                activeSection === link.href.substring(1) ? "active-text" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (!isLandingPage) {
                  navigate("/");
                  setTimeout(() => {
                    smoothScroll(link.href.substring(1));
                  }, 300)
                } else {
                  smoothScroll(link.href.substring(1));
                }
              }}
              
            >
              {link.text}
            </a>
          ))}
        </Group>

<Group className="nav-third-container">

          <a
          href="#hire-me"
          className="btn-hire"
          onClick={(e) => {
            e.preventDefault();
            if (!isLandingPage) {
              navigate("/");
              setTimeout(() => {
                smoothScroll("hire-me");
              }, 300)
            } else {
              smoothScroll("hire-me");
            }
          }}
          
        >
          <Btn
            text="Hire me"
            className="btn-hire-sub"
          />
        </a>

    <button className="toggle-btn" onClick={toggleColorScheme}>
    {colorScheme === 'dark' ? <FaMoon /> : <MdOutlineWbSunny/>}
  </button>
</Group>
        

       <div className="burger-container">
         <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          size={23}
          color="white"
        />
        <button className="toggle-btn" onClick={toggleColorScheme}>
    {colorScheme === 'dark' ? <FaMoon /> : <MdOutlineWbSunny/>}
  </button>
       </div>
      </header>

      <Drawer
  opened={drawerOpened}
  onClose={closeDrawer}
  size="100%"
  hiddenFrom="sm"
  zIndex={1000000}
  classNames={{
    root: "font-sans", // Applies to root element
    content: "drawer-container bg-background dark:bg-dark-background p-0 w-full overflow-x-hidden", // Main content area
    header: "bg-background dark:bg-dark-background shadow-lg", // Header area
    body: "p-0 m-0", // Body/content area
  }}

>
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="bg-red block mx-auto px-4"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              className={`${classes.link} ${
                activeSection === link.href.substring(1) ? "active-text" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (!isLandingPage) {
                  navigate("/");
                  setTimeout(() => {
                    smoothScroll(link.href.substring(1));
                  }, 300)
                } else {
                  smoothScroll(link.href.substring(1));
                }
              }}
              
            >
              {link.text}
            </a>
          ))}

          <a
            href="#hire-me"
            className=""
            onClick={(e) => {
              e.preventDefault();
              if (!isLandingPage) {
                navigate("/");
                setTimeout(() => {
                  smoothScroll("hire-me");
                }, 300)
              } else {
                smoothScroll("hire-me");
              }
            }}
            
          >
            <Btn
              text="Hire me"
              style={`bg-white text-black w-[92vw] max-[360px]:w-[88vw] rounded-3xl hover:border hover:border-solid hover:border-accent py-1 px-3 hover:bg-accent hover:text-white mt-8 cursor-pointer`}
            />
          </a>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
