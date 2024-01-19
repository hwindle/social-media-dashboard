function FollowerCard(props) {
  const { type, handle, followers, numTrend } = props;

  return (
    <div className='follower-card'>
      <p className='title'>{type} - {handle}</p>
      <p className='large-num'>{followers}</p>
      <p className='description'>followers</p>
      <p className="trend"><span className="up"></span> {numTrend}</p>
    </div>
  );
}

export default FollowerCard;