import { CmsHomeDataModel } from '@/core/models/cms-home-data.model';
import { fetchCmsData } from '@/mock/mock-cms.api';

export class CmsService {
  static async getCmsData(): Promise<CmsHomeDataModel> {
    try {
      const data = await fetchCmsData(); // Consume the fake API
      return data;
    } catch (error) {
      throw new Error('Failed to fetch CMS data');
    }
  }
};