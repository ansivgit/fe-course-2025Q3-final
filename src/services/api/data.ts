import { API_ENDPOINTS, API_URL } from '@/constants/constants';

import type { WidgetApiResponse } from '@/types/widgets';

export async function fetchData(id: string): Promise<WidgetApiResponse> {
  const response = await fetch(`${API_URL}/${API_ENDPOINTS.DATA}/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: WidgetApiResponse = await response.json();

  return data;
}
