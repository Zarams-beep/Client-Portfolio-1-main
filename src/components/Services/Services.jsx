import { Card, Image, Text, Group, SimpleGrid } from "@mantine/core";
import classes from "./Services.module.css";
import { styles, servicesData } from "../../data";
import Heading from "../Heading";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "/src/styles/Services.css";
export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(servicesData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const all = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <Card
        withBorder
        radius="md"
        className={`${classes.card} card-service`}
        mt={0}
      >
        {servicesData[index].icon}
        <Text className={classes.title} fw={700}>
          {servicesData[index].title}
        </Text>

        <Text fz="sm" className="text-center">
          {servicesData[index].text}
        </Text>
      </Card>
    </animated.div>
  ));

  return (
    <section
      className={`${styles.body} services-container `}
      ref={ref}
      id="services"
    >
      <Heading name="My" name2="Services" />
      <SimpleGrid mt={60} cols={{ base: 1, xs: 2, md: 3 }}>
        {all}
      </SimpleGrid>
    </section>
  );
}
