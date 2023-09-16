import React from 'react';

interface NavLinkProps {
  name: string;
  onClick?: () => void;
  
}

const NavLinks: React.FC<NavLinkProps> = ({ name, onClick}) => {
  return (
    <a
      href={`#${name}`}
      className="capitalize duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"
      {...onClick}
    >
      <span className="md:text-sm">{name}</span>
    </a>
  );
};

export default NavLinks;
