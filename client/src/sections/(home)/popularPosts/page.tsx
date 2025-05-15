'use client'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { fetchBlogs } from '../../../redux/slice/blogSlice';
import CustomCard from "../../../components/custom/card";
import { useEffect } from 'react';
import { API_BASE_URL } from '@/config';
import { Loader } from '@/components/custom/loader';

function PopularPosts() {
  const dispatch: AppDispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state: RootState) => state.blogs);
console.log("blogs ", blogs)
  useEffect(() => {
    
    const url = API_BASE_URL + '/blogs';
    dispatch(fetchBlogs(url));
  },[]);


  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white mt-48 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-11 font-extrabold">Popular Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {loading ? <Loader /> :  blogs?.length > 0 ? (
          blogs?.map((blog) => (
            <CustomCard
              key={blog?._id}
              heading={blog?.blogTitle}
              para={blog?.description}
              src={blog?.coverImg}
              subtitle={blog?.category}
            />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}

export default PopularPosts;

