import React from 'react'
import { useEffect, useState, useLayoutEffect } from "react";
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const clenove = [
  { name: 'O NÁS', title: 'Kapela Kvarton vznikala postupně už od roku 2021, první koncert byl v dubnu 2022. Působí převážně v Brně a okolí, nejčastěji ji uslyšíte hrát v brněnských hudebních klubech, ale není výjimkou také účast na dalších doprovodných programech např. v rámci festivalů nebo jiných akcí. Kapela se skládá, jak už název vypovídá, ze čtyř elementů, a to konkrétně klavír, bicí, baskytara a zpěv. Hrají výhradně autorskou tvorbu, která kombinuje prvky různých žánrů, především pop-folku a jazzu.', current: true },
  { name: 'IVČA', title: 'Dříve vystupovala především jako klavíristka a skladatelka, sólovému zpěvu se více začala věnovat později. Svoji první kapelu, kde prezentovala svou tvorbu, založila už ve svých 14 letech, hudební zkušenosti ale získávala odmalička především v brněnských sborech a v příležitostných projektech. Je autorkou většiny písní kapely Kvarton. Má velký vztah k poezii a svými texty se snaží vyjádřit hlubší myšlenky.', current: false },
  { name: 'HONZA', title: 'Klavíru se věnuje už od 6 let, úspěšně absolvoval dva cykly na základní umělecké škole. Skládá skladby pro klavír, někdy i v kombinaci s dalšími nástroji. S jeho skladbami jste se v minulosti mohli setkat na několika koncertech, jedna ze skladeb byla otextovaná a často zazní na koncertě Kvartonu. Své zkušenosti získal v různých hudebních projektech, v současnosti je aktivní také v jedné další kapele.', current: false },
  { name: 'MARTIN', title: 'Na bicí se začal učit ve svých 12 letech a o tři roky později hrál ve své první kapele. Od roku 2020 je členem zábavové kapely Veřejná zkouška, v roce 2022 se stal bubeníkem v kapelách Kvarton a Dandys Company. Od té doby vystřídal pár big bandů a několik dalších kšeftů. Rád se věnuje nahrávání a produkci hudby, což dělá i v rámci svého studia. Kromě bicích zvládá základy hry na kytaru a na klavír.', current: false },
  { name: 'LUBOŠ', title: 'Odmalička se věnuje hudbě, velmi dobře ovládá více hudebních nástrojů (baskytara, kytara, klavír, bicí). Jako baskytarista vystupoval například s big bandem Konzervatoře Brno. Sám také komponuje a má vztah jak k populární, tak ke klasické hudbě. Zabývá se zvučením, rok strávil ve zvukařské firmě Kletch. Svůj všeobecný hudební rozhled zužitkoval již v mnoha autorských i jiných hudebních uskupeních, kde získal cenné zkušenosti.', current: false },
]


const Home = () => {


  const [selectedMember, setSelectedMember] = useState(clenove[0]);
  useEffect(() => {
    gsap.fromTo(
      "#hlavni",
      {
        // Starting scale
        scale: 1,  // Starting letter-spacing
      },
      {
        // Scale up the text
        scale: 2, // Gradually increase letter-spacing
        scrollTrigger: {
          trigger: "#hlavni",
          start: "top+=80vh",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out", // A more dynamic ease
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#podnadpis, #hlavni",

      {
        // Starting scale
        opacity: 1,  // Starting letter-spacing
      },
      {
        // Scale up the text
        opacity: 0, // Gradually increase letter-spacing
        scrollTrigger: {
          trigger: "#hlavni",
          start: "top+=70vh",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out", // A more dynamic ease
        },
      }
    );
  }, []);

  useEffect(() => {
    // Animate name from left on scroll
    gsap.fromTo(
      "#memberName",
      { opacity: 0, x: -200 },  // Start with the text off the left side
      {
        opacity: 1, x: 0, duration: 1, scrollTrigger: {
          trigger: "#memberName",
          start: "top center",
          end: "top 60% ",
          scrub: 1
        }
      }
    );

    // Animate title from left on scroll
    gsap.fromTo(
      "#memberTitle",
      { opacity: 0, x: -200 },  // Start with the text off the left side
      {
        opacity: 1, x: 0, duration: 1, scrollTrigger: {
          trigger: "#memberTitle",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );
  }, []);

  useEffect(() => {
    // Animate name from left on scroll
    gsap.fromTo(
      "#img",
      { opacity: 0, gap: 150 },  // Start with the text off the left side
      {
        opacity: 1, gap: 30, duration: 1, scrollTrigger: {
          trigger: "#memberName",
          start: "top center",
          end: "top 60% ",
          scrub: 1
        }
      }
    );

  }, []);

  useEffect(() => {
    // Re-trigger animation when the selected member changes
    gsap.fromTo(
      "#memberName",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      "#memberTitle",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, delay: 0.1, ease: "power2.out" }
    );
    gsap.fromTo(
      "#buttono",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power2.out" }
    );
  }, [selectedMember]);


  useEffect(() => {
    gsap.fromTo(
      "#infokontakt",
      { opacity: 0, x: -200 },
      {
        opacity: 1, x: 0, duration: 1, scrollTrigger: {
          trigger: "#kontakt",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(
      "#fotokontakt",
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1, scale: 1, duration: 1, scrollTrigger: {
          trigger: "#kontakt",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );
    gsap.fromTo(
      "#obrazekjedna",
      { opacity: 0, x: 300 },
      {
        opacity: 1, x: 0, duration: 1, scrollTrigger: {
          trigger: "#obrazekjedna",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );
    gsap.fromTo(
      "#obrazekdva",
      { opacity: 0, x: -300 },
      {
        opacity: 1, x: 0, duration: 1, scrollTrigger: {
          trigger: "#obrazekjedna",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );
    gsap.fromTo(
      "#kdebudeme",
      { opacity: 0 },
      {
        opacity: 1, duration: 1, scrollTrigger: {
          trigger: "#obrazekjedna",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );
    gsap.fromTo(
      "#nahravky",
      { opacity: 0 },
      {
        opacity: 1, duration: 1, scrollTrigger: {
          trigger: "#obrazekjedna",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );
  }, []);









  return (
    <main className="scroll-smooth overflow-y-scroll snap-y snap-mandatory bg-black min-h-screen">
      <section id="home" className="snap-start h-screen relative">
        <Navbar />
        <div className="absolute inset-0 bg-[url('/introfoto.png')] bg-cover bg-center blur-md z-0"></div>
        <div className="h-[92vh] md:bg-[url('/introfoto3-min.png')] xl:bg-[url('/introfoto.jpg')]  bg-[url('/introfoto2-min.png')] bg-contain xl:bg-cover bg-center flex flex-col justify-center items-center relative z-10 bg-no-repeat">
          {/*  
          <h1 id="hlavni" className="text-center text-white text-5xl sm:text-7xl md:text-9xl pt-[15vh] font-[Montserrat] font-light">
            KVARTON
          </h1>
          */}
          <img id="hlavni" className='w-[50vw]' src="logo.svg" alt="logo" />
          <p id="podnadpis" className="text-center text-white text-lg sm:text-xl md:text-2xl">pop-folk/jazz</p>
        </div>
      </section>
      {/* AKCE A NAHRÁVKY */}
      <div id="nahravky" className="px-4 sm:px-8 md:px-[120px] h-screen bg-black snap-start flex flex-col justify-around items-center">
        <div className="flex flex-col xl:flex-row items-center w-full space-y-6 xl:space-y-0 xl:justify-between">
          <h2 id='kdebudeme' className="text-white font-[Montserrat] text-2xl sm:text-3xl xl:text-4xl text-center xl:text-left">
            KDE NÁS USLYŠÍTE
          </h2>
          <a id="obrazekjedna" href="https://www.facebook.com/kapelakvarton/events" target="_blank" rel="noopener noreferrer" className="group relative w-full xl:w-[50vw]">
            <div className="h-[30vh] w-full bg-[url('/koncertt.png')] bg-cover bg-center rounded-lg shadow-lg transition-all duration-300 group-hover:opacity-50 group-hover:saturate-100 saturate-0 opacity-80 border-2" style={{ borderColor: "#968B72" }}></div>
            <p className="absolute  inset-0 flex items-center justify-center text-white text-lg sm:text-xl xl:text-2xl xl:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Podívej se na nadcházející akce!
            </p>
          </a>
        </div>

        <div className="flex flex-col-reverse xl:flex-row items-center w-full space-y-6 xl:space-y-0 xl:justify-between">
          <a id="obrazekdva" href="https://www.youtube.com/@kapelakvarton" target="_blank" rel="noopener noreferrer" className="group relative w-full xl:w-[50vw]">
            <div className="h-[30vh] w-full bg-[url('/kytara.jpg')] bg-cover bg-center rounded-lg shadow-lg transition-all duration-300 group-hover:opacity-50 group-hover:saturate-100 saturate-0 opacity-80 border-2" style={{ borderColor: "#968B72" }}></div>
            <p className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl xl:text-2xl xl:opacity-0 transition-transform duration-300 group-hover:opacity-100">
              Poslechni si nás na YouTube!
            </p>
          </a>
          <h3 id='nahravky' className="text-white text-2xl sm:text-3xl xl:text-4xl text-center xl:text-right font-[Montserrat]">
            A NEBO NÁS CHCETE <br />
            SLYŠET HNED?
          </h3>
        </div>
      </div>




      {/* O KAPELE */}
      <div id='kapela' className='px-4 sm:px-8 xl:px-[120px] h-screen bg-black snap-start flex flex-col xl:flex-row items-center justify-between p-4 sm:p-6 xl:p-10'>
        <div className="w-full xl:w-1/2 text-center xl:text-left mb-6 xl:mb-0">
          <h1 id="memberName" className='text-white font-[Montserrat] text-2xl sm:text-3xl xl:text-4xl mb-5'>{selectedMember.name}</h1>
          <p id="memberTitle" className='text-white leading-loose xl:leading-normal lg:leading-loose text-sm sm:text-base xl:text-base mb-3 xl:pr-[7vh]'>{selectedMember.title}</p>
          <Button
            onClick={() => setSelectedMember(clenove[0])}
            className={selectedMember === clenove[0] ? "hidden" : "hidden lg:block"}
            text="O KAPELE"
          />
        </div>
        <div id="img" className='grid grid-cols-2 gap-6 xl:gap-4 lg:gap-7 w-full xl:w-1/2 lg:m-20'>
          <img onClick={() => setSelectedMember(clenove[1])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer transition-transform duration-200 w-full" style={{ borderColor: "#968B72" }} src="ivcaa.png" alt="" />
          <img onClick={() => setSelectedMember(clenove[2])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer transition-transform duration-200 w-full" style={{ borderColor: "#968B72" }} src="honzaa.png" alt="" />
          <img onClick={() => setSelectedMember(clenove[3])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer transition-transform duration-200 w-full" style={{ borderColor: "#968B72" }} src="martinn.png" alt="" />
          <img onClick={() => setSelectedMember(clenove[4])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer transition-transform duration-200 w-full" style={{ borderColor: "#968B72" }} src="luboss.png" alt="" />
        </div>
      </div>


      {/* KONTAKT */}
      <div id='kontakt' className='flex flex-col sm:mt-[300px] mt-40 xl:m-0 xl:flex-row justify-center h-screen'>
        <div id="infokontakt" className=" px-4 sm:px-8 xl:px-[120px] snap-start flex flex-col justify-center">
          <div className='pb-6 xl:pb-[30px]'>
            <h1 className='text-white font-[Montserrat] text-2xl sm:text-3xl xl:text-4xl pb-3 xl:pb-[15px]'>NAPIŠTE NÁM!</h1>
            <div className='flex'>
              <p className='text-white text-sm sm:text-base xl:text-base'>+420 123 456 789</p>
            </div>
            <div className='flex'>
              <p className='text-white text-sm sm:text-base xl:text-base'>kapelakvarton@gmail.com</p>
            </div>
          </div>
          <div>
            <p className='text-white text-lg sm:text-xl xl:text-xl uppercase pt-6 xl:pt-[30px] pb-3 xl:pb-[15px]'>NEBO NÁS JEN SLEDUJTE</p>
            <a href='https://www.instagram.com/kapelakvarton/?hl=cs' className='flex' target="_blank">
              <img className="h-5 w-5 mt-1" src="ig.png" alt="" />
              <p className='text-white ml-1 pb-1 text-sm sm:text-base xl:text-base'>kapelakvarton</p>
            </a>
            <a href='https://www.facebook.com/kapelakvarton' className='flex' target="_blank">
              <img className="h-5 w-5 mt-1" src="fb.png" alt="" />
              <p className='text-white ml-1 pb-1 text-sm sm:text-base xl:text-base'>Kvarton</p>
            </a>
            <a href='https://www.youtube.com/@kapelakvarton' className='flex' target="_blank">
              <img className="h-5 w-5 mt-1" src="youtube.png" alt="" />
              <p className='text-white ml-1 pb-1 text-sm sm:text-base xl:text-base'>KVARTON</p>
            </a>
          </div>
        </div>
        <div id="fotokontakt" className="bg-[url('/skupina.jpg')] bg-cover lg:bg-[url('/skupinav.jpg')] xl:bg-[url('/skupina.jpg')] lg:bg-center xl:bg-right bg-right h-[60vh] sm:h-[50vh] xl:h-[80vh] w-full xl:w-[100vh] mt-6 md:mt-[5vh] mb-[5vh] mr-0 md:mr-[10vh] rounded-2xl saturate-0 border-2 hover:saturate-70 transition-transform duration-200" style={{ borderColor: "#968B72" }}></div>
      </div>
    </main>
  )
}

export default Home