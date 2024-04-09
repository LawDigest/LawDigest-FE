import { SearchBar } from '@/components';
import DDay from './DDay';

export default function HeadBoard() {
  return (
    <div className="flex items-center pb-6 pl-5 border-b shadow-md rounded-xl">
      <DDay />
      <SearchBar isElection />
    </div>
  );
}
