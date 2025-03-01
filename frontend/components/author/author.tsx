import Social from '../social/social';
import Tab from '../tab/tab';

const Author = () => {
  return (
    <section className="relative pt-[70px] pb-6 md:h-full md:pb-0">
      <div>
        <h1 className="text-[2.5rem] leading-tight font-[600] tracking-tight md:text-[3.15rem] md:tracking-tighter">
          Reetesh Kumar
        </h1>

        <p className="mt-2 text-[1.125rem] leading-[1.1] font-[500] tracking-tight md:mt-0 md:text-[1.25rem] md:tracking-tight">
          Experienced Full-Stack Engineer
        </p>
        <p className="mt-8 w-[95%] md:w-[85%]">
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
