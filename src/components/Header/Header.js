import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../../data';
import { uuid } from 'uuidv4';
import sun from '../../icons/icon-sun.svg';
import moon from '../../icons/icon-moon.svg';
import bgDark from '../../images/bg-desktop-dark.jpg';
import bgDarkMobile from '../../images/bg-mobile-dark.jpg';
import bgLight from '../../images/bg-desktop-light.jpg';
import bgLightMobile from '../../images/bg-mobile-light.jpg';
import './Header.css';
import { useGlobalContext } from '../../context/context';
import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

toast.configure();
const Header = () => {
  const { createTodo, toggleTheme, theme } = useGlobalContext();
  const [title, setTitle] = useState('');

  // const theme = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      toast.error('Cannot add empty value', toastOptions);
      return;
    }
    toast.success('Successfully added', toastOptions);
    const newTodo = {
      id: uuid(),
      title,
      active: true,
    };
    createTodo(newTodo);
    setTitle('');
  };

  console.log(window.innerWidth)
  const windowSize = () => { 
    if(window.innerWidth >= 650) {
    return true
  }
  else return false
}
  const desktopBcgImg = theme === 'dark-theme' ? bgDark : bgLight
  const mobileBcgImg = theme === 'dark-theme' ?  bgLightMobile : bgDarkMobile 
  // <img src="./assets/images/bg-mobile-light.jpg" class="background" />
  //     <header class="header">
  //       <h1 class="header__title">Todo</h1>
  //       <label class="header__lida">
  //         <span class="header__icon"></span>
  //         <input type="checkbox" />
  //       </label>
  //     </header>
  return (
    <>
      <div className="header--top">
        <div className="bg-img">
          <img src={windowSize ? desktopBcgImg : mobileBcgImg} alt="" />
        </div>
        <h1 className={``}>Todo</h1>
        <button className="btn" onClick={toggleTheme}>
          <img src={theme === 'dark-theme' ? sun : moon} alt="toggle-icon" />
        </button>
      </div>
      <div className="list-item header--input">
        <form onSubmit={handleSubmit}>
          <div className="circle"></div>
          <input
            className=""
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Create a todo..."
          />
        </form>
      </div>
    </>
  );
};

export default Header;
