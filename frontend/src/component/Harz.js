"use client";
import { GalleryItem, LightBoxGallery } from "magnific-popup";
import { useEffect, useState } from "react";
// import { GalleryItem, LightBoxGallery } from "react-magnific-popup";

const config = {
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function (item) {
      return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
    },
  },
};

export default function SampleComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null during server-side rendering
  }

  return (
    <LightBoxGallery className="popup-gallery" config={config}>
      <GalleryItem
        href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg"
        title="The Cleaner"
      >
        <img
          src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg"
          width="75"
          height="75"
        />
      </GalleryItem>
      <GalleryItem
        href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg"
        title="The Cleaner"
      >
        <img
          src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg"
          width="75"
          height="75"
        />
      </GalleryItem>
      <GalleryItem
        href="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg"
        title="The Uninvited Guest"
      >
        <img
          src="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg"
          width="75"
          height="75"
        />
      </GalleryItem>
      <GalleryItem
        href="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg"
        title="Oh no, not again!"
      >
        <img
          src="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_s.jpg"
          width="75"
          height="75"
        />
      </GalleryItem>
      <GalleryItem
        href="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg"
        title="Swan Lake"
      >
        <img
          src="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_s.jpg"
          width="75"
          height="75"
        />
      </GalleryItem>
      <GalleryItem
        href="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg"
        title="The Shake"
      >
        <img
          src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg"
          width="75"
          height="75"
        />
      </GalleryItem>
      <GalleryItem
        href="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg"
        title="Who's that, mommy?"
      >
        <img
          src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg"
          width="75"
          height="75"
        />
      </GalleryItem>
    </LightBoxGallery>
  );
}
