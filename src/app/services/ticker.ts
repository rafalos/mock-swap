import { tickerUrl } from '@/constants';
import { CryptoAsset } from '../types';

export const getAllTickers = async (): Promise<CryptoAsset[]> => {
  const response = await fetch(tickerUrl);
  const jsonResponse = await response.json();

  return jsonResponse.data;
};
