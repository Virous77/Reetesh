import Learn from '@/components/learn/learn';

const LearnPage = ({ params }: { params: { id: string; name: string } }) => {
  const { id } = params;

  return <Learn id={id} />;
};

export default LearnPage;
