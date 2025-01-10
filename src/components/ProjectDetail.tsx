import { Link } from 'react-router-dom';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    content?: string; // Konten HTML
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

          {/* Konten lengkap (gunakan dangerouslySetInnerHTML) */}
          {project.content && (
            <div
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link ke proyek (jika ada) */}
          {project.link && (
            <a
              href={project.link}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Visit Project →
            </a>
          )}

          {/* Tombol kembali */}
          <div className="mt-6">
            <Link
              to="/portfolio"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}