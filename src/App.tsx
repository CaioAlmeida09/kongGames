import Logo from './assets/perfil.jpg';
import { FaHeart } from 'react-icons/fa';
import { LINKS } from './constants/links';
import { Badge } from './components/Badge';

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-start p-16 bg-main">
      <main className="w-[350px] h-[533px] flex flex-col justify-start items-center">
        <img
          src={Logo}
          alt="Perfil"
          className="w-[120px] h-[120px] rounded-full border-white border-4"
        />
        <h1 className="text-3xl font-bold text-black mt-6 ">Kong Games</h1>
        <strong className=" text-base text-white mt-2">
          @konggamesoficial
        </strong>

        <section className="mt-8 flex flex-col gap-4">
          {LINKS.map((link) => {
            return <Badge link={link.to} icon={link.icon} label={link.label} />;
          })}
        </section>

        <p className="flex gap-2 justify-center items-center font-bold text-white mt-16">
          Feito com <FaHeart size={18} color="#fff" /> pela KongGames{' '}
        </p>
      </main>
    </div>
  );
}

export default App;
