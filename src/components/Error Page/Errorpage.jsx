import gif from "../../assets/404.gif";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <p className="text-center text-lg mb-5">Opps! The content you are looking for is not available</p>
      <img className="mx-auto rounded-xl" src={gif} alt="" />
    </div>
  );
};

export default Errorpage;