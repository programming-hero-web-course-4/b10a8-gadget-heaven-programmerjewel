

const Dashboard = () => {
  return (
    <div>
      <div className="text-center bg-violet-600">
        <h2 className="font-bold text-2xl md:text-4xl text-white">Dashboard</h2>
        <p className="font-extralight text-white mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex gap-4 justify-center">
          <button className="btn rounded-3xl">Cart</button>
          <button className="btn rounded-3xl">Wishlist</button>
        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;