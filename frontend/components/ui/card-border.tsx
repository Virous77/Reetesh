const MainCard = ({ children }: { children: React.ReactNode }) => {
  const Ellipses = () => {
    const sharedClasses =
      'rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-heading';
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        </section>
      </div>
    );
  };

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto mb-3 w-[97%] rounded-lg border border-dashed border-zinc-300 px-4 sm:px-6 md:mb-0 md:w-full md:px-8 dark:border-zinc-800">
      <div className="absolute top-4 left-0 -z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 dark:bg-zinc-700"></div>
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 dark:bg-zinc-700"></div>
      <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
        <Ellipses />
        <div className="relative z-20 mx-auto py-8">{children}</div>
      </div>
    </div>
  );

  return (
    <Container>
      <div className="center w-full p-2">{children}</div>
    </Container>
  );
};

export default MainCard;
