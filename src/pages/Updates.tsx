import { Link } from 'react-router-dom';
import { updates } from '../data/updates';

export default function Updates() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Latest Updates</h1>
      <div className="space-y-6">
        {updates.map((update, index) => (
          <Link
            key={index}
            to={`/updates/${index}`}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow block"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>{update.date}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{update.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{update.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}