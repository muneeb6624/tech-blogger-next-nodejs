'use client';

import Hero from "../sections/(home)/hero/page";
import PopularPosts from "../sections/(home)/popularPosts/page";
import Deals from "../sections/(home)/deals/page";
import LatestPosts from "../sections/(home)/latestPosts/page";
import Featured from "@/sections/(home)/featured/page";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="relative">
        <div className="relative z-10 font-montserrat">
          {/* Background image will be behind this content */}

          {/* Hero Section */}

          <Hero />

          <div className="">
            <Featured />
          </div>

          {/* Popular Posts Section */}

          <div className="flex justify-center items-center bg-white pb-36">
            <PopularPosts />
          </div>

          {/* Deals Section */}

          <div className="flex justify-center items-center bg-[#ddd] pb-36">
            <Deals />
          </div>

          {/* Latest Posts Section */}
          <div className="flex justify-center items-center bg-white pb-36">
            <LatestPosts />
          </div>
        </div>
      </main>
      </Provider>
  );
}
