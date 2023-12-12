export const BILL_STAGE = {
  reception: 'reception',
  committeeJudge: 'committeeJudge',
  districtJudge: 'districtJudge',
  review: 'review',
  transfer: 'transfer',
  promulgation: 'promulgation',
} as const;

export const BILL_STAGE_KO = {
  reception: '접수',
  committeeJudge: '위원회 심사',
  districtJudge: '체계지구 심사',
  review: '본회의 심의',
  transfer: '정부 이송',
  promulgation: '공포',
} as const;

export const BILL_TAB = {
  representProposer: 'representProposer',
  publicProposer: 'publicProposer',
} as const;

export const BILL_TAB_KO = {
  representProposer: '대표발의한 법안',
  publicProposer: '공동발의한 법안',
} as const;
