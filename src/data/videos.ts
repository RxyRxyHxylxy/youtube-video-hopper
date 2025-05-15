
export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: string;
  category: string;
  featured: boolean;
}

export const videos: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    channel: "Rick Astley",
    views: "1.2B views",
    category: "Music",
    featured: true
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Queen - Bohemian Rhapsody (Official Video)",
    thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg",
    channel: "Queen Official",
    views: "1.5B views",
    category: "Music",
    featured: true
  },
  {
    id: "jNQXAC9IVRw",
    title: "Me at the zoo",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    channel: "jawed",
    views: "245M views",
    category: "Entertainment",
    featured: false
  },
  {
    id: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE(강남스타일)",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    channel: "PSY",
    views: "4.6B views",
    category: "Music",
    featured: true
  },
  {
    id: "mj0XInqZMHY",
    title: "The Original Grumpy Cat",
    thumbnail: "https://img.youtube.com/vi/mj0XInqZMHY/maxresdefault.jpg",
    channel: "Will Braden",
    views: "16M views",
    category: "Pets",
    featured: false
  },
  {
    id: "XqZsoesa55w",
    title: "Baby Shark Dance",
    thumbnail: "https://img.youtube.com/vi/XqZsoesa55w/maxresdefault.jpg",
    channel: "Pinkfong",
    views: "11B views",
    category: "Kids",
    featured: true
  },
  {
    id: "kXYiU_JCYtU",
    title: "Linkin Park - Numb (Official Music Video)",
    thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/maxresdefault.jpg",
    channel: "Linkin Park",
    views: "1.9B views",
    category: "Music",
    featured: false
  },
  {
    id: "SxQjkCbZCm0",
    title: "DIY Science Experiments",
    thumbnail: "https://img.youtube.com/vi/SxQjkCbZCm0/maxresdefault.jpg",
    channel: "Science Fun",
    views: "8.5M views",
    category: "Education",
    featured: false
  }
];

export const categories = Array.from(new Set(videos.map(video => video.category)));
