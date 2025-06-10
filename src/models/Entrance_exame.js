import prisma from '../../prisma/client.js';

async function checkDuplicateLink(link) {
    const existingExam = await prisma.entrance_exam.findFirst({
        where: { link },
    });
    return existingExam !== null;
}

async function getAllEntranceExams() {
    return await prisma.entrance_exam.findMany({
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

async function getEntranceExamById(exam_id) {
    try {
        const exam = await prisma.entrance_exam.findUnique({
            where: { id: exam_id },
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
        return exam;
    } catch (error) {
        console.log('Error fetching entrance exam:', error);
        throw error;
    }
}

async function createEntranceExam(examData) {
    try {
        const isDuplicate = await checkDuplicateLink(examData.link);
        if (isDuplicate) {
            throw { status: 409, message: 'Entrance exam with this link already exists' };
        }

        return await prisma.entrance_exam.create({
            data: {
                ...examData,
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
        console.error('Detailed error while creating entrance exam:', error);
        throw { 
            status: 500, 
            message: 'Error creating entrance exam',
            details: error.message || 'Unknown error'
        };
    }
}

async function updateEntranceExam(exam_id, examData) {
    try {
        if (examData.link) {
            const existingExam = await prisma.entrance_exam.findFirst({
                where: {
                    link: examData.link,
                    id: { not: exam_id }
                }
            });
            if (existingExam) {
                throw { status: 409, message: 'Entrance exam with this link already exists' };
            }
        }

        const updatedExam = await prisma.entrance_exam.update({
            where: { id: exam_id },
            data: {
                ...examData,
                modified_at: new Date()
            },
            select: {
                id: true,
                title: true,
                link: true,
                modified_at: true
            },
        });
        return updatedExam;
    } catch (error) {
        if (error.status === 409) {
            throw error;
        }
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Entrance exam not found' };
        }
        console.error('Error updating entrance exam:', error);
        throw { status: 500, message: 'Error updating entrance exam' };
    }
}

async function deleteEntranceExam(id) {
    try {
        const deletedExam = await prisma.entrance_exam.delete({
            where: { id: id },
        });
        return deletedExam;
    } catch (error) {
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Entrance exam not found' };
        }
        console.error('Error deleting entrance exam:', error);
        throw { status: 500, message: 'Error deleting entrance exam' };
    }
}

export {
    getAllEntranceExams,
    getEntranceExamById,
    createEntranceExam,
    updateEntranceExam,
    deleteEntranceExam,
};
