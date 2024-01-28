import UserInfo from "./components/UserInfo";

export default function Home() {

  return (
    <div>
      <h1 className="text-xl md:text-3xl my-4 font-bold text-center px-2">🌟 Welcome to Javith Blogs 🌟</h1>
      <p className="container px-2 text-center my-2 md:w-[50%] md:m-auto md:my-8 md:text-lg">
        Explore a world of travel adventures and cultural discoveries through our captivating articles, insightful stories, and thought-provoking discussions. At Javith Blogs, we are passionate about unraveling the secrets of the world and inspiring wanderlust in every reader.
      </p>
      <img className="mx-auto md:h-auto md:w-[50%]" src="/images/blog.jpg" alt="img" />
      <p>
        <h1>
          Why choose Epic Explorations Blog?
        </h1>
        <ul className="text-xl">
          <li>
        🚀 Authentic Insights: Immerse yourself in genuine and firsthand insights as our team of experts shares their experiences and perspectives on a variety of topics.
          </li>
          <li>
          🔍 Hidden Gems: Uncover lesser-known treasures and unique experiences that transcend the ordinary, offering a fresh perspective on the world around us.
          </li>
          <li>
          💡 Expert Tips: Enhance your knowledge and enjoyment with our curated collection of tips, advice, and recommendations, designed to make your journeys, adventures, and endeavors more enjoyable.
          </li>
        </ul>


      </p>
    </div>
  )
}
