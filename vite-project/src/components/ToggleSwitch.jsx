import { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch() {
  const [activeClass, setActiveClass] = useState('toggle');

  const switchMode = () => {
    let currentTheme = document.getElementsByTagName('body')[0];
    console.log(currentTheme.id);
    if (currentTheme.id === 'dark') {
      setActiveClass('toggle');
      currentTheme.id = 'light';
    } else if (currentTheme.id === 'light') {
      setActiveClass('toggle move-right');
      currentTheme.id = 'dark';
      console.log('currentTheme element: ', currentTheme.id);
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
