import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import bg1 from './image/bg-1.png';
import bg2 from './image/bg-2.png';
import bg3 from './image/bg-3.png';
import bg4 from './image/bg-4.png';
import bg5 from './image/bg-5.png';

import './index.css';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <ParallaxProvider>
        <header>
          <Navbar/>
          {/* <div className="banner-title">AVALAR</div> */}
          <div className="banner-description">Explore, discover and rise to reclaim the shattered world of avalar</div>
          <ParallaxBanner
            className="banner"
            layers={[
              {
                image: bg1, // bg wall
                translateY: [0, 50],
                translateX: [0 ,-0.04],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg2, // caverns
                translateY: [0, 45],
                translateX: [0, 1],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg3, // bottom cliff
                translateY: [0, 30],
                translateX: [-5, -10],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg4, // cavern ceiling
                translateY: [-15, 0],
                translateX: [0, 1],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg5, //character
                translateY: [30, 40],
                translateX: [-10, -15],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          />
        </header>
      </ParallaxProvider>
    </main>
  );
}
