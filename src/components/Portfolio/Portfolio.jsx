import { Card, Image, Text, Group, SimpleGrid } from "@mantine/core";
import classes from "./Portfolio.module.css";
import Btn from "../Button";
import { styles, PPTS, projectTypes } from "../../data";
import Heading from "../Heading";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();

  const handleNavigate = (projectType) => {
    navigate(`/projects/${projectType}`);
  };

  const all = PPTS.map((item, index) => (
    <div key={index}>
      <Card
        withBorder
        radius="md"
        className={`${classes.card} flex fex-col items-center w-full max-w-[400px] shadow-md transition duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
        mt={0}
      >
        <Card.Section className="h-[180px] w-full max-w-[400px] overflow-hidden mt-[0.15rem]">
          <Image
            src={item.src}
            className="w-full h-full transition duration-500 hover:scale-110"
          />
        </Card.Section>

        <Text className={classes.title} fw={700}>
          {item.project}
        </Text>

        <Text fz="sm" lineClamp={4}>
          {item.detail}
        </Text>

        <Group justify="center" className="w-[100vw]" key={`btn-${index}`}>
          <Btn
            text="See Projects"
            style={`bg-accent max-[768px]:w-[48%] rounded-3xl hover:border-2 hover:border-accent hover:border-solid hover:bg-transparent hover:text-black`}
            click={() => handleNavigate(projectTypes[index])}
            xl="xl"
          />
        </Group>
      </Card>
    </div>
  ));

  return (
    <section
      className={`${styles.body} bg-background dark:bg-dark-background pb-12 pt-6 grid place-items-center xl:justify-center`}
      id="projects"
    >
      <Heading name="My" name2="Porfolio" />
      <SimpleGrid mt={60} cols={{ base: 1, xs: 2, md: 3, lg: 4 }}>
        {all}
      </SimpleGrid>
    </section>
  );
}
