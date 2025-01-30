const Footer = () => {
  return (
    <div>
      <footer className="p-10">
        <div className="text-center">
          <h3 className="md:text-2xl text-lg font-extrabold pb-3 ">Gadget Haeven</h3>
          <p className="text-lg text-gray-500">Trusted by thousands of customers and local dealers for shopping tech products at an exicing offers.</p>
        </div>
        <hr className="border-gray-300 my-5" />
        <div className="flex justify-around">
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold text-lg">Services</h6>
          <a className="link link-hover text-gray-500">Product Support</a>
          <a className="link link-hover text-gray-500">Order Tracking</a>
          <a className="link link-hover text-gray-500">Shipping & Delivery</a>
          <a className="link link-hover text-gray-500">Returns</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold text-lg">Company</h6>
          <a className="link link-hover text-gray-500">About us</a>
          <a className="link link-hover text-gray-500">Contact</a>
          <a className="link link-hover text-gray-500">Carrer</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold text-lg">Legal</h6>
          <a className="link link-hover text-gray-500">Terms of Service</a>
          <a className="link link-hover text-gray-500">Privacy policy</a>
          <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
        </div>
        <p className="text-center text-violet-500">&#169;All rights reserved | 2025</p>
        <p className="text-center text-violet-500">Designed with ❤ by Al Amin Jewel</p>
      </footer>
    </div>
  );
};

export default Footer;
