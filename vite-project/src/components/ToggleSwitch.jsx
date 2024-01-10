import { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch() {
  const [activeClass, setActiveClass] = useState('toggle');

  const switchMode = () => {
    setActiveClass('toggle move-right');
    let currentTheme = document.getElementsByTagName('body')[0].id;
    if (currentTheme === 'dark') {
      currentTheme = 'light';
    } else if (currentTheme === 'light') {
      currentTheme = 'dark';
    } else {
      console.log('currentTheme element: ', currentTheme);
    }
  };

  return (
    <div className='switch-area'>
      <h3>Dark Mode</h3>
      <p className={activeClass} aria-label='toggle' onClick={switchMode}>
          <span className='white-switch'></span>
      </p>
    </div>
  );
}

export default ToggleSwitch;
