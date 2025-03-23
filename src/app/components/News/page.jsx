import { Bookmark, ChevronRight } from "lucide-react";
import Image from "next/image";
import image1 from "../../../assets/img/news_img1.png"
import image2 from "../../../assets/img/news_img2.png"
import image3 from "../../../assets/img/news_img3.png"
import image4 from "../../../assets/img/news_img4.png"
import image5 from "../../../assets/img/news_img5.png"

export default function News() {
  return (
    <>
      {/* <a href="#" className="block py-2 px-4 rounded-lg bg-[#303030] shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"> */}
      <div className="flex items-center space-x-3 pb-4">
        {/* First Icon */}

        <span className="flex-2 ">
          <div className="text-bold text-[#FFFFFF]">Trending News</div>

        </span>

        {/* Second Icon */}
        <span className="text-xl text-[#C3CC5A]">
          <ChevronRight />
        </span>
      </div>
      {/* First Row with Big Image, Text Below Image, and Icon */}
      <div className="flex flex-col items-center space-y-4 bg-[#303030] p-4 rounded-lg shadow-lg">
        <Image
          src={image1} // Path to the image file
          alt="Big Image"
          className="w-full max-w-[800px] h-auto rounded-lg"
        />
        <div className="flex items-center space-x-3 text-white">
          <p className="text-bold text-lg" style={{ fontSize: "18px" }}>This is your big image description</p>
          <span className="text-xl text-[#C3CC5A]">
            <Bookmark />
          </span>
        </div>
          {/* <p className="text-sm text-gray-400" style={{ fontSize: "10px", textAlign:"l" }}>5 Hours Ago</p> */}
      </div>
      {/* Second Row with Small Image, Text, Date, and Bookmark Icon */}
      <div className="flex justify-between p-4 mt-6 bg-[#303030] rounded-lg shadow-lg">
        {/* Small Image */}
        <div className="flex-1">
          <Image
            src={image2} // Path to the image file
            alt="Big Image"
          className="w-[70px] h-[70px] rounded-lg "
          />

        </div>

        {/* Text and Date */}
        <div className="flex-2 text-white">
          <p className="text-md font-semibold uppercase" style={{ fontSize: "12px" }}>Here are the top 100 players and managers</p>
          <p className="text-sm text-gray-400" style={{ fontSize: "10px" }}>March 24, 2025</p>
        </div>

        {/* Bookmark Icon */}
        <div className="flex flex justify-center items-center text-2xl text-[#C3CC5A]">
          <Bookmark /> {/* You can replace this with a bookmark icon */}
        </div>
      </div>
      <div className="flex justify-between p-4 mt-6 bg-[#303030] rounded-lg shadow-lg">
        {/* Small Image */}
        <div className="flex-1">
          <Image
            src={image3} // Path to the image file
            alt="Big Image"
          className="w-[70px] h-[70px] rounded-lg "
          />

        </div>

        {/* Text and Date */}
        <div className="flex-2 text-white">
          <p className="text-md font-semibold uppercase" style={{ fontSize: "12px" }}>Some small text goes here.</p>
          <p className="text-sm text-gray-400" style={{ fontSize: "10px" }}>March 24, 2025</p>
        </div>

        {/* Bookmark Icon */}
        <div className="flex flex justify-center items-center text-2xl text-[#C3CC5A]">
          <Bookmark /> {/* You can replace this with a bookmark icon */}
        </div>
      </div>
      <div className="flex justify-between p-4 mt-6 bg-[#303030] rounded-lg shadow-lg">
        {/* Small Image */}
        <div className="flex-1">
          <Image
            src={image4} // Path to the image file
            alt="Big Image"
         className="w-[70px] h-[70px] rounded-lg "
          />

        </div>

        {/* Text and Date */}
        <div className="flex-2 text-white">
          <p className="text-md font-semibold uppercase" style={{ fontSize: "12px" }}>Results and scores from the Premier League....!!</p>
          <p className="text-sm text-gray-400" style={{ fontSize: "10px" }}>March 24, 2025</p>
        </div>

        {/* Bookmark Icon */}
        <div className="flex flex justify-center items-center text-2xl text-[#C3CC5A]">
          <Bookmark /> {/* You can replace this with a bookmark icon */}
        </div>
      </div>
      <div className="flex justify-between p-4 mt-6 bg-[#303030] rounded-lg shadow-lg">
        {/* Small Image */}
        <div className="flex-1">
          <Image
            src={image5} // Path to the image file
            alt="Big Image"
          className="w-[70px] h-[70px] rounded-lg "
          />

        </div>

        {/* Text and Date */}
        <div className="flex-2 text-white">
          <p className="text-md font-semibold uppercase" style={{ fontSize: "12px" }}>Join or start a competition now!</p>
          <p className="text-sm text-gray-400" style={{ fontSize: "10px" }}>March 24, 2025</p>
        </div>

        {/* Bookmark Icon */}
        <div className="flex flex justify-center items-center text-2xl text-[#C3CC5A]">
          <Bookmark /> {/* You can replace this with a bookmark icon */}
        </div>
      </div>

      {/* </a> */}
    </>
  );
}
