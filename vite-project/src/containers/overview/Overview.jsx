import OverviewCard from '../../components/OverviewCard/OverviewCard';
import './Overview.css';

function Overview() {
  return (
    <section className="overview-area">
      <OverviewCard type='facebook' title='Page Views' number='87' percentage='3' />
      <OverviewCard type='facebook' title='Likes' number='52' percentage='-2' />
      <OverviewCard type='instagram' title='Likes' number='5264' percentage='2257' />
      <OverviewCard type='instagram' title='Profile Views' number='52k' percentage='1375' />
      <OverviewCard type='twitter' title='Retweets' number='117' percentage='303' />
      <OverviewCard type='twitter' title='Likes' number='507' percentage='553' />
      <OverviewCard type='youtube' title='Likes' number='107' percentage='-19' />
      <OverviewCard type='youtube' title='Total Views' number='1407' percentage='-12' />      
    </section>
  );
}

export default Overview;