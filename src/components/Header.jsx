import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";

const Header = () => {
  return (
    <div className='flex flex-col relative'>
      <div className='flex flex-col gap-8 bg-purple-600 rounded-3xl m-8 p-6 pb-80 justify-center items-center'>
        {/* Header nav */}
        <div className='container flex justify-between text-white'>
          <p className='text-xl font-bold'>Gadget Heaven</p>
          <nav className='flex gap-12'>
            <a href='#'>Home</a>
            <a href='#'>Statistics</a>
            <a href='#'>Dashboard</a>
          </nav>
          <div className='flex gap-4 items-center'>
            <a
              href='#'
              className='bg-white text-black rounded-full p-2'>
              <MdOutlineShoppingCart />{" "}
            </a>
            <a
              href='#'
              className='bg-white text-black rounded-full p-2'>
              {" "}
              <GoHeart />{" "}
            </a>
          </div>
        </div>
        {/* Hero content */}
        <div className='flex flex-col gap-8 items-center justify-center text-white max-w-screen-lg'>
          <h1 className='text-6xl font-bold text-center'>
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className='text-center max-w-screen-sm'>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className='text-xl font-bold text-purple-600 bg-white px-8 py-4 rounded-full'>
            Shop Now
          </button>
        </div>
      </div>
      <div className='w-[1110px] mx-auto rounded-3xl p-6 bg-white border-3 absolute bottom-0'>
        <img
          className='rounded-3xl'
          src='./images/banner.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
