import { useState } from 'react';
import type { ValueOf } from '@/app/common/types';

export function useTabType<T>(defaultValue: ValueOf<T>) {
  const [billType, setBillType] = useState<ValueOf<T>>(defaultValue);

  return [billType, setBillType];
}
