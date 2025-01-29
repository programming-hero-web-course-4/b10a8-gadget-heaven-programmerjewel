import iphone from "../../assets/iphone-lauch.jpg";
import phoneReview from "../../assets/phone-review.png";
import gamingLaptop from "../../assets/gaming_laptop.webp";
import macbook from "../../assets/macbook.jpg";

const Blog = () => {
  return (
    <div className="md:my-10 my-6">
      <h2 className="text-center font-bold text-2xl md:text-4xl">
        Latest News on Gadgets across the Globe
      </h2>
      <p className="text-gray-500 text-center mt-4">
        Get to know all the latest updates, gadget reviews, upcoming launch and
        many more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mx-8">
        <div className="border border-gray-300 p-4 rounded-xl flex gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">
              Upcoming Launches on Iphone Categories
            </h2>
            <p className="text-gray-500 font-light">
              Apple is likely to unveil a new generation of iPhones and
              the leaks are already hinting at some exciting upgrades. We might
              see improved cameras with faster processors.
            </p>
            <a className="underline font-semibold text-violet-700" href="#">More Info</a>
          </div>
          <img
            className="w-30 h-30 rounded-lg"
            src={iphone}
            alt=""
          />
        </div>
        <div className="border border-gray-300 p-4 rounded-xl flex gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">
              AI will be the next BIG update
            </h2>
            <p className="text-gray-500 font-light">
              The next major leap in smartphone technology will be driven by AI.
              Imagine a phone that anticipates your needs, and adapts to your
              unique usage patterns.
            </p>
            <a className="underline font-semibold text-violet-700" href="#">More Info</a>
          </div>
          <img
            className="w-30 h-30 rounded-lg"
            src={phoneReview}
            alt=""
          />
        </div>
        <div className="border border-gray-300 p-4 rounded-xl flex gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">
              Things to consider on new Gaming Laptops
            </h2>
            <p className="text-gray-500 font-light">
              Make sure gaming laptops have all basic components like powerful
              processors with AI integrations, effective cooling systems and
              very lightweight.
            </p><a className="underline font-semibold text-violet-700" href="#">More Info</a>
          </div>
          <img
            className="w-30 h-30 rounded-lg"
            src={gamingLaptop}
            alt=""
          />
        </div>
        <div className="border border-gray-300 p-4 rounded-xl flex gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">Whats wrong with new Macbook?</h2>
            <p className="text-gray-500 font-light">
              MacBooks are consistently among the most expensive laptops on the
              market, making them inaccessible for many consumers. Value for money is often neglected.
            </p>
            <a className="underline font-semibold text-violet-700" href="#">More Info</a>
          </div>
          <img
            className="w-30 h-30 rounded-lg"
            src={macbook}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
