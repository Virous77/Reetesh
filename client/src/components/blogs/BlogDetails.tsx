import { useParams } from "react-router-dom";
import { fetchData } from "../../api/api";
import { BlogType } from "../../interfaces/interface";
import { useQuery } from "react-query";
import Loader from "../layouts/UI/Loader";
import parse from "html-react-parser";
import "./Blog.scss";
import AuthorDetails from "./AuthorDetails";

const BlogDetails = () => {
  const { slug } = useParams();

  const { data, isLoading } = useQuery(
    [slug],
    (): Promise<BlogType> => fetchData(`articles/${slug}`),
    {
      staleTime: Infinity,
    }
  );

  if (isLoading) return <Loader />;

  return (
    <main className="blog-full-main">
      <div className="blog-full-wrap">
        <AuthorDetails data={data} />
        <h1>{data?.title}</h1>

        <div className="blog-body">{data && parse(data?.sanitizedHTML)} </div>
      </div>
    </main>
  );
};

export default BlogDetails;
