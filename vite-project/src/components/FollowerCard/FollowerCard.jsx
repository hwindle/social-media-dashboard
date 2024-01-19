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
        {type} - {handle}
      </p>
      <p className='large-num'>{followers}</p>
      <p className='description'>{alterDescription(type)}</p>
      <p className='trend'>
        {numTrend >= 0 ? (
          <span className='up'>up</span>
        ) : (
          <span className='down'>down</span>
        )}
        {numTrend}
      </p>
    </div>
  );
}

export default FollowerCard;
