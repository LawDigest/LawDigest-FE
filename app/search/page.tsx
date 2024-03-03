import CardItem from './components/Card';
import KeywordItem from './components/Keyword';
import LawItem from './components/Law';
import SearchWordContainer from './components/SearchWord';

const searchWordList = ['도로 교통법 개정안', '자율주행차량', '운수사업법', '정부 보조금', 'ㅎㅎ'];

const keywordList = [
  '자율주행차량',
  '운수사업법',
  '자율주행차량',
  '운수사업법',
  '보조금 지원',
  '도로교통법 개정안',
  '보조금 지원',
  '도로교통법 개정안',
];

const lawList = [
  '도로교통법 개정안',
  '아동학대범죄의 처벌 등에 관한 특례법 일부개정안',
  '의료법 일부개정안',
  '국민기초생활 보장법 일부개정안',
  '한국교육과정평가원법안',
  '한국교육과정평가원법안',
  '한국교육과정평가원법안',
  '한국교육과정평가원법안',
  '한국교육과정평가원법안',
  '한국교육과정평가원법안',
];

export default function Search() {
  return (
    <section className="mx-5">
      <CardItem title="최근 검색어">
        <SearchWordContainer searchWordList={searchWordList} />
      </CardItem>

      <hr />

      <CardItem title="최신 법률개정안 주요 키워드">
        <div className="grid grid-cols-2">
          {keywordList.map((keyword) => (
            <KeywordItem key={keyword} keyword={keyword} />
          ))}
        </div>
      </CardItem>

      <hr />

      <CardItem title="많이 찾는 법률개정안">
        <div className="flex flex-col gap-4">
          {lawList.map((law, index) => (
            <LawItem key={law} index={index + 1} law={law} />
          ))}
        </div>
      </CardItem>
    </section>
  );
}
