import { PARTY_NAME_KO, PARTY_COLOR } from '@/constants/party';

export default function getPartyColor(partyName: string) {
  return PARTY_COLOR[partyName as keyof typeof PARTY_NAME_KO];
}
