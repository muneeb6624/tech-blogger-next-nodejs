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
  
  useEffect(() => {
    const url = API_BASE_URL + '/blogs';
    dispatch(fetchBlogs(url));
  }, [dispatch]);

  
  if (loading){
    return(
      <Loader />
    )
  } 

  if (error) return <p>Error: {error}</p>;

  // Ensure we're working with a copy of the blogs array
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <div className="bg-white mt-48 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-11 font-extrabold">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {latestBlogs.length > 0 ? (
          latestBlogs.map((blog) => (
            <CustomCard
              key={blog._id}
              heading={blog.blogTitle}
              para={blog.description}
              src={blog.coverImg}
              subtitle={blog.category}
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
