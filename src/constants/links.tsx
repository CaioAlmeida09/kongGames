import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const LINKS = [
  {
    label: 'Sistema da Kong Games',
    icon: (
      <div className="flex items-center gap-1">
        <div className="bg-black size-4 rounded-full flex justify-center items-center">
          <p className="font-bold text-[10px] text-[#F96B04]"> K </p>
        </div>
      </div>
    ),
    to: 'https://app.konggames.com.br/',
  },
  {
    label: 'Grupo de Promoções',
    icon: <FaWhatsapp size={20} color="#F96B04" />,
    to: 'https://chat.whatsapp.com/CxQ8ex7VeDFK73g99lAz6k',
  },
  {
    label: 'Compras & Suporte',
    icon: <FaWhatsapp size={20} color="#F96B04" />,
    to: 'https://wa.me/5581997893024?text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20jogos%21',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram size={20} color="#F96B04" />,
    to: 'https://www.instagram.com/konggamesoficial?igsh=MTZ3ZDc5OXY0ZDdvbQ%3D%3D&utm_source=qr',
  },
];
