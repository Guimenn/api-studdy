import prisma from '../../prisma/client.js';

async function checkDuplicateUrl(videoUrl) {
    const existingVideo = await prisma.video_assignment.findFirst({
        where: { videoUrl },
    });
    return existingVideo !== null;
}

async function getAllVideos() {
    return await prisma.video_assignment.findMany({
        select: {
            id: true,
            videoUrl: true,
            title_video: true,
            name_channel: true,
            duration_video: true,
            font: true,
            description: true,
            thumbnail: true,
            videoId: true,
            created_at: true,
            modified_at: true
        },
    });
}

async function getVideoById(video_id) {
    try {
        const video = await prisma.video_assignment.findUnique({
            where: { id: video_id },
            select: {
                id: true,
                videoUrl: true,
                title_video: true,
                name_channel: true,
                duration_video: true,
                font: true,
                description: true,
                thumbnail: true,
                videoId: true,
                created_at: true,
                modified_at: true
            },
        });
        return video;
    } catch (error) {
        console.log('Error fetching video:', error);
        throw error;
    }
}

async function createVideo(videoData) {
    try {
        const isDuplicate = await checkDuplicateUrl(videoData.videoUrl);
        if (isDuplicate) {
            throw { status: 409, message: 'Video with this URL already exists' };
        }

        return await prisma.video_assignment.create({
            data: {
                ...videoData,
                created_at: new Date(),
                modified_at: new Date()
            },
            select: {
                id: true,
                videoUrl: true,
                created_at: true,
                modified_at: true
            },
        });
    } catch (error) {
        if (error.status === 409) {
            throw error;
        }
        console.error('Detailed error while creating video:', error);
        throw { 
            status: 500, 
            message: 'Error creating video',
            details: error.message || 'Unknown error'
        };
    }
}

async function updateVideo(video_id, videoData) {
    try {
        if (videoData.videoUrl) {
            const existingVideo = await prisma.video_assignment.findFirst({
                where: {
                    videoUrl: videoData.videoUrl,
                    id: { not: video_id }
                }
            });
            if (existingVideo) {
                throw { status: 409, message: 'Video with this URL already exists' };
            }
        }

        const updatedVideo = await prisma.video_assignment.update({
            where: { id: video_id },
            data: {
                ...videoData,
                modified_at: new Date()
            },
            select: {
                id: true,
                videoUrl: true,
                modified_at: true
            },
        });
        return updatedVideo;
    } catch (error) {
        if (error.status === 409) {
            throw error;
        }
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Video not found' };
        }
        console.error('Error updating video:', error);
        throw { status: 500, message: 'Error updating video' };
    }
}

async function deleteVideo(id) {
    try {
        const deletedVideo = await prisma.video_assignment.delete({
            where: { id: id },
        });
        return deletedVideo;
    } catch (error) {
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Video not found' };
        }
        console.error('Error deleting video:', error);
        throw { status: 500, message: 'Error deleting video' };
    }
}

export {
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
};
