import Learn from '@/components/learn/learn';

const topics = [
  {
    title: 'Introduction',
  },
  {
    title: 'Chapter 1',
  },
  {
    title: 'Chapter 2',
  },
  {
    title: 'Chapter 3',
  },
  {
    title: 'Chapter 4',
  },
  {
    title: 'Chapter 5',
  },
  {
    title: 'Chapter 6',
  },
  {
    title: 'Chapter 7',
  },
  {
    title: 'Chapter 8',
  },
  {
    title: 'Chapter 9',
  },
  {
    title: 'Chapter 10',
  },
  {
    title: 'Chapter 11',
  },
  {
    title: 'Chapter 12',
  },
  {
    title: 'Chapter 13',
  },
  {
    title: 'Chapter 14',
  },
  {
    title: 'Chapter 15',
  },
  {
    title: 'Chapter 16',
  },
  {
    title: 'Chapter 17',
  },
  {
    title: 'Chapter 18',
  },
  {
    title: 'Chapter 19',
  },
  {
    title: 'Chapter 20',
  },
  {
    title: 'Chapter 21',
  },
  {
    title: 'Chapter 22',
  },
];

const content = [
  {
    title: 'Introduction',
    content: 'This is the introduction',
  },
  {
    title: 'Chapter 1',
    content: 'This is chapter 1',
  },
  {
    title: 'Chapter 2',
    content: 'This is chapter 2',
  },
  {
    title: 'Chapter 3',
    content: 'This is chapter 3',
  },
  {
    title: 'Chapter 4',
    content: 'This is chapter 4',
  },
  {
    title: 'Chapter 5',
    content: 'This is chapter 5',
  },
  {
    title: 'Chapter 6',
    content: 'This is chapter 6',
  },
  {
    title: 'Chapter 7',
    content: 'This is chapter 7',
  },
  {
    title: 'Chapter 8',
    content: 'This is chapter 8',
  },
  {
    title: 'Chapter 9',
    content: 'This is chapter 9',
  },
  {
    title: 'Chapter 10',
    content: 'This is chapter 10',
  },
  {
    title: 'Chapter 11',
    content: 'This is chapter 11',
  },
  {
    title: 'Chapter 12',
    content: 'This is chapter 12',
  },
  {
    title: 'Chapter 13',
    content: 'This is chapter 13',
  },
  {
    title: 'Chapter 14',
    content: 'This is chapter 14',
  },
  {
    title: 'Chapter 15',
    content: 'This is chapter 15',
  },
  {
    title: 'Chapter 16',
    content: 'This is chapter 16',
  },
  {
    title: 'Chapter 17',
    content: 'This is chapter 17',
  },
  {
    title: 'Chapter 18',
    content: 'This is chapter 18',
  },
];

const LearnPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const currentContent = content.find(
    (item) => item.title.toLowerCase().replace(' ', '-') === id
  );

  return <Learn content={currentContent} topics={topics} />;
};

export default LearnPage;
