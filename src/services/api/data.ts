import { parseWidgets } from '@/services/widgets/engine';
import { API_ENDPOINTS, API_URL } from '@/constants/constants';

import type { HttpResponse } from '@/types/responses';
import type { Widget } from '@/types/widgets';

export async function fetchData(id: string): Promise<Widget[]> {
  const response = await fetch(`${API_URL}/${API_ENDPOINTS.DATA}/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: HttpResponse<Widget[]> = await response.json();

  if (typeof data !== 'object' || !('data' in data)) {
    throw new Error('Invalid data format');
  }

  const widgets: Widget[] = parseWidgets(data.data);

  if (widgets.length === 0) {
    throw new Error('No valid widgets received');
  }

  return widgets;
}
