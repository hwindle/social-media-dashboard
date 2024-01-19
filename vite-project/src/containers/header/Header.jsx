import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import './Header.css';

function Header({ totalFollowers }) {
  const ukNumberFormat = new Intl.NumberFormat('en-GB');

  return (
    <header>
      <div className='main-headings'>
        <h1>Social Media Dashboard</h1>
        <h2>Total Followers: {ukNumberFormat.format(totalFollowers)}</h2>
      </div>
      <span className='horizontal-line'></span>
      <ToggleSwitch />
    </header>
  );
}

export default Header;
