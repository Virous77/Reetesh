import Link from "next/link";
import Social from "../social/social";
import Tab from "../tab/tab";

const Author = () => {
  return (
    <section className=" relative md:h-full pt-[70px] pb-6 md:pb-0 ">
      <div>
        <Link href="/">
          <h1 className=" text-[40px] md:text-[50px] font-[600] tracking-tight  md:tracking-tighter leading-tight">
            Reetesh Kumar
          </h1>
        </Link>

        <p className=" mt-2 md:mt-0 text-[18px] md:text-[20px] font-[500] tracking-tight md:tracking-tight leading-[1.1]">
          Experienced Full-Stack Engineer
        </p>
        <p className=" mt-8 w-[95%] md:w-[85%]">
          I specialize in constructing outstanding and user-friendly digital
          experiences for the web as a full-stack engineer
        </p>
      </div>

      <Tab />
      <Social />
    </section>
  );
};

export default Author;
