
import { Link } from "react-router-dom";
import logo from "./assets/perfil.jpg";

import { FaFacebook, FaHeart, FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className='w-full h-screen flex justify-center items-start p-16'>
      <main className="w-[350px] h-[533px] flex flex-col justify-start items-center">
        <img
          src={logo}
          alt="Perfil"
          className='w-[120px] h-[120px] rounded-full border-orange-500 border-4'
        />
        <h1 className="text-3xl font-bold text-black mt-6 ">Kong Games</h1>
        <strong className=" text-base text-gray-600 mt-2">@Konggamesoficial</strong>

      
          <section className="mt-8 flex flex-col gap-4">
          <Link to="https://chat.whatsapp.com/CxQ8ex7VeDFK73g99lAz6k" target="_blank">
            <div className="flex bg-orange-500 cursor-pointer justify-center items-center gap-2 w-[300px] h-[53px] rounded-lg hover:bg-orange-600 text-white">
              <FaWhatsapp size={22} />
              <p className="text-xl font-medium">Whatsapp</p>
            </div>
            </Link>
            <Link to="https://www.instagram.com/konggamesoficial?igsh=MTZ3ZDc5OXY0ZDdvbQ%3D%3D&utm_source=qr" target="_blank">
            <div className="flex bg-orange-500 cursor-pointer justify-center items-center gap-2 w-[300px] hover:bg-orange-600 h-[53px] rounded-lg text-white">
              <FaInstagram size={22} />
              <p className="text-xl font-medium">Instagram</p>
            </div>
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
            <div className="flex bg-orange-500 cursor-pointer justify-center items-center gap-2 w-[300px] hover:bg-orange-600 h-[53px] rounded-lg text-white">
              <FaFacebook size={22} />
              <p className="text-xl font-medium">Facebook</p>
            </div>
            </Link>
          </section>

          <p className="flex gap-2 justify-center items-center font-medium text-black mt-16"> Feito com <FaHeart size={18} color="#ff0000" /> pela KongGames </p>

      </main>
    </div>
  );
}

export default App;
