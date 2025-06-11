import prisma from '../../prisma/client.js';

/**
 * Model para operações relacionadas a resumos educacionais
 * Gerencia CRUD de resumos criados por professores para turmas e disciplinas específicas
 */

/**
 * Obtém todos os resumos do sistema
 * @returns {Array} - Lista de resumos com informações de professor, disciplina, turma e conteúdo
 */
async function getAllResumes() {
    return await prisma.teacherSubjectClassResume.findMany({
        select: {
            id: true,
            teacher_id: true,
            subject_id: true,
            class_id: true,
            resume_id: true,
            created_at: true,
            modified_at: true,
            teacher: {
                select: {
                    id: true,
                    user: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                }
            },
            subject: {
                select: {
                    id: true,
                    name: true
                }
            },
            class: {
                select: {
                    id: true,
                    name: true,
                    shift: true,
                    course: true
                }
            },
            resume: {
                select: {
                    id: true,
                    title: true,
                    icon: true,
                    description: true,
                    resume: true,
                    created_at: true,
                    modified_at: true
                }
            }
        },
    });
}

async function getResumeById(resume_id) {
    try {
        const resume = await prisma.teacherSubjectClassResume.findFirst({
            where: { resume_id: resume_id },
            select: {
                id: true,
                teacher_id: true,
                subject_id: true,
                class_id: true,
                resume_id: true,
                created_at: true,
                modified_at: true,
                teacher: {
                    select: {
                        id: true,
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                },
                subject: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                class: {
                    select: {
                        id: true,
                        name: true,
                        shift: true,
                        course: true
                    }
                },
                resume: {
                    select: {
                        id: true,
                        title: true,
                        icon: true,
                        description: true,
                        resume: true,
                        created_at: true,
                        modified_at: true
                    }
                }
            },
        });
        return resume;
    } catch (error) {
        console.log('Error fetching resume:', error);
        throw error;
    }
}

async function createResume(resumeData) {
    try {
        // Verificar se teacher, subject e class existem
        const teacher = await prisma.teacher.findUnique({
            where: { id: resumeData.teacher_id }
        });
        if (!teacher) {
            throw { status: 404, message: 'Teacher not found' };
        }

        const subject = await prisma.subject.findUnique({
            where: { id: resumeData.subject_id }
        });
        if (!subject) {
            throw { status: 404, message: 'Subject not found' };
        }

        const classEntity = await prisma.class.findUnique({
            where: { id: resumeData.class_id }
        });
        if (!classEntity) {
            throw { status: 404, message: 'Class not found' };
        }

        // Primeiro criar o resume
        const newResume = await prisma.resume.create({
            data: {
                title: resumeData.title,
                icon: resumeData.icon,
                description: resumeData.description,
                resume: resumeData.resume,
                created_at: new Date(),
                modified_at: new Date()
            }
        });

        // Depois criar o relacionamento
        const relationship = await prisma.teacherSubjectClassResume.create({
            data: {
                teacher_id: resumeData.teacher_id,
                subject_id: resumeData.subject_id,
                class_id: resumeData.class_id,
                resume_id: newResume.id,
                created_at: new Date(),
                modified_at: new Date()
            },
            select: {
                id: true,
                teacher_id: true,
                subject_id: true,
                class_id: true,
                resume_id: true,
                created_at: true,
                modified_at: true,
                resume: {
                    select: {
                        id: true,
                        title: true,
                        icon: true,
                        description: true,
                        resume: true,
                        created_at: true,
                        modified_at: true
                    }
                }
            },
        });
        
        return relationship;
    } catch (error) {
        if (error.status === 404) {
            throw error;
        }
        console.error('Detailed error while creating resume:', error);
        throw { 
            status: 500, 
            message: 'Error creating resume',
            details: error.message || 'Unknown error'
        };
    }
}

async function updateResume(resume_id, resumeData) {
    try {
        // Verificar se o relacionamento existe
        const existingRelationship = await prisma.teacherSubjectClassResume.findFirst({
            where: { resume_id: resume_id }
        });
        if (!existingRelationship) {
            throw { status: 404, message: 'Resume relationship not found' };
        }

        // Verificar se teacher, subject e class existem (se fornecidos)
        if (resumeData.teacher_id) {
            const teacher = await prisma.teacher.findUnique({
                where: { id: resumeData.teacher_id }
            });
            if (!teacher) {
                throw { status: 404, message: 'Teacher not found' };
            }
        }

        if (resumeData.subject_id) {
            const subject = await prisma.subject.findUnique({
                where: { id: resumeData.subject_id }
            });
            if (!subject) {
                throw { status: 404, message: 'Subject not found' };
            }
        }

        if (resumeData.class_id) {
            const classEntity = await prisma.class.findUnique({
                where: { id: resumeData.class_id }
            });
            if (!classEntity) {
                throw { status: 404, message: 'Class not found' };
            }
        }

        // Atualizar o resume
        if (resumeData.title || resumeData.icon || resumeData.description || resumeData.resume) {
            await prisma.resume.update({
                where: { id: resume_id },
                data: {
                    ...(resumeData.title && { title: resumeData.title }),
                    ...(resumeData.icon && { icon: resumeData.icon }),
                    ...(resumeData.description && { description: resumeData.description }),
                    ...(resumeData.resume && { resume: resumeData.resume }),
                    modified_at: new Date()
                }
            });
        }

        // Atualizar o relacionamento se necessário
        const updatedRelationship = await prisma.teacherSubjectClassResume.update({
            where: { id: existingRelationship.id },
            data: {
                ...(resumeData.teacher_id && { teacher_id: resumeData.teacher_id }),
                ...(resumeData.subject_id && { subject_id: resumeData.subject_id }),
                ...(resumeData.class_id && { class_id: resumeData.class_id }),
                modified_at: new Date()
            },
            select: {
                id: true,
                teacher_id: true,
                subject_id: true,
                class_id: true,
                resume_id: true,
                created_at: true,
                modified_at: true,
                resume: {
                    select: {
                        id: true,
                        title: true,
                        icon: true,
                        description: true,
                        resume: true,
                        created_at: true,
                        modified_at: true
                    }
                }
            }
        });
        
        return updatedRelationship;
    } catch (error) {
        if (error.status === 404) {
            throw error;
        }
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Resume not found' };
        }
        console.error('Error updating resume:', error);
        throw { status: 500, message: 'Error updating resume' };
    }
}

async function deleteResume(id) {
    try {
        // Primeiro deletar o relacionamento
        const existingRelationship = await prisma.teacherSubjectClassResume.findFirst({
            where: { resume_id: id }
        });
        
        if (!existingRelationship) {
            throw { status: 404, message: 'Resume relationship not found' };
        }
        
        await prisma.teacherSubjectClassResume.delete({
            where: { id: existingRelationship.id }
        });
        
        // Depois deletar o resume
        const deletedResume = await prisma.resume.delete({
            where: { id: id },
        });
        
        return deletedResume;
    } catch (error) {
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Resume not found' };
        }
        console.error('Error deleting resume:', error);
        throw { status: 500, message: 'Error deleting resume' };
    }
}

export {
    getAllResumes,
    getResumeById,
    createResume,
    updateResume,
    deleteResume,
};
