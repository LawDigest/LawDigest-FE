import SearchBar from '@/components/common/SearchBar';
import CardItem from './components/CardItem';
import Keyword from './components/keyword/Keyword';
import LawList from './components/LawList/LawList';

export default function Search() {
  return (
    <div>
      <SearchBar />

      <CardItem title="최신 법률개정안 주요 키워드">
        <Keyword />
      </CardItem>

      <CardItem title="많이 본 법률개정안 목록">
        <LawList />
      </CardItem>
    </div>
  );
}
