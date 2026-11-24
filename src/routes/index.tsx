import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About, Audiences, Guarantees, Process, Services } from "@/components/site/sections";
import { RequestForm } from "@/components/site/request-form";
import { Contacts, Footer, Privacy } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ЛАДОМ — одна компания для разных задач" },
      {
        name: "description",
        content:
          "ЛАДОМ помогает частным клиентам и бизнесу решать разные задачи через одного партнёра: заявка, уточнение, специалист и результат по согласованным условиям.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:shadow-card"
      >
        К содержанию
      </a>
      <Header />
      <main id="content">
        <Hero />
        <Services />
        <About />
        <Process />
        <Audiences />
        <Guarantees />
        <RequestForm />
        <Contacts />
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
