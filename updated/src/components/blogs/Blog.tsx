import "./Blog.scss";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";
import { BlogType } from "../../interfaces/interface";
import Loader from "../layouts/UI/Loader";
import react from "../../assets/react.svg";
import Author from "./Author";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data, isLoading } = useQuery(
    ["blog"],
    (): Promise<BlogType[]> => fetchData("/articles")
  );

  if (isLoading) return <Loader />;

  return (
    <main className="blog-main">
      <div className="blog-wrap">
        {data &&
          data.length > 0 &&
          data?.map((blog) => (
            <Link to={`/blog/${blog.slug}`} key={blog._id}>
              <div className="blog-sub">
                <img src={react} alt={blog.title} className="thumbnail" />

                <div className="blog-details">
                  <Author date={blog.createdAt} />
                  <h1>{blog.title}</h1>
                  <p>
                    {blog.description.length > 100
                      ? `${blog.description.substring(0, 100)}...`
                      : blog.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
};

export default Blog;
