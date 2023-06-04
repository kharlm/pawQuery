import React, { useEffect } from "react";

const AdSenseAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="YOUR_ADSENSE_CLIENT_ID"
        data-ad-slot="YOUR_ADSENSE_AD_SLOT"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
