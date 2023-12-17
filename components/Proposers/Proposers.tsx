import Link from 'next/link';

export default function Proposers({
  represent_proposer_id,
  represent_proposer,
  public_proposer_list,
  public_proposer_id_list,
}: {
  represent_proposer_id: string;
  represent_proposer: string;
  public_proposer_list: string[];
  public_proposer_id_list: string[];
}) {
  return (
    <section className="w-[92%] flex flex-col gap-2">
      <h1 className="text-2xl font-bold">발의자 명단</h1>
      <h2 className="text-xl">
        대표 발의자 :{' '}
        <Link href={`/congressman/${represent_proposer_id}`}>
          <strong>{represent_proposer}</strong>
        </Link>
      </h2>
      {public_proposer_list.length && (
        <div>
          <h2 className="text-xl mb-[10px]">공동 발의자 :</h2>
          <div className="grid grid-cols-5">
            {public_proposer_list.map((name, index) => (
              <Link
                // eslint-disable-next-line
                key={`${name}/${index}`}
                href={`/congressman/${public_proposer_id_list[index]}`}
                className="flex justify-center w-full">
                <strong>{name}</strong>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
