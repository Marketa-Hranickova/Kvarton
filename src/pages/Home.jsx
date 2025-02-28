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
        letterSpacing: "0px",  // Starting letter-spacing
      },
      {
        // Scale up the text
        letterSpacing: "100px", // Gradually increase letter-spacing
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
          trigger: "#obrazekdva",
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
          trigger: "#obrazekdva",
          start: "top center",
          end: "top 60%",
          scrub: 1
        }
      }
    );
  }, []);









  return (
    <main className="scroll-smooth overflow-y-scroll snap-y snap-mandatory bg-black">
      <section id='home' className='snap-start' >
        <Navbar />
        <div className=" h-screen bg-[url('./introfoto.jpg')] bg-cover bg-center flex-col justify-center align-baseline">
          <h1 id="hlavni" className='text-center text-white text-9xl pt-[35vh] font-[Montserrat] font-light'>
            KVARTON
          </h1>
          <p id='podnadpis' className='text-center text-white text-2xl'>pop-folk/jazz</p>
        </div>
      </section>
      {/* AKCE A NAHRÁVKY */}
      <div id="nahravky" className="px-[120px] h-screen bg-black snap-start flex flex-col justify-around items-center ">
        <div className="flex flex-col md:flex-row items-center w-full space-y-6 md:space-y-0 md:justify-between">
          <h2 className="text-white font-[montserrat] text-4xl text-center md:text-left">
            KDE NÁS USLYŠÍTE
          </h2>
          <a id='obrazekjedna' href="https://www.facebook.com/kapelakvarton/events" target="_blank" rel="noopener noreferrer" className="group">
            <div className="h-64 w-[50vw] bg-[url('koncert.jpg')] bg-cover bg-center rounded-lg shadow-lg transform transition-all duration-300 group-hover:mr-[0px] group-hover:opacity-50 mr-[-130px] saturate-0 opacity-80"></div>
          </a>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center w-full space-y-6 md:space-y-0 md:justify-between">
          <a id='obrazekdva' href="https://www.youtube.com/@kapelakvarton" target="_blank" rel="noopener noreferrer" className="group">
            <div className="h-64 w-[50vw] bg-[url('kytara.jpg')] bg-cover bg-center rounded-lg shadow-lg transform transition-all duration-300 group-hover:ml-[0px] group-hover:opacity-50 ml-[-130px] saturate-0 opacity-80"></div>
          </a>
          <h3 className="text-white text-4xl text-center md:text-right font-[montserrat]">
            A NEBO NÁS CHCETE <br />
            SLYŠET HNED?
          </h3>
        </div>
      </div>



      {/* O KAPELE */}
      <div id='kapela' className='px-[120px] h-screen max-[1800px]: bg-black flex flex-col md:flex-row items-center justify-between p-10 snap-start'>
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 id="memberName" className='text-white font-[montserrat] text-4xl mb-5' >{selectedMember.name}</h1>
          <p id="memberTitle" className='text-white leading-loose mb-3 md:pr-[7vh]'>{selectedMember.title}</p>
          <Button
            onClick={() => {
              console.log('click');
              setSelectedMember(clenove[0]);
            }}
            className={selectedMember === clenove[0] ? "hidden" : "block"}

            text="O KAPELE"
          />
        </div>
        <div id="img" className='grid grid-cols-2 gap-7 md:w-1/2 lg:m-20'>
          <img onClick={() => setSelectedMember(clenove[1])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer  transition-transform duration-200" style={{ borderColor: "#968B72" }} src="ivca.png" alt="" />
          <img onClick={() => setSelectedMember(clenove[2])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer  transition-transform duration-200" style={{ borderColor: "#968B72" }} src="honza.png" alt="" />
          <img onClick={() => setSelectedMember(clenove[3])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer transition-transform duration-200" style={{ borderColor: "#968B72" }} src="martin.png" alt="" />
          <img onClick={() => setSelectedMember(clenove[4])} className="border-2 rounded-2xl hover:opacity-70 hover:scale-105 cursor-pointer transition-transform duration-200" style={{ borderColor: "#968B72" }} src="lubos.png" alt="" />
        </div>
      </div>


      {/* KONTAKT */}
      <div id='kontakt' className='flex flex-row justify-around'>
        <div id="infokontakt" className="h-screen bg-black px-[120px] snap-start flex flex-col justify-center">
          <div className=' pb-[30px]'>
            <h1 className='text-white font-[montserrat] text-4xl pb-[15px]'>NAPIŠTE NÁM!</h1>
            <div className='flex'>
              <p className='text-white'>+420 123 456 789</p>
            </div>
            <div className='flex'>
              <p className='text-white'>kapelakvarton@gmail.com</p>
            </div>
          </div>

          <div>
            <p className='text-white text-xl uppercase  pt-[30px] pb-[15px]'>NEBO NÁS JEN SLEDUJTE</p>
            <a href='https://www.instagram.com/kapelakvarton/?hl=cs' className='flex' target="_blank">
              <img className="h-5 w-5 mt-1" src="ig.png" alt="" />
              <p className='text-white ml-1 pb-1'>kapelakvarton</p>
            </a>
            <a href='https://www.facebook.com/kapelakvarton' className='flex' target="_blank">
              <img className="h-5 w-5 mt-1" src="fb.png" alt="" />
              <p className='text-white ml-1 pb-1'>Kvarton</p>
            </a>
            <a href='https://www.youtube.com/@kapelakvarton' className='flex' target="_blank">
              <img className="h-5 w-5 mt-1 " src="youtube.png" alt="" />
              <p className='text-white ml-1 pb-1'>KVARTON</p>
            </a>
          </div>
        </div>
        <div id="fotokontakt" className="bg-[url('./skupina.jpg')] bg-cover bg-right h-[80vh] w-[100vh] mt-[10vh] mr-[10vh] rounded-2xl saturate-0 border-2 hover:saturate-70 transition-transform duration-200" style={{ borderColor: "#968B72" }}></div>
      </div>
    </main>
  )
}

export default Home