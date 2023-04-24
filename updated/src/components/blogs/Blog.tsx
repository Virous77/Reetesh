import "./Blog.scss";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";

const Blog = () => {
  const { data, isLoading } = useQuery(["blog"], () => fetchData("/articles"));

  console.log(data);

  return <div>Blog</div>;
};

export default Blog;
