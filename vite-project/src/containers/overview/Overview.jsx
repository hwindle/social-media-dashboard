import OverviewCard from '../../components/OverviewCard/OverviewCard';
import './Overview.css';
// import { useQuery } from '@tanstack/react-query';

function Overview() {
  const data = [
    { type: 'facebook', title: 'Page Views', number: 52, percentage: -2 },
    { type: 'facebook', title: 'Likes', number: 52, percentage: 3 },
    { type: 'instagram', title: 'Likes', number: 5264, percentage: 2257 },
    {
      type: 'instagram',
      title: 'Profile Views',
      number: 52000,
      percentage: 1375,
    },
    { type: 'twitter', title: 'Retweets', number: 117, percentage: 303 },
    { type: 'twitter', title: 'Likes', number: 507, percentage: 553 },
    { type: 'youtube', title: 'Likes', number: 107, percentage: -19 },
    { type: 'youtube', title: 'Total Views', number: 1407, percentage: -12 },
  ];

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['overviewData'],
  //   queryFn: () =>
  //     fetch('http://localhost:3001/overview').then((res) =>
  //       res.json()
  //     )
  // })

  // if (isLoading) return 'Loading...';

  // if (error) return 'An error has occurred: ' + error.message;

  return (
    <section className='overview-area'>
      {data.map((row, index) => {
        return <OverviewCard data={row} key={index} />;
      })}
    </section>
  );
}

export default Overview;
