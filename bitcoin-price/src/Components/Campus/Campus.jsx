// eslint-disable-next-line
import React from 'react';
import './Campus.css';
import Slider from 'react-slick';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import gallery_5 from '../../assets/gallery-5.png';
import gallery_6 from '../../assets/gallery-6.png';
import gallery_7 from '../../assets/gallery-7.png';
import gallery_8 from '../../assets/gallery-8.png';
import gallery_9 from '../../assets/gallery-9.png';

const Campus = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Number of slides to show on larger screens
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,  // Show 2 slides at a time
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 1,  // Show 1 slide at a time
          slidesToScroll: 1,
          arrows: false,  // Hide arrows on mobile
        }
      }
    ]
  };
  

  const SiteLinks = [
    "https://coindcx.com/blog/price-predictions/bitcoin-price-weekly",
    "https://www.fxstreet.com/cryptocurrencies/news/bitcoin-weekly-forecast-70-000-mark-on-sight-as-bulls-remain-strong-202409271358",
    "https://www.forbes.com/advisor/in/investing/cryptocurrency/bitcoin-prediction/",
    "https://www.coindesk.com/policy/2024/09/27/swan-bitcoin-claims-ex-employees-stole-its-mining-business-at-tethers-direction-in-new-suit/",
    "https://coingape.com/markets/heres-bitcoin-price-captures-nvidias-market-cap-3-2-trillion",
    "https://www.fxempire.com/forecasts/article/bitcoin-btc-maintains-65k-support-as-blackrock-etf-inflows-hit-499m-1464794",
    "https://ambcrypto.com/bitcoin-bullish-signal-makes-this-prediction-about-btcs-price-rally",
    "https://www.coindesk.com/markets/2024/09/27/bitcoin-fomo-is-back-10x-researchs-markus-thielen/",
    "https://www.deccanchronicle.com/southern-states/telangana/nirmal-police-arrest-3-government-teachers-for-role-in-crypto-scam-1826082",
  ];

  return (
    <div className='campus'>
      <Slider {...settings}>
        <div className="slider">
          <a href={SiteLinks[0]} target="_blank" rel="">
            <img src={gallery_1} alt="Gallery 1" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[1]} target="_blank" rel="">
            <img src={gallery_2} alt="Gallery 2" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[2]} target="_blank" rel="">
            <img src={gallery_3} alt="Gallery 3" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[3]} target="_blank" rel="">
            <img src={gallery_4} alt="Gallery 4" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[4]} target="_blank" rel="">
            <img src={gallery_5} alt="Gallery 5" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[5]} target="_blank" rel="">
            <img src={gallery_6} alt="Gallery 6" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[6]} target="_blank" rel="">
            <img src={gallery_7} alt="Gallery 7" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[7]} target="_blank" rel="">
            <img src={gallery_8} alt="Gallery 8" />
          </a>
        </div>
        <div className="slider">
          <a href={SiteLinks[8]} target="_blank" rel="">
            <img src={gallery_9} alt="Gallery 9" />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default Campus;
