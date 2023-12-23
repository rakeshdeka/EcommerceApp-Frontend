
// import { Link } from 'react-router-dom';



function UserProfile() {

 

  return (
    <>
    <div className='h-[100vh] w-[100vw] flex text-xs p-2 pt-[80px]' >
      <div className=' h-[5%] border-b border-t border-black flex w-full justify-evenly'>
        <div className='w-[20%] border-r border-black flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
        <span>profile</span>
      </div>
      <div className='w-[20%] border-r border-black flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
        <span>order history</span>
      </div>
      <div className='w-[20%] border-r border-black flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
        <span>
          wishlist
        </span>
      </div>
      <div className='w-[20%] border-r border-black flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
        <span>
          address
        </span>
      </div>
      <div className='w-[20%] flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
        <span>
          settings
        </span>
      </div>
      <div></div>

      </div>
      


    </div>
    </>
   
  );
}

export default UserProfile;
