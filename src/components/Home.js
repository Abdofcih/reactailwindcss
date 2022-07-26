import React from "react";
import Nav from "./Nav";
import person from "../assets/home.png";
import Typical from "react-typical";
const Home = () => {
  return (
    <section id="home" className=" relative h-1/2 lg:h-screen bg-gradient-to-t from-green-500 dark:from-slate-800 dark:to-slate-900 relative  ">
      <Nav />
      {/*Home page content*/}
      {/*image*/}
      <img
        className="z-10 absolute bottom-4 lg:left-36 left-0 object-cover w-44 h-52 lg:w-auto lg:h-[90%]  "
        src={person}
        alt="person"
      />
      {/*animated text*/}
      <div className="h-[80%]  flex flex-col gap-1 lg:gap-4 justify-center px-10  lg:pr-36">
        <p className="font-bold text-3xl md:text-4xl  lg:text-6xl pt-10 lg:pt-0">
          العزايزي للمحاماة
        </p>
        <p className="font-bold text-2xl">
          <Typical
            steps={[
              "تأسيس شركات 😃",
              1500,
              "قانون الأسرة 💡",
              1500,
              " القانون الجنائي 🚀",
              2000
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </p>

        <a
          href="#contact"
          className="bg-white text-green-900 text-xl p-2 lg:py-3 lg:px-5 w-fit rounded-md hover:rounded-lg hover:translate-y-1 hover:shadow-md"
        >
          تواصل معنا
        </a>
      </div>
      {/*texts*/}
    </section>
  );
};

export default Home;
