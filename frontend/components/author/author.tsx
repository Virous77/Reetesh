import Social from "../social/social";
import Tab from "../tab/tab";

const Author = () => {
  return (
    <section className=" relative md:h-full pt-[70px] pb-6 md:pb-0 ">
      <div>
        <h1 className=" text-[40px] md:text-[50px] font-[600] tracking-tight  md:tracking-tighter leading-tight">
          Reetesh Kumar
        </h1>

        <p className=" mt-2 md:mt-0 text-[18px] md:text-[20px] font-[500] tracking-tight md:tracking-tight leading-[1.1]">
          Experienced Full-Stack Engineer
        </p>
        <p className=" mt-8 w-[95%] md:w-[85%]">
          I specialize in creating exceptional and user-friendly digital
          experiences for the web.
        </p>
      </div>

      <Tab />
      <Social styles="mt-8 md:absolute left-0 bottom-12 z-10" />
    </section>
  );
};

export default Author;
