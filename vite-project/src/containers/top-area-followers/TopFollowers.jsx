import FollowerCard from '../../components/FollowerCard/FollowerCard';
import './TopFollowers.css';

function TopFollowers() {
  return (
    <section className='top-followers'>
      <FollowerCard type='facebook' handle='@nathanf' followers='1987' 
        numTrend='12' />
      <FollowerCard type='twitter' handle='@nathanf' followers='1044' 
        numTrend='99' />
      <FollowerCard type='instagram' handle='@realnathanf' followers='11000' 
        numTrend='1099' />
      <FollowerCard type='youtube' handle='Nathan F.' followers='8239' 
        numTrend='-144' />
    </section>
  );
}

export default TopFollowers;