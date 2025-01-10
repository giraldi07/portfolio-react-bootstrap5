export interface NavItem {
  title: string;
  path: string;
  icon: string;
}

export interface Settings {
  theme: 'light' | 'dark';
  cursorStyle: 'default' | 'dot' | 'border';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Project {
  id: string; // Properti id wajib ada
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string; // Opsional
  content?: string; // Opsional, untuk halaman detail
}

export interface Update {
  id: string; // Menambahkan properti id
  type: 'blog' | 'speaking' | 'project';
  title: string;
  date: string;
  description: string;
  link?: string; // Opsional, jika ada link eksternal
  content?: string; // Opsional, untuk halaman detail
}