import React from "react";
import { Team } from "./team.js";
const About = () => {
  return (
    <section id="about" className="bg-green-500  pt-20 pb-28 sm:py-32">
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2
          id="features-title"
          className="font-display text-center text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          أهلا بك في مؤسسة العزايزي للمحاماة
        </h2>
        <p className="mt-4 text-2xl tracking-tight text-green-100 p-6 ">
          مؤسسة العزايزي تتكون من نخبة من أفضل المحاميين <br />
          تقدم المؤسسة مجموعة واسعة من الخدمات القانونية والاستشارات المجانية
          للمؤسسات والشركات والأفراد
        </p>
      </div>
      <Team />
    </section>
  );
};

export default About;
