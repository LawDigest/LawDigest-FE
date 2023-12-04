import CardItem from './components/CardItem';
import PartyContainer from './components/party/PartyContainer';

export default function Statistics() {
  return (
    <div className="w-full">
      <h1 className="m-5 text-3xl font-bold ">통계</h1>

      <CardItem title="최근 법안 발의한 정당">
        <PartyContainer />
      </CardItem>
    </div>
  );
}
