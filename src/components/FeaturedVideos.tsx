
import React from 'react';
import { Video } from '@/data/videos';
import VideoCard from './VideoCard';
import { ScrollArea } from "@/components/ui/scroll-area";

interface FeaturedVideosProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

const FeaturedVideos = ({ videos, onSelectVideo }: FeaturedVideosProps) => {
  if (videos.length === 0) return null;
  
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
      <ScrollArea className="w-full whitespace-nowrap pb-6">
        <div className="flex space-x-4">
          {videos.map((video) => (
            <div key={video.id} className="w-[300px] flex-shrink-0">
              <VideoCard 
                video={video} 
                onClick={() => onSelectVideo(video)} 
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FeaturedVideos;
