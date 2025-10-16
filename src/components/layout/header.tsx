"use client";
import { Container } from "@/components/ui/container";
import { useScrollNav } from "@/hooks/use-scroll-nav";

const Header = () => {
  const { isScrolled } = useScrollNav();
  <header className="fixed">
    <nav>
      <Container></Container>
    </nav>
  </header>;
};

export { Header };
