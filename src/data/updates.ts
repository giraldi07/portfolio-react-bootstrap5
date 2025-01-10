export const updates = [
  {
    type: 'blog',
    title: "Understanding React Server Components",
    date: "March 15, 2024",
    description: "A deep dive into React Server Components and how they're changing the way we build web applications.",
    link: "#",
    content: `
      <h2 class="text-2xl font-bold mb-4">Introduction</h2>
      <p class="mb-4">React Server Components (RSC) are a new paradigm in React that allows developers to render components on the server, reducing the amount of JavaScript sent to the client.</p>
      <h2 class="text-2xl font-bold mb-4">Benefits</h2>
      <ul class="list-disc list-inside mb-4">
        <li>Improved performance by reducing client-side rendering</li>
        <li>Better SEO due to server-side rendering</li>
        <li>Simplified data fetching on the server</li>
      </ul>
      <h2 class="text-2xl font-bold mb-4">How It Works</h2>
      <p class="mb-4">RSC works by allowing components to be rendered on the server and sent to the client as HTML. This reduces the need for client-side JavaScript and improves load times.</p>
    `,
  },
  // Tambahkan update lainnya di sini
];