import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Menu() {
  return (
    <Navbar rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PlanetV Wesbite</span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink as={Link} href="/">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/projects">
          Projects
        </NavbarLink>
        <NavbarLink as={Link} href="/blogs">
          Blogs
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

