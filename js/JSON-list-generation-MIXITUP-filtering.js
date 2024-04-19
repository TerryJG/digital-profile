document.addEventListener('DOMContentLoaded', function () {
  // Fetch JSON data
  fetch('content\\project-list.json') 
    .then(response => response.json())
    .then(data => {
      // Videos
      let videoHtml = '';
      data.videos.forEach(videoItem => {
        videoHtml += `
          <div class="${videoItem['video-item']['classType']} lc-block video-item fancybox overflow-hidden rounded rounded"
               data-fancybox="${videoItem['video-item']['data-fancybox']}"
               data-type="${videoItem['video-item']['data-type']}"
               data-date="${videoItem['video-item']['data-date']}"
               data-tag="${videoItem['video-item']['data-tag']}"
               data-featured="${videoItem['video-item']['data-featured']}"
               data-caption="${videoItem['video-item']['data-caption']}"
               href="${videoItem['video-item']['href']}">
              <i id="playIcon" class="fa-solid fa-play" style="z-index: 7;"></i>
              <img id="thumbnailImage" src="${videoItem['video-item']['thumbnailImage']}" alt="${videoItem['video-item']['thumbnailImageAlt']}" style="z-index: 6; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" />
              <video id="hoverPreview" loop muted src="${videoItem['video-item']['hoverPreview']}" style="z-index: 5; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></video>
          </div>`;
      });

      // Images
      let imageHtml = '';
      data.images.forEach(imageItem => {
        imageHtml += `
          <div class="${imageItem['image-item']['classType']} lc-block image-item fancybox overflow-hidden rounded rounded"
               data-fancybox="${imageItem['image-item']['data-fancybox']}"
               data-type="${imageItem['image-item']['data-type']}"
               data-date="${imageItem['image-item']['data-date']}"
               data-tag="${imageItem['image-item']['data-tag']}"
               data-featured="${imageItem['image-item']['data-featured']}"
               data-caption="${imageItem['image-item']['data-caption']}"
               href="${imageItem['image-item']['href']}">
              <i class="fa-solid fa-image" style="z-index: 7;"></i>
              <img id="thumbnailImage" style="width: ${imageItem['image-item']['width']}; height: ${imageItem['image-item']['height']}" src="${imageItem['image-item']['thumbnailImage']}" alt="${imageItem['image-item']['thumbnailImageAlt']}"/>
          </div>`;
      });

      // Web
      let webHtml = '';
      data.web.forEach(webItem => {
        webHtml += `
          <div class="${webItem['web-item']['classType']} lc-block web-item fancybox mobile-hide overflow-hidden rounded rounded"
               data-fancybox="${webItem['web-item']['data-fancybox']}"
               data-type="${webItem['web-item']['data-type']}"
               data-width="100%"
               data-height="100vh"
               data-date="${webItem['web-item']['data-date']}"
               data-tag="${webItem['web-item']['data-tag']}"
               data-featured="${webItem['web-item']['data-featured']}"
               data-caption="${webItem['web-item']['data-caption']}"
               href="${webItem['web-item']['href'] }">
              <i class="fa-solid fa-globe" style="z-index: 7;"></i>
              <img id="thumbnailImage" style="width: ${webItem['web-item']['width']}; height: ${webItem['web-item']['height']}" src="${webItem['web-item']['thumbnailImage']}" alt="${webItem['web-item']['thumbnailImageAlt']}" />
          </div>`;
      });

      const projectsContainer = document.querySelector('.grid-wrapper');
      if (projectsContainer) {
        projectsContainer.innerHTML = `
          ${videoHtml}
          ${imageHtml}
          ${webHtml}
        `;

        // click event to change bg color with data-attribute 'bgcolor'
        // document.querySelectorAll('[data-filter]').forEach(function (filterItem) {
        //   filterItem.addEventListener('click', function () {
        //     var bgColor = filterItem.dataset.bgColor || 'rgb(255, 235, 206)'; // Default color if not specified
        //     document.body.style.transition = 'background 0.5s ease'; // Add transition property
        //     document.body.style.background = bgColor;
        //   });
        // });

        // Mixitup Initialization
        var mixer = mixitup(projectsContainer, {
          selectors: {
            target: '.video-item, .video-item[data], .image-item, .image-item[data], .web-item, .web-item[data]'
          },
          animation: {
            duration: 300
          },
          load: { // On page load, filter to this:
            filter: '[data-featured="main"]',
            sort: 'date:desc'
          },
          behavior: {
            liveSort: true
          },

        });

        document.querySelectorAll('.dropdown').forEach(function (item) {
          item.addEventListener('click', function () {
            console.log('Clicked');
            
            // Remove 'active' class from all items
            item.closest('.button-wrapper').querySelectorAll('.dropdown-menu li a').forEach(function (dropdownItem) {

              dropdownItem.classList.remove('active');
            });
        
            // Add 'active' class to the clicked item, if found
            var clickedItem = item.querySelector('.dropdown-menu li a');
            if (clickedItem) {

              clickedItem.classList.add('active');
            }
          });
        });
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
