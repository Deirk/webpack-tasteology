export const renderLoader = ( rootElement: HTMLElement ) => {

  const loader = document.createElement( 'div' );
  loader.id = 'loader';
  loader.className = 'w-full flex justify-center items-center';
  loader.innerHTML = `
  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
      <p class="text-[1.3rem] font-bold leading-[1.875rem] text-center">Loading...</p>
      <div class="flex animate-pulse space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 rounded bg-gray-200"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2 h-2 rounded bg-gray-200"></div>
              <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              <div class="col-span-2 h-2 rounded bg-gray-200"></div>
              <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              <div class="col-span-2 h-2 rounded bg-gray-200"></div>
              <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              <div class="col-span-2 h-2 rounded bg-gray-200"></div>
              <div class="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
            <div class="h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  rootElement.appendChild( loader );
};

export const removeLoader = () => {
  const loader = document.getElementById( 'loader' );
  if ( !loader ) return;
  loader.remove();
};