import Head from "next/head";

//helper fn
import { fetchPageInfo,fetchExperience,fetchProjects,fetchSkills,fetchSocials } from "../utilis/helper";

//components
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({
  socials,
  pageInfo,
  experiences,
  skills,
  projects,
}) {

  return (
    <>
      <Head>
        <title>Portfolio v1</title>
        <meta name="description" content="Micah's Portfolio version 1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

     
      <main>
        
        <>
//           <Header socials={socials} />
          <main className="snap-y snap-mandatory overflow-hidden z-0 scrollbar scrollbar-track-400/20">
            <section id="hero" className="snap-start">
              <Hero pageInfo={pageInfo} />
            </section>

            <section id="about" className="snap-center">
              <About pageInfo={pageInfo} />
            </section>

            <section id="experience" className="snap-center">
              <Experiences experiences={experiences} />
            </section>

            <section id="skills" className="snap-start">
              <Skills skills={skills} />
            </section>

            <section id="projects" className="snap-start">
              <Projects projects={projects} />
            </section>

            <div className="h-screen mb-10">
              <section id="contact" className="snap-start">
                <Contact />
              </section>
            </div>

            <footer className="h-[30vh] w-full cursor-pointer">
              <div className="flex justify-center items-center">
                {/* <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            /> */}
              </div>
            </footer>
          </main>
        </>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const socials = await fetchSocials();
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperience();
  const skills = await fetchSkills();
  const projects = await fetchProjects();

  return {
    props: {
      socials,
      pageInfo,
      experiences,
      skills,
      projects,
    },
  };
};
