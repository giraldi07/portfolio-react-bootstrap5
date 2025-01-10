import { Link } from 'react-router-dom';

interface UpdateDetailProps {
  update: {
    type: string;
    title: string;
    date: string;
    description: string;
    link?: string;
    content?: string; // Konten HTML
  };
}

export default function UpdateDetail({ update }: UpdateDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>{update.date}</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{update.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{update.description}</p>

        {/* Konten lengkap (gunakan dangerouslySetInnerHTML) */}
        {update.content && (
          <div
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: update.content }}
          />
        )}

        {/* Link ke sumber (jika ada) */}
        {update.link && (
          <a
            href={update.link}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more →
          </a>
        )}

        {/* Tombol kembali */}
        <div className="mt-6">
          <Link
            to="/updates"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Updates
          </Link>
        </div>
      </div>
    </div>
  );
}