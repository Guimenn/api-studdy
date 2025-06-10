import prisma from '../../prisma/client.js';

async function checkDuplicateLink(link) {
    const existingContest = await prisma.contests.findFirst({
        where: { link },
    });
    return existingContest !== null;
}

async function getAllContests() {
    return await prisma.contests.findMany({
        select: {
            id: true,
            title: true,
            link: true,
            type: true,
            icon: true,
            color: true,
            description: true,
            date: true,
            created_at: true,
            modified_at: true
        },
    });
}

async function getContestById(contest_id) {
    try {
        const contest = await prisma.contests.findUnique({
            where: { id: contest_id },
            select: {
                id: true,
                title: true,
                link: true,
                type: true,
                icon: true,
                color: true,
                description: true,
                date: true,
                created_at: true,
                modified_at: true
            },
        });
        return contest;
    } catch (error) {
        console.log('Error fetching contest:', error);
        throw error;
    }
}

async function createContest(contestData) {
    try {
        const isDuplicate = await checkDuplicateLink(contestData.link);
        if (isDuplicate) {
            throw { status: 409, message: 'Contest with this link already exists' };
        }

        return await prisma.contests.create({
            data: {
                ...contestData,
                created_at: new Date(),
                modified_at: new Date()
            },
            select: {
                id: true,
                title: true,
                link: true,
                created_at: true,
                modified_at: true
            },
        });
    } catch (error) {
        if (error.status === 409) {
            throw error;
        }
        console.error('Detailed error while creating contest:', error);
        throw { 
            status: 500, 
            message: 'Error creating contest',
            details: error.message || 'Unknown error'
        };
    }
}

async function updateContest(contest_id, contestData) {
    try {
        if (contestData.link) {
            const existingContest = await prisma.contests.findFirst({
                where: {
                    link: contestData.link,
                    id: { not: contest_id }
                }
            });
            if (existingContest) {
                throw { status: 409, message: 'Contest with this link already exists' };
            }
        }

        const updatedContest = await prisma.contests.update({
            where: { id: contest_id },
            data: {
                ...contestData,
                modified_at: new Date()
            },
            select: {
                id: true,
                title: true,
                link: true,
                modified_at: true
            },
        });
        return updatedContest;
    } catch (error) {
        if (error.status === 409) {
            throw error;
        }
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Contest not found' };
        }
        console.error('Error updating contest:', error);
        throw { status: 500, message: 'Error updating contest' };
    }
}

async function deleteContest(id) {
    try {
        const deletedContest = await prisma.contests.delete({
            where: { id: id },
        });
        return deletedContest;
    } catch (error) {
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Contest not found' };
        }
        console.error('Error deleting contest:', error);
        throw { status: 500, message: 'Error deleting contest' };
    }
}

export {
    getAllContests,
    getContestById,
    createContest,
    updateContest,
    deleteContest,
};
