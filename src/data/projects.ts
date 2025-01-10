export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Node.js, and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    content: `
      <h2 class="text-2xl font-bold mb-4">Overview</h2>
      <p class="mb-4">This project is a full-stack e-commerce platform designed to handle real-time inventory management, payment processing, and analytics. It was built using Next.js for the frontend, Node.js for the backend, and PostgreSQL for the database.</p>
      <h2 class="text-2xl font-bold mb-4">Features</h2>
      <ul class="list-disc list-inside mb-4">
        <li>Real-time inventory updates</li>
        <li>Secure payment processing with Stripe</li>
        <li>Analytics dashboard for sales and user behavior</li>
      </ul>
      <h2 class="text-2xl font-bold mb-4">Challenges</h2>
      <p class="mb-4">One of the main challenges was ensuring real-time updates across multiple users. This was solved using WebSocket for real-time communication.</p>
    `,
  },
  // Tambahkan proyek lainnya di sini
];