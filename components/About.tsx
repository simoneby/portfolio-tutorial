import React from "react";
import { motion } from "framer-motion";

// https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800

function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Simone Bystadhagen is a 26-year-old government politician with an
          unfortunate habit of bumping off the people around her. She is Hard
          working and Creative, but can also be very lazy and a bit too honest.
          Her first victim was her late boyfriend, Benjamin Jon Martin, who she
          killed because he looked at her funny. She has since killed two more
          people: her friend Astrid, and her friend Ida. She is Norwegian. She
          has a post-graduate degree in philosophy, politics and economics. She
          has a severe phobia of sausages Physically, Simone is in pretty good
          shape. She is average-height with bronze skin, blonde hair and green
          eyes. She has a mole on her left cheek.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
