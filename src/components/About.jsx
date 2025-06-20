import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from './AnimatedTitle.jsx'
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        },
        });

        clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        });
    });
  return (
    <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-2 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">
                Welcome to Pan African AI
            </h2>

            <AnimatedTitle
            title="Empowering<br/><b>Africa</b>Through<b>AI!</b>"
            containerClass="mt-8 !text-black text-center"
            />

            {/* <div className='mt-5 text-center text-3xl uppercase leading-[0.8] md:text-[4rem]'>
                by the <b>Ethiopian</b> Artificial <br/> Intelligence Institute <b>(EAII)</b>
            </div> */}
            <div className=" absolute bottom-[-110dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem] ">
                <p> From October 8-9, 2024</p>
                <p className="text-gray-500">
                   Attending PanAfriCon AI 2024 provides an excellent opportunity to connect with other professionals in the field, gain new insights, and showcase your own work
                </p>
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mb mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
                <img
                    src="img/about.webp"
                    alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default About