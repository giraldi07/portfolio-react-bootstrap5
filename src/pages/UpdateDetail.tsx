import { useParams } from 'react-router-dom';
import UpdateDetail from '../components/UpdateDetail';
import { updates } from '../data/updates';

export default function UpdateDetailPage() {
  const { id } = useParams<{ id: string }>();
  const update = updates[Number(id)];

  if (!update) {
    return <div>Update not found</div>;
  }

  return <UpdateDetail update={update} />;
}