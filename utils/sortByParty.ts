export default function sortByParty({
  representativeProposerList,
  publicProposerList,
}: {
  representativeProposerList: {
    representative_proposer_id: string;
    representative_proposer_name: string;
    represent_proposer_img_url: string;
    party_id: number;
    party_image_url: string;
    party_name: string;
  }[];
  publicProposerList: {
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

  if (representativeProposerList.length > 1) {
    representativeProposerList
      .toSorted((a, b) => a.party_id - b.party_id)
      .forEach((proposer) => {
        const proposerId = proposer.representative_proposer_id;
        const proposerName = proposer.representative_proposer_name;
        const partyName = proposer.party_name;
        const partyId = proposer.party_id;
        const partyLogo = proposer.party_image_url;
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
  } else {
    map.set(representativeProposerList[0].party_name, [
      [representativeProposerList[0].party_id, representativeProposerList[0].party_image_url],
      [
        representativeProposerList[0].representative_proposer_id,
        representativeProposerList[0].representative_proposer_name,
      ],
    ]);
  }

  publicProposerList
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

  map.forEach((key, value) => {
    newProposerList.push({ party: value, proposers: key });
  });

  return newProposerList;
}
