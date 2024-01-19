import './OverviewCard.css';

function OverviewCard(props) {
  const { type, title, number, percentage } = props;

  return (
    <article>
      <div className='heading'>
        <p className='metric'>{title}</p>
        <span className={type}></span>
      </div>
      <div className='numberBar'>
        <p className='largerNum'>{number}</p>
        <p className='percent'>
          {percentage >= 0 ? (
            <span className='up'></span>
          ) : (
            <span className='down'></span>
          )}
          <span>{percentage}%</span>
        </p>
      </div>
    </article>
  );
}

export default OverviewCard;
