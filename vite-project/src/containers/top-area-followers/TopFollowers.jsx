import FollowerCard from '../../components/FollowerCard/FollowerCard';
import './TopFollowers.css';
import { useQuery } from '@tanstack/react-query';

function TopFollowers() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['followersData'],
    queryFn: () =>
      fetch('http://localhost:3001/topfollowers').then((res) =>
        res.json()
      )
  })

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <section className='top-followers'>
      {data?.map((row, index) => {
        return <FollowerCard data={row} key={index} />;
      })}       
    </section>
  );
}

export default TopFollowers;