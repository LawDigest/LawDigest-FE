export default function sortByParty({
  representativeProposer,
  proposerList,
}: {
  representativeProposer: {
    representative_proposer_id: string;
    representative_proposer_name: string;
    represent_proposer_img_url: string;
    party_id: number;
    party_image_url: string;
    party_name: string;
  };
  proposerList: {
    public_proposer_id: string;
    public_proposer_name: string;
    public_proposer_img_url: string;
    public_proposer_party_id: number;
    public_proposer_party_image_url: string;
    public_proposer_party_name: string;
  }[];
}) {
  const map = new Map();
  const newProposerList: any = [];

  proposerList
    .toSorted((a, b) => a.public_proposer_party_id - b.public_proposer_party_id)
    .forEach((proposer) => {
      const proposerId = proposer.public_proposer_id;
      const proposerName = proposer.public_proposer_name;
      const partyName = proposer.public_proposer_party_name;
      const partyId = proposer.public_proposer_party_id;
      const partyLogo = proposer.public_proposer_party_image_url;
      const newProposer = Array.of([proposerId, proposerName]);

      if (map.has(partyName)) {
        map.set(partyName, map.get(partyName).concat(newProposer));
      } else {
        map.set(partyName, [
          [partyId, partyLogo],
          [proposerId, proposerName],
        ]);
      }
    });

  map.set(
    representativeProposer.party_name,
    map
      .get(representativeProposer.party_name)
      .concat(
        Array.of([
          representativeProposer.representative_proposer_id,
          representativeProposer.representative_proposer_name,
        ]),
      ),
  );

  map.forEach((key, value) => {
    newProposerList.push({ party: value, proposers: key });
  });

  return newProposerList;
}
