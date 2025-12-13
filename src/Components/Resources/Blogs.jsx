import React, {useState} from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFolderOpen, FaTags } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Use 'react-router-dom'

const blogs = [
  {
    image: 'https://images.unsplash.com/photo-1665567032056-4d22d92638da?q=80&w=1203&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Trusted Business Consulting Agency',
    author: 'FlyQuest Destination',
    date: 'October 16, 2023',
    category: 'Uncategorized',
    tags: 'Naturalization',
    excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, ',
    link: '/apply-now'
  },
  {
    image: 'https://images.unsplash.com/photo-1590108589108-3600131de843?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Let’s Travel Around The World',
    author: 'FlyQuest Destination',
    date: 'October 16, 2023',
    category: 'Citizenship, Visa Types',
    tags: 'Family Reunification',
    excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    link: '/apply-now'
  },
  {
    image: 'https://images.unsplash.com/photo-1526662075745-edd1c71a4cff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Immigration Expert In Professional',
    author: 'FlyQuest Destination',
    date: 'October 16, 2023',
    category: 'Work Visas',
    tags: 'Citizenship , Green Card',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est exercitationem dolor officiis reiciendis! At possimus numquam, amet, quae minima optio natus ullam hic pariatur, facere placeat! Corrupti, molestiae libero?'
  },
  {
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Immigration Expert In Professional',
    author: 'FlyQuest Destination',
    date: 'October 16, 2023',
    category: 'Work Visas',
    tags: 'Citizenship , Green Card',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est exercitationem dolor officiis reiciendis! At possimus numquam, amet, quae minima optio natus ullam hic pariatur, facere placeat! Corrupti, molestiae libero?'
  },
  {
    image: 'https://images.unsplash.com/photo-1587629988701-239f52fd6246?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Immigration Expert In Professional',
    author: 'FlyQuest Destination',
    date: 'October 16, 2023',
    category: 'Work Visas',
    tags: 'Citizenship , Green Card',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est exercitationem dolor officiis reiciendis! At possimus numquam, amet, quae minima optio natus ullam hic pariatur, facere placeat! Corrupti, molestiae libero?'
  },
  {
    image: 'https://images.unsplash.com/photo-1660814065563-943aada21d2e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Immigration Expert In Professional',
    author: 'FlyQuest Destination',
    date: 'October 16, 2023',
    category: 'Work Visas',
    tags: 'Citizenship , Green Card',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est exercitationem dolor officiis reiciendis! At possimus numquam, amet, quae minima optio natus ullam hic pariatur, facere placeat! Corrupti, molestiae libero?'
  },
  {
    image: 'https://images.unsplash.com/photo-1655722724447-2d2a3071e7f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Immigration Expert In Professional',
    author: 'FlyQuest Destination',
    date: 'October 16, 2023',
    category: 'Work Visas',
    tags: 'Citizenship , Green Card',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est exercitationem dolor officiis reiciendis! At possimus numquam, amet, quae minima optio natus ullam hic pariatur, facere placeat! Corrupti, molestiae libero?'
  }
];

const Blogs1 = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 unless showAll is true
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div className='px-4 py-8 mx-auto max-w-7xl'>
      <h2 className='text-3xl xl:text-5xl font-bold text-cyan-800 text-center mb-10'>Latest News & Articles</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
        {visibleBlogs.map((blog, id) => (
          <div key={id} className='bg-white rounded-xl shadow-md flex flex-col h-full overflow-hidden border border-gray-100'>
            <img src={blog.image} alt={blog.title} className='w-full h-56 object-cover rounded-t-2xl' />
            <div className='px-4 mt-2 pb-4 flex flex-col flex-1'>
              <h1 className='text-xl font-bold text-gray-900 mb-3'>{blog.title}</h1>
              <div className='flex items-center gap-2 text-black/80 font-medium text-sm mb-1'>
                <RiAccountCircleFill className='text-lg' />
                <span className=''>By {blog.author}</span>
              </div>
              <div className='flex items-center gap-2 text-black/80 font-medium text-sm mb-1'>
                <FaRegCalendarAlt className='text-base' />
                <span>{blog.date}</span>
              </div>
              <div className='flex items-center gap-2 text-black/80 font-medium text-sm mb-1'>
                <FaFolderOpen className='text-base' />
                <span>{blog.category}</span>
              </div>
              <div className='flex items-center gap-2 text-black/80 font-medium text-sm mb-4'>
                <FaTags className='text-base' />
                <span>
                  {blog.tags}
                </span>
              </div>
              <p className='text-base text-gray-800 flex-1 line-clamp-3'>{blog.excerpt}</p>
              <Link className='mt-4'>
                <button className="px-4 py-1 bg-sky-700 text-white rounded-lg text-base font-medium">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Show See More/Less button only if there are more than 3 blogs */}
      {blogs.length > 3 && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className=" text-lg text-sky-800 font-semibold active:text-sky-900"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs1;