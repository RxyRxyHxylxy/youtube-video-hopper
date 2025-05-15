
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Video } from '@/data/videos';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
  className?: string;
}

const VideoCard = ({ video, onClick, className }: VideoCardProps) => {
  return (
    <Card 
      className={cn("overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]", className)}
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/640x360?text=Video+Thumbnail";
          }}
        />
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium line-clamp-2 text-sm">{video.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-muted-foreground text-xs">{video.channel}</p>
          <p className="text-muted-foreground text-xs">{video.views}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
