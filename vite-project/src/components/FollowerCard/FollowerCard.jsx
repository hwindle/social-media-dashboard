import './FollowerCard.css';

function FollowerCard(props) {
  const { type, handle, followers, trend } = props.data;

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
        {trend >= 0 ? (
          <span className='up'></span>
        ) : (
          <span className='down'></span>
        )}
        <span>
          { parseInt(trend) <= 0 ? ' - ' : ' ' }
          {Math.abs(parseInt(trend))}
          &nbsp; Today
        </span>
      </p>
    </div>
  );
}

export default FollowerCard;
