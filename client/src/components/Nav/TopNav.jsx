import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const TopNav = () => {
  return (
    <div className='xl:px-32 md:px-12 px-4 border-b border-gray-300 bg-yellow-500'>
        <div className="flex py-6 justify-between">
            <div className="uppercase font-semibold text-2xl mt-2">Online Store</div>
            <div className="">
                <div className="flex">
                    <div className="">                        
                        <div className="flex">                            
                            <div className="mt-2">
                                <FaRegUser className='h-8 w-auto'/>
                            </div>
                            <div className="ml-2">
                                <p className="">Welcome</p>
                                <div className="flex">
                                    <a href="">SignIn &nbsp;</a>
                                    <p className=""> / </p>
                                    <a href="">&nbsp; SignUp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-4 flex">
                        <div className="mt-2">
                            <FaCartShopping className='h-8 w-auto'/>
                        </div>
                        <div className="ml-4">
                            <div className="h-8 text-center pt-1 w-8 rounded-full bg-black text-white">5</div>
                            <h1 className="text-center">Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNav