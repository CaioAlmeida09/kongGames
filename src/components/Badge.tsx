import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IBadgeProps {
  icon: ReactNode;
  label: string;
  link: string;
}

export const Badge = ({ icon, label, link }: IBadgeProps) => {
  return (
    <Link to={link} target="_blank">
      <div className="flex bg-white cursor-pointer justify-center items-center gap-2 w-[300px] h-[53px] rounded-lg  text-white hover:bg-slate-50 active:bg-slate-100">
        {icon}
        <p className="text-base font-bold text-orange-500">{label}</p>
      </div>
    </Link>
  );
};
