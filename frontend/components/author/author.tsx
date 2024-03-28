import Social from '../social/social';
import Tab from '../tab/tab';

const Author = () => {
  return (
    <section className=" relative pb-6 pt-[70px] md:h-full md:pb-0 ">
      <div>
        <h1 className=" text-[40px] font-[600] leading-tight tracking-tight  md:text-[50px] md:tracking-tighter">
          Reetesh Kumar
        </h1>

        <p className=" mt-2 text-[18px] font-[500] leading-[1.1] tracking-tight md:mt-0 md:text-[20px] md:tracking-tight">
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
