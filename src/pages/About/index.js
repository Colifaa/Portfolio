import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
         
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            Sobre <span className="text-primary">Mi</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="Jorge.png"
              alt="Mathez Jorge"
              className="p-22 w-70 h-70 transform translate-y-[-12%]"
              title="Mathez Jorge"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Mathez Jorge</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "Blockchain-Developer",
                  3000,
                  "Full-stack Developer",
                  3000,
            
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            Soy un Desarrollador Web Full Stack con experiencia en distintas tecnologías de desarrollo web como HTML, CSS, Javascript, React, Redux, Node.js, SQL React.js, Next js, MongoDB, Express.js.💻

Además de mi experiencia en desarrollo web,
 también tengo habilidades adicionales que me hacen un candidato aún más valioso para cualquier proyecto, 
 como la música y el trading de criptomonedas. 📈📊🎸🎧

También he trabajado como ayudante de un ingeniero agrimensor, 
lo que me ha permitido adquirir habilidades de diseño y trabajar en proyectos más complejos y multidisciplinarios.🏧📚

Siempre estoy buscando formas de ampliar mis habilidades y 
conocimientos en diferentes áreas y estoy seguro de que puedo aportar una perspectiva única 
y valiosa a cualquier proyecto en el que esté involucrado.
            
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            "Mi pasión por abordar desafíos complejos y concebir soluciones
             innovadoras me motiva constantemente a mantenerme al tanto de las últimas tendencias y
              avances en tecnología e industria. La búsqueda incansable de soluciones me impulsa a estar siempre actualizado, 
            listo para aplicar conocimientos frescos y perspectivas innovadoras en cada proyecto que emprendo.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Mathez Jorge
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+54 9 2604224940
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
               Jorgemathez14@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>San Rafael Mdza, Argentina
              </h2>
              <a
                  href="https://drive.google.com/file/d/15X25IURJL1UG6VcDj7gwlgPI7wGrQmmX/view?usp=drive_link"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
