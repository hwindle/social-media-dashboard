import FollowerCard from '../../components/FollowerCard/FollowerCard';
import './TopFollowers.css';
// import { useQuery } from '@tanstack/react-query';

function TopFollowers() {
  const data = [
    { type: 'facebook', handle: '@nathanf', followers: 1987, trend: 12 },
    { type: 'twitter', handle: '@nathanf', followers: 1044, trend: 99 },
    { type: 'instagram', handle: '@realnathanf', followers: 11000, trend: 1099 },
    { type: 'youtube', handle: 'Nathan F.', followers: 8239, trend: -144 }
  ];
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['followersData'],
  //   queryFn: () =>
  //     fetch('http://localhost:3001/topfollowers').then((res) =>
  //       res.json()
  //     )
  // })

  // if (isLoading) return 'Loading...';

  // if (error) return 'An error has occurred: ' + error.message;

  return (
    <section className='top-followers'>
      {data?.map((row, index) => {
        return <FollowerCard data={row} key={index} />;
      })}       
    </section>
  );
}

export default TopFollowers;