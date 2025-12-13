
import { AiFillBilibili } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router';
const Header = () => {
    return (
        <div className="bg-gray-200">
            <div className=' max-w-6xl px-4 py-3 mx-auto'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4 xl:gap-8'>
                    <Link to={'/'}>
                        <div className='flex items-center gap-2'>
                            <img src="https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-12 h-12 rounded-full object-cover"></img>
                            {/* <AiFillBilibili className='text-emerald-800 size-12' /> */}
                            <div >
                                <p className='text-3xl lg:text-2xl font-bold text-sky-800'>FlyQuest</p>
                                <p className='font-bold text-black/60 text-[16px] lg:text-[14px]'>Destination</p>
                            </div>
                        </div>
                    </Link>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <div className='flex items-center gap-1 font-bold hover:scale-105 hover:text-sky-800 duration-300'>
                            <MdOutlineEmail className='size-5' />
                            <p className="text-lg lg:text-sm text-black/70">shahdat@gmail.com</p>
                        </div>
                    </a>
                    <div className='flex gap-4 sm:gap-24 xl:items-center lg:gap-6'>
                        <Link>
                            <div className='flex items-center gap-1 font-bold'>
                                <MdAddIcCall className='size-5 text-sky-800' />
                                <p className="text-lg lg:text-sm text-black/70">+8801885374041</p>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex flex-shrink-0 items-center gap-1 font-bold'>
                                <IoTimeSharp className='size-5 text-cyan-500 flex-shrink-0' />
                                <p className="text-lg lg:text-sm text-black/70">Daily 10am-7pm</p>
                            </div>
                        </Link>
                    </div>
                    <a href="https://www.facebook.com/">
                        <div className='flex items-center gap-1 font-bold hover:scale-105 hover:text-sky-800 duration-300'>
                            <FaFacebook className='size-5 text-blue-700' />
                            <p className="text-lg lg:text-sm text-black/70">facebook.com</p>
                        </div>
                    </a>
                    <div className='border px-3 py-1.5 rounded-lg text-sm bg-sky-900 font-bold text-white hover:scale-105 hover:bg-sky-950 transform duration-300'>
                        <Link to={'/apply-now'}>
                            <button>Book Free Consultation</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;