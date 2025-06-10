import prisma from '../../prisma/client.js';

// Funções de estatísticas do aluno

// Calcula a média de acertos do aluno
async function averageCorrectResponses(student) {
	try {
		const attempts = await prisma.quiz_attempt.findMany({
			where: {
				student_id: student.id,
				status: 'completed',
			},
			include: {
				question_responses: true,
			},
		});

		const total = attempts.flatMap((a) => a.question_responses).length;
		const correct = attempts
			.flatMap((a) => a.question_responses)
			.filter((r) => r.is_correct).length;

		const accuracy = total > 0 ? (correct / total) * 100 : 0;
		return Math.round(accuracy * 100) / 100; // Arredondar para 2 casas decimais
	} catch (error) {
		throw error;
	}
}

// Quantidade de quizzes disponíveis e concluidos
async function availableQuizzesXCompletedQuizzes(student) {
	try {
		const availableQuizzes = await prisma.quiz.count({
			where: {
				visibility: 'public',
				teacher_subject_class: { class_id: student.class_id },
			},
		});

		const completedQuizzes = await prisma.quiz_attempt.count({
			where: {
				student_id: student.id,
				status: 'completed',
			},
		});

		return { completedQuizzes, availableQuizzes };
	} catch (error) {
		throw error;
	}
}

// Quantidade de quizzes completados por materia
async function completedQuizzesBySubject(studentId) {
	try {
		const student = await prisma.student.findUnique({
			where: { id: studentId },
			select: { class_id: true },
		});

		if (!student) {
			throw new Error('Student not found');
		}

		// Buscar todas as matérias disponíveis para a turma
		const subjectsWithQuizzes =
			await prisma.relationship_teacher_subject_class.findMany({
				where: {
					class_id: student.class_id,
				},
				include: {
					teacher_subject: {
						include: {
							subject: true,
						},
					},
					quizzes: {
						where: {
							visibility: 'public',
						},
					},
				},
			});

		// Buscar quizzes completados pelo estudante
		const completedQuizzes = await prisma.quiz_attempt.findMany({
			where: {
				student_id: studentId,
				status: 'completed',
			},
			include: {
				quiz: {
					include: {
						teacher_subject_class: {
							include: {
								teacher_subject: {
									include: {
										subject: true,
									},
								},
							},
						},
					},
				},
			},
		});

		// Calcular estatísticas por matéria
		const subjectStats = subjectsWithQuizzes.map((relationshipClass) => {
			const subject = relationshipClass.teacher_subject.subject;
			const availableQuizzes = relationshipClass.quizzes.length;

			const completedQuizzesCount = completedQuizzes.filter(
				(attempt) =>
					attempt.quiz.teacher_subject_class.teacher_subject.subject
						.id === subject.id,
			).length;

			const completionPercentage =
				availableQuizzes > 0
					? Math.round(
							(completedQuizzesCount / availableQuizzes) *
								100 *
								100,
						) / 100
					: 0;

			return {
				subjectName: subject.name,
				completedQuizzes: completedQuizzesCount,
				availableQuizzes: availableQuizzes,
				completionPercentage: completionPercentage,
			};
		});

		return subjectStats;
	} catch (error) {
		throw error;
	}
}

// Tempo gasto nos quizzes
async function timeSpentOnQuizzes(studentId) {
	try {
		const attempts = await prisma.quiz_attempt.findMany({
			where: {
				student_id: studentId,
				status: 'completed',
			},
			select: {
				started_at: true,
				finished_at: true,
			},
		});

		const totalMinutes = attempts.reduce((total, attempt) => {
			if (attempt.started_at && attempt.finished_at) {
				const startTime = new Date(attempt.started_at);
				const endTime = new Date(attempt.finished_at);
				const durationMinutes = Math.floor(
					(endTime - startTime) / (1000 * 60),
				);
				return total + (durationMinutes > 0 ? durationMinutes : 0);
			}
			return total;
		}, 0);

		return totalMinutes;
	} catch (error) {
		throw error;
	}
}

// Ultimos quizzes completados
async function lastsCompletedQuizzes(studentId, limit = 5) {
	try {
		const attempts = await prisma.quiz_attempt.findMany({
			where: {
				student_id: studentId,
				status: 'completed',
			},
			include: {
				quiz: {
					include: {
						teacher_subject_class: {
							include: {
								teacher_subject: {
									include: {
										subject: true,
									},
								},
							},
						},
					},
				},
			},
			orderBy: {
				finished_at: 'desc',
			},
			take: limit,
		});

		return attempts.map((attempt) => {
			const timeSpent =
				attempt.started_at && attempt.finished_at
					? Math.floor(
							(new Date(attempt.finished_at) -
								new Date(attempt.started_at)) /
								(1000 * 60),
						)
					: 0;

			return {
				quizId: attempt.quiz.id,
				quizTitle: attempt.quiz.title,
				subjectName:
					attempt.quiz.teacher_subject_class.teacher_subject.subject
						.name,
				score: parseFloat(attempt.total_score),
				maxScore: parseFloat(attempt.quiz.max_points),
				scorePercentage:
					attempt.quiz.max_points > 0
						? Math.round(
								(attempt.total_score /
									attempt.quiz.max_points) *
									100 *
									100,
							) / 100
						: 0,
				completedAt: attempt.finished_at,
				timeSpentMinutes: timeSpent,
			};
		});
	} catch (error) {
		throw error;
	}
}

// Funções de estatísticas do Professor

// Calcula o total de alunos de todas as turmas que o professor leciona
async function countStudentsByTeacherId(teacherId) {
	const result = await prisma.student.count({
		where: {
			class: {
				teacher_subject_classes: {
					some: {
						teacher_subject: {
							teacher_id: teacherId,
						},
					},
				},
			},
		},
	});

	return result;
}

// Calcula o percentual de quizzes públicos que receberam ao menos uma tentativa concluída
async function getQuizCompletionRate(teacherId) {
	// Total de quizzes públicos do professor
	const totalPublicQuizzes = await prisma.quiz.count({
		where: {
			visibility: 'public',
			teacher_subject_class: {
				teacher_subject: {
					teacher_id: teacherId,
				},
			},
		},
	});

	if (totalPublicQuizzes === 0) {
		return 0;
	}

	// Quizzes públicos que receberam ao menos uma tentativa concluída
	const completedQuizzes = await prisma.quiz.count({
		where: {
			visibility: 'public',
			teacher_subject_class: {
				teacher_subject: {
					teacher_id: teacherId,
				},
			},
			quiz_attempts: {
				some: {
					status: 'completed',
				},
			},
		},
	});

	return (completedQuizzes / totalPublicQuizzes) * 100;
}

// Calcula a média global de total_score de todas as tentativas concluídas
async function getClassAverageScoreGlobal(teacherId) {
	try {
		// Buscar todas as tentativas concluídas com os quizzes
		const attempts = await prisma.quiz_attempt.findMany({
			where: {
				status: 'completed',
				quiz: {
					teacher_subject_class: {
						teacher_subject: {
							teacher_id: teacherId,
						},
					},
				},
			},
			include: {
				quiz: {
					select: {
						max_points: true
					}
				}
			}
		});

		if (attempts.length === 0) {
			return 0;
		}

		// Calcular a média de porcentagem
		const totalPercentage = attempts.reduce((sum, attempt) => {
			const score = parseFloat(attempt.total_score);
			const maxPoints = parseFloat(attempt.quiz.max_points);
			// Garantir que a porcentagem não ultrapasse 100%
			const percentage = maxPoints > 0 ? Math.min((score / maxPoints) * 100, 100) : 0;
			return sum + percentage;
		}, 0);

		return Math.round((totalPercentage / attempts.length) * 100) / 100;
	} catch (error) {
		throw error;
	}
}

// Calcula o percentual de acertos por matéria que o professor leciona em suas turmas
async function getPerformanceBySubject(teacherId) {
	// Busca todas as matérias do professor com suas respostas
	const subjectsData = await prisma.subject.findMany({
		where: {
			teacher_subjects: {
				some: {
					teacher_id: teacherId,
				},
			},
		},
		include: {
			teacher_subjects: {
				where: {
					teacher_id: teacherId,
				},
				include: {
					teacher_subject_classes: {
						include: {
							quizzes: {
								include: {
									quiz_attempts: {
										where: {
											status: 'completed',
										},
										include: {
											question_responses: true,
										},
									},
								},
							},
						},
					},
				},
			},
		},
	});

	const performanceBySubject = [];

	for (const subject of subjectsData) {
		let totalResponses = 0;
		let correctResponses = 0;

		// Percorre todas as relações professor-matéria
		for (const teacherSubject of subject.teacher_subjects) {
			// Percorre todas as turmas da matéria
			for (const teacherSubjectClass of teacherSubject.teacher_subject_classes) {
				// Percorre todos os quizzes da turma
				for (const quiz of teacherSubjectClass.quizzes) {
					// Percorre todas as tentativas concluídas do quiz
					for (const attempt of quiz.quiz_attempts) {
						// Conta todas as respostas da tentativa
						for (const response of attempt.question_responses) {
							totalResponses++;
							if (response.is_correct) {
								correctResponses++;
							}
						}
					}
				}
			}
		}

		const accuracy =
			totalResponses > 0 ? (correctResponses / totalResponses) * 100 : 0;

		performanceBySubject.push({
			subjectName: subject.name,
			accuracy: parseFloat(accuracy.toFixed(1)),
		});
	}

	return performanceBySubject;
}

// Função de estatísticas do admin
async function getSystemStatistics() {
	const usersCount = await prisma.user.count();
	const teachersCount = await prisma.teacher.count();
	const studentsCount = await prisma.student.count();

	const result = {
		totalUsers: usersCount,
		totalTeachers: teachersCount,
		totalStudents: studentsCount,
	};
	return result;
}

// Quizzes disponíveis para o aluno
async function availableQuizzes(studentId) {
	try {
		const student = await prisma.student.findUnique({
			where: { id: studentId },
			select: { class_id: true }
		});

		if (!student) {
			throw new Error('Student not found');
		}

		// Buscar todos os quizzes disponíveis para a turma do aluno
		const availableQuizzes = await prisma.quiz.count({
			where: {
				visibility: 'public',
				teacher_subject_class: {
					class_id: student.class_id
				}
			}
		});

		// Buscar os quizzes que o aluno já completou
		const completedQuizzes = await prisma.quiz_attempt.count({
			where: {
				student_id: studentId,
				status: 'completed'
			}
		});

		// Retorna apenas o número de quizzes disponíveis
		return availableQuizzes - completedQuizzes;
	} catch (error) {
		throw error;
	}
}

export {
	averageCorrectResponses,
	availableQuizzesXCompletedQuizzes,
	completedQuizzesBySubject,
	timeSpentOnQuizzes,
	lastsCompletedQuizzes,
	countStudentsByTeacherId,
	getQuizCompletionRate,
	getClassAverageScoreGlobal,
	getPerformanceBySubject,
	getSystemStatistics,
	availableQuizzes,
};
