import Content from './content';
import LeftSidebar from './left-sidebar';
import RightSidebar from './right-sidebar';

const Learn = ({ topics, content }: any) => {
  return (
    <main className="layout m-auto w-full max-w-[1250px] p-4 pt-0">
      <LeftSidebar topics={topics} />
      <Content content={content} />
      <RightSidebar />
    </main>
  );
};

export default Learn;
