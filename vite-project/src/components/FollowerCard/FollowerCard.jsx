import './FollowerCard.css';

function FollowerCard(props) {
  const { type, handle, followers, numTrend } = props;

  const alterDescription = (type) => {
    if (type !== 'youtube') {
      return 'followers';
    } else {
      return 'subscribers';
    }
  };

  return (
    <div className={type}>
      <p className='title'>
        <span className={type}></span>
        {handle}
      </p>
      <p className='large-num'>{followers}</p>
      <p className='description'>{alterDescription(type)}</p>
      <p className='trend'>
        {numTrend >= 0 ? (
          <span className='up'></span>
        ) : (
          <span className='down'></span>
        )}
        <span>{Math.abs(parseInt(numTrend))} Today</span>
      </p>
    </div>
  );
}

export default FollowerCard;
