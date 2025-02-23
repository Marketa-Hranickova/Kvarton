import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="h-screen bg-[url('./introfoto.jpg')] bg-cover bg-center flex-col justify-center align-baseline">
            <h1 className='text-center text-white text-9xl pt-[30vh]'>KVARTON</h1>
            <p className='text-center text-white text-2xl'>pop-folk/jazz</p>
        </div>
        <div className="h-screen bg-black flex-col justify-center">
            <div>
                <h2 className='text-white '>KDE NÁS USLYŠÍTE</h2>
                <p>AKCE</p>
                <h3>A NEBO NÁS CHCETE SLYŠET HNED?</h3>
                <button>Poslechněte si naše nahrávky</button>
            </div>
            
        </div>
    </div>
  )
}

export default Home