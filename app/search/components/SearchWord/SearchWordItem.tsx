import { Chip } from '@nextui-org/chip';

interface SearchWordItemProps {
  handleClose: (word: string) => void;
  word: string;
}

export default function SearchWordItem({ handleClose, word }: SearchWordItemProps) {
  return (
    <Chip
      key={word}
      variant="bordered"
      className="border-1 border-gray-1 text-gray-2"
      onClose={() => handleClose(word)}>
      {word}
    </Chip>
  );
}
