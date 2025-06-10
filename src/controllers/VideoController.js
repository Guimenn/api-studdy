import {
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
} from '../models/Video.js';
import fetch from 'node-fetch';

async function getAllVideosController(req, res) {
    try {
        const videos = await getAllVideos();
        return res.status(200).json(videos);
    } catch (error) {
        console.error('Error fetching videos:', error);
        return res.status(500).json({ message: 'Error fetching videos' });
    }
}

async function getVideoByIdController(req, res) {
    try {
        const video = await getVideoById(parseInt(req.params.videoId));

        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        return res.status(200).json(video);
    } catch (error) {
        console.error('Error fetching video:', error);
        return res.status(500).json({ message: 'Error fetching video' });
    }
}

async function createVideoController(req, res) {
    try {
        const { videoUrl } = req.body;
        if (!videoUrl) {
            return res.status(400).json({ message: 'videoUrl field is required.' });
        }

        function extractVideoId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
        }

        const videoId = extractVideoId(videoUrl);
        if (!videoId) {
            return res.status(400).json({ message: 'Invalid YouTube URL.' });
        }

        const apiKey = process.env.YOUTUBE_API_KEY;
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails&key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            return res.status(404).json({ message: 'Video not found on YouTube API.' });
        }

        const videoInfo = data.items[0];
        const duration = videoInfo.contentDetails.duration;
        const minutes = Math.floor(parseInt(duration.match(/PT(\d+)M/)?.[1] || 0));
        const seconds = parseInt(duration.match(/PT(?:\d+M)?(\d+)S/)?.[1] || 0);

        const videoData = {
            videoUrl,
            title_video: videoInfo.snippet.title,
            name_channel: videoInfo.snippet.channelTitle,
            duration_video: `${minutes}:${seconds.toString().padStart(2, '0')}`,
            font: 'YouTube',
            description: videoInfo.snippet.description,
            thumbnail: videoInfo.snippet.thumbnails.high.url,
            videoId: videoId
        };

        const video = await createVideo(videoData);
        return res.status(201).json(video);
    } catch (error) {
        console.error('Error creating video:', error);
        return res.status(500).json({ message: 'Error creating video', details: error.message });
    }
}

async function updateVideoController(req, res) {
    try {
        const video = await updateVideo(req.params.videoId, req.body);
        return res.status(200).json(video);
    } catch (error) {
        console.error('Error updating video:', error);
        return res.status(500).json({ message: 'Error updating video' });
    }
}

async function deleteVideoController(req, res) {
    try {
        const videoId = parseInt(req.params.videoId, 10);
        const video = await deleteVideo(videoId);
        return res.status(200).json(video);
    } catch (error) {
        console.error('Error deleting video:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

export {
    getAllVideosController,
    getVideoByIdController,
    createVideoController,
    updateVideoController,
    deleteVideoController,
};