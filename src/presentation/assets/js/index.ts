import { CmsService } from '@/infrastructure/services/CmsService';
import '../css/tailwind.css';

const getData = async () => {
  const cmsServiceData = await CmsService.getCmsData();
  console.log( cmsServiceData );
};

getData();