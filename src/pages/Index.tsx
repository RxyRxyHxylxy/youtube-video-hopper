
import React, { useState } from 'react';
import { videos, categories, Video } from '@/data/videos';
import VideoCard from '@/components/VideoCard';
import VideoPlayer from '@/components/VideoPlayer';
import FeaturedVideos from '@/components/FeaturedVideos';
import CategoryFilter from '@/components/CategoryFilter';
import { Youtube } from 'lucide-react';

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredVideos = videos.filter(video => video.featured);
  
  const filteredVideos = selectedCategory
    ? videos.filter(video => video.category === selectedCategory)
    : videos;

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Youtube className="h-8 w-8 text-red-600" />
            <h1 className="text-xl font-bold">VideoHub</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 md:px-6">
        {/* Featured Videos Section */}
        <FeaturedVideos 
          videos={featuredVideos} 
          onSelectVideo={handleSelectVideo} 
        />

        {/* Category Filter */}
        <div className="mb-6">
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>

        {/* All/Filtered Videos Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {selectedCategory ? `${selectedCategory} Videos` : 'All Videos'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredVideos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onClick={() => handleSelectVideo(video)}
              />
            ))}
          </div>
        </div>

        {/* Video Player Modal */}
        <VideoPlayer 
          video={selectedVideo} 
          isOpen={isVideoPlaying} 
          onClose={handleCloseVideo}
        />
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 VideoHub - Your YouTube Video Browser</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
