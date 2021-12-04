import styles from './index.less';
import SearchInput from './SearchInput';
import Carousel from './Carousel';
import NavMall from './NavTable';
import Recommend from './Recommend';

export default () => {
  return (
    <div>
      <SearchInput />
      <Carousel />
      <NavMall />
      <Recommend />
    </div>
  );
};
