import DisplayProjects from "@/components/DisplayProjects";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function ProjectsPage(): JSX.Element {
  return (
    <>
      <Menu />

      <DisplayProjects />

      <Footer />
    </>
  );
}
