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
      <div className='switch-area'>
        <h3>Dark Mode</h3>
        <p className='toggle' aria-label='toggle'>
          <span className='white-switch'></span>
        </p>
      </div>
    </header>
  );
}

export default Header;
