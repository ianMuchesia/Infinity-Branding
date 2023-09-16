import data from '@/data';
import React from 'react'
import NavLinks from './NavLinks';
interface Props{
    onToggleMenu: () => void;
    isMenuOpen: boolean;
}


const { pageSections } = data;


const sideBarStyles =
	"fixed z-40 flex md:hidden right-0 top-0 h-screen bg-black-600 w-[75vw] max-w-[400px] py-[50px] px-[10px] justify-center items-center transition-all duration-500 ease-in-out mobile-links";

const overLayStyles = "fixed inset-0 bg-black/30 md:hidden min-h-screen";

const MobileNavbar = ({onToggleMenu, isMenuOpen}:Props) => {
  return (
    <>
    <div
      className={`${overLayStyles} ${
        isMenuOpen ? "block" : "hidden"
      }`}
      onClick={onToggleMenu}
    ></div>
    <aside
      className={`${sideBarStyles} ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="w-full flex flex-col items-center justify-between py-5 space-y-9 text-lg">
        <ol className="flex flex-col space-y-5 flex-1 justify-evenly w-full">
          {pageSections.map((section, index) => (
            <li key={index}>
              <NavLinks
                name={section}
                onClick={onToggleMenu}
              />
            </li>
          ))}
        </ol>
        <button
          className="py-4 px-[50px] text-sm bg-black-500"
          
        >Contact Me</button>
      </nav>
    </aside>
  </>
  )
}

export default MobileNavbar