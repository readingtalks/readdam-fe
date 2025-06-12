import Banner from '@components/home/Banner';
import HomeClass from '@components/home/HomeClass';
import HomePlace from '@components/home/HomePlace';
import HomeWrite from '@components/home/HomeWrite';
import HomeShort from '@components/home/HomeShort';

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <HomeClass />
      <HomePlace />
      <HomeWrite />
      <HomeShort />
    </div>
  );
};

export default Home;