import '../css/main.css';
import '../css/section-1.css';
import '../css/section-2.css';

import { CmsService } from '@/infrastructure/services/CmsService';
import { removeLoader, renderLoader } from '@/presentation/components/Loader';

const renderPage = async () => {
  const app = document.getElementById( 'app' );
  if ( !app ) return;
  renderLoader( app );

  try {
    const cmsServiceData = await CmsService.getCmsData();
    removeLoader();

  } catch ( error ) {

  }

};

renderPage();

// @ts-ignore
if ( module.hot ) {
  // @ts-ignore
  module.hot.accept(); // Accept hot updates
}