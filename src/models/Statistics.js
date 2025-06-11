import prisma from '../../prisma/client.js';

/**
 * Model para operações de estatísticas e métricas do sistema
 * Contém funções para calcular estatísticas de alunos, professores e quizzes
 * Inclui métricas de desempenho, progresso e análises de dados educacionais
 */

// Funções de estatísticas do aluno

/**
 * Calcula a média de acertos do aluno em todos os quizzes completados
 * @param {Object} student - Objeto do aluno
 * @returns {Number} - Percentual de acertos (0-100) com 2 casas decimais
 * @throws {Error} - Erro ao buscar dados ou calcular estatísticas
 */
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
								100,
						)
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
								100,
						)
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

		// Buscar os quizzes únicos que o aluno já completou
		const completedQuizzes = await prisma.quiz_attempt.findMany({
			where: {
				student_id: studentId,
				status: 'completed'
			},
			select: {
				quiz_id: true
			},
			distinct: ['quiz_id']
		});

		// Retorna apenas o número de quizzes disponíveis
		return availableQuizzes - completedQuizzes.length;
	} catch (error) {
		throw error;
	}
}

// Função para calcular estatísticas da turma
async function getClassStatistics(classId) {
	try {
		// Buscar todos os alunos da turma
		const students = await prisma.student.findMany({
			where: {
				class_id: classId
			},
			include: {
				user: {
					select: {
						name: true,
						email: true
					}
				},
				quiz_attempts: {
					where: {
						status: 'completed'
					},
					include: {
						quiz: {
							include: {
								teacher_subject_class: {
									include: {
										teacher_subject: {
											include: {
												subject: true
											}
										}
									}
								}
							}
						},
						question_responses: true
					}
				}
			}
		});

		// Estatísticas gerais
		const totalStudents = students.length;
		const totalQuizzes = await prisma.quiz.count({
			where: {
				teacher_subject_class: {
					class_id: classId
				},
				visibility: 'public'
			}
		});

		// Calcular estatísticas detalhadas por aluno
		const studentStats = students.map(student => {
			const attempts = student.quiz_attempts;
			const totalResponses = attempts.reduce((sum, attempt) => 
				sum + attempt.question_responses.length, 0);
			const correctResponses = attempts.reduce((sum, attempt) => 
				sum + attempt.question_responses.filter(r => r.is_correct).length, 0);
			
			// Calcular estatísticas por matéria para este aluno
			const subjectStats = {};
			attempts.forEach(attempt => {
				const subjectName = attempt.quiz.teacher_subject_class.teacher_subject.subject.name;
				if (!subjectStats[subjectName]) {
					subjectStats[subjectName] = {
						totalResponses: 0,
						correctResponses: 0,
						quizzesCompleted: 0
					};
				}
				subjectStats[subjectName].totalResponses += attempt.question_responses.length;
				subjectStats[subjectName].correctResponses += attempt.question_responses.filter(r => r.is_correct).length;
				subjectStats[subjectName].quizzesCompleted += 1;
			});

			// Calcular médias por matéria
			const subjectAverages = Object.entries(subjectStats).map(([subjectName, stats]) => ({
				subjectName,
				accuracy: stats.totalResponses > 0 ? (stats.correctResponses / stats.totalResponses) * 100 : 0,
				quizzesCompleted: stats.quizzesCompleted
			}));

			// Calcular tempo médio por quiz
			const averageTimePerQuiz = attempts.reduce((sum, attempt) => {
				if (attempt.started_at && attempt.finished_at) {
					const startTime = new Date(attempt.started_at);
					const endTime = new Date(attempt.finished_at);
					return sum + (endTime - startTime) / (1000 * 60); // em minutos
				}
				return sum;
			}, 0) / (attempts.length || 1);

			return {
				studentId: student.id,
				name: student.user.name,
				email: student.user.email,
				totalResponses,
				correctResponses,
				accuracy: totalResponses > 0 ? (correctResponses / totalResponses) * 100 : 0,
				quizzesCompleted: attempts.length,
				subjectAverages,
				averageTimePerQuiz: Math.round(averageTimePerQuiz)
			};
		});

		// Ordenar alunos por desempenho
		const sortedStudentStats = studentStats.sort((a, b) => b.accuracy - a.accuracy);

		// Calcular média geral da turma
		const totalResponses = studentStats.reduce((sum, stat) => sum + stat.totalResponses, 0);
		const totalCorrectResponses = studentStats.reduce((sum, stat) => sum + stat.correctResponses, 0);
		const classAverageAccuracy = totalResponses > 0 ? (totalCorrectResponses / totalResponses) * 100 : 0;

		// Calcular estatísticas por matéria
		const subjects = await prisma.subject.findMany({
			where: {
				teacher_subjects: {
					some: {
						teacher_subject_classes: {
							some: {
								class_id: classId
							}
						}
					}
				}
			},
			include: {
				teacher_subjects: {
					where: {
						teacher_subject_classes: {
							some: {
								class_id: classId
							}
						}
					},
					include: {
						teacher_subject_classes: {
							where: {
								class_id: classId
							},
							include: {
								quizzes: {
									where: {
										visibility: 'public'
									},
									include: {
										quiz_attempts: {
											where: {
												status: 'completed'
											},
											include: {
												question_responses: true
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});

		const subjectStats = subjects.map(subject => {
			let totalSubjectResponses = 0;
			let totalSubjectCorrectResponses = 0;
			let totalQuizzes = 0;
			let totalAttempts = 0;

			subject.teacher_subjects.forEach(teacherSubject => {
				teacherSubject.teacher_subject_classes.forEach(teacherSubjectClass => {
					teacherSubjectClass.quizzes.forEach(quiz => {
						totalQuizzes++;
						quiz.quiz_attempts.forEach(attempt => {
							totalAttempts++;
							totalSubjectResponses += attempt.question_responses.length;
							totalSubjectCorrectResponses += attempt.question_responses.filter(r => r.is_correct).length;
						});
					});
				});
			});

			return {
				subjectName: subject.name,
				totalResponses: totalSubjectResponses,
				correctResponses: totalSubjectCorrectResponses,
				accuracy: totalSubjectResponses > 0 ? (totalSubjectCorrectResponses / totalSubjectResponses) * 100 : 0,
				totalQuizzes,
				averageAttemptsPerQuiz: totalQuizzes > 0 ? totalAttempts / totalQuizzes : 0
			};
		});

		return {
			totalStudents,
			totalQuizzes,
			classAverageAccuracy: parseFloat(classAverageAccuracy.toFixed(1)),
			studentStats: sortedStudentStats.map(stat => ({
				...stat,
				accuracy: parseFloat(stat.accuracy.toFixed(1)),
				subjectAverages: stat.subjectAverages.map(subject => ({
					...subject,
					accuracy: parseFloat(subject.accuracy.toFixed(1))
				}))
			})),
			subjectStats: subjectStats.map(stat => ({
				...stat,
				accuracy: parseFloat(stat.accuracy.toFixed(1)),
				averageAttemptsPerQuiz: parseFloat(stat.averageAttemptsPerQuiz.toFixed(1))
			}))
		};
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
	getClassStatistics
};
