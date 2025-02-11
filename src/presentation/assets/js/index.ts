import { renderFirstSection } from '@/presentation/components/FirstSection';
import '../css/main.css';
import '../css/section-1.css';
import '../css/section-2.css';
import '../css/modal.css';

import { CmsService } from '@/infrastructure/services/CmsService';
import { removeLoader, renderLoader } from '@/presentation/components/Loader';
import { renderSecondSection } from '@/presentation/components/SecondSection';
import { setupGlobalAnchorClickHandler } from '@/utils/anchorHandlers';

const renderPage = async () => {
  const app = document.getElementById( 'app' );
  if ( !app ) return;
  renderLoader( app );

  try {
    const {firstSection, secondSection} = await CmsService.getCmsData();
    removeLoader();
    app.innerHTML = '';

    const firstSectionElement = renderFirstSection(firstSection);
    app.appendChild(firstSectionElement);

    const secondSectionElement = renderSecondSection(secondSection);
    app.appendChild(secondSectionElement);

    setupGlobalAnchorClickHandler();

    document.dispatchEvent(new Event('app-rendered'));
  } catch ( error ) {
    console.error( error );
  }

};

renderPage();

// @ts-ignore
if ( module.hot ) {
  // @ts-ignore
  module.hot.accept(); // Accept hot updates
}