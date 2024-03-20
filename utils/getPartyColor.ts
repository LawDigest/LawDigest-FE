export default function getPartyColor(partyName: string) {
  if (partyName === '국민의힘') {
    return 'ppp';
  }
  if (partyName === '더불어민주당') {
    return 'dpk';
  }
  if (partyName === '정의당') {
    return 'jp';
  }
  if (partyName === '기본소득당') {
    return 'bip';
  }
  if (partyName === '시대전환') {
    return 'tk';
  }
  if (partyName === '진보당') {
    return 'tpp';
  }
  if (partyName === '한국의희망') {
    return 'hk';
  }
  return 'na';
}
