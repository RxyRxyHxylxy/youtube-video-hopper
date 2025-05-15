
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { extractYoutubeVideoId, Video, categories } from '@/data/videos';

interface AddVideoFormProps {
  onAddVideo: (video: Video) => void;
}

const AddVideoForm = ({ onAddVideo }: AddVideoFormProps) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const videoId = extractYoutubeVideoId(videoUrl);
      
      if (!videoId) {
        toast.error("Invalid YouTube URL. Please check and try again.");
        setIsLoading(false);
        return;
      }
      
      // Use YouTube API to get video details (in a real app)
      // For this example, we'll create a placeholder with the video ID
      const newVideo: Video = {
        id: videoId,
        title: "User Added Video",  // In a real app, we'd fetch this from YouTube API
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        channel: "Custom Channel",
        views: "New",
        category: category,
        featured: false,
        userAdded: true
      };
      
      onAddVideo(newVideo);
      toast.success("Video added successfully!");
      setVideoUrl('');
    } catch (error) {
      toast.error("Failed to add video. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card p-4 rounded-lg border mb-8">
      <h2 className="text-2xl font-bold mb-4">Add YouTube Video</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <Input
              placeholder="Paste YouTube URL (e.g., https://www.youtube.com/watch?v=...)"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Video"}
        </Button>
      </form>
    </div>
  );
};

export default AddVideoForm;
