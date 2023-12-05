import CardItem from './components/CardItem';
import PartyContainer from './components/party/PartyContainer';
import Seat from './components/seat/Seat';
import MemberList from './components/member/MemberList';

export default function Statistics() {
  return (
    <div className="w-full">
      <h1 className="m-5 text-3xl font-bold ">통계</h1>

      <CardItem title="최근 법안 발의한 정당">
        <PartyContainer />
      </CardItem>

      <CardItem title="21대 국회 의석수 현황">
        <Seat />
      </CardItem>

      <CardItem title="최근 법안 발의한 의원">
        <MemberList />
      </CardItem>
    </div>
  );
}
