import { useParams } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projects';

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects[Number(id)];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
}