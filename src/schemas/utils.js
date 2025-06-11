/**
 * Utilitários de validação para schemas
 * Contém funções auxiliares reutilizáveis para validação de dados
 * NOTA: Algumas dessas funções são duplicatas dos utilitários em /src/utils/
 */

/**
 * Validação de CPF brasileiro
 * @param {string} rawCPF - CPF em formato string
 * @returns {Object} - Objeto com propriedades valid e formatted
 */
function validateCPF(rawCPF) {
	if (!rawCPF) {
		return { valid: false };
	}

	const digits = String(rawCPF).replace(/\D/g, '');

	if (!/^\d{11}$/.test(digits)) return { valid: false };

	if (/^(\d)\1{10}$/.test(digits)) return { valid: false };

	const calcCheckDigit = (base, factor) => {
		const total = base
			.split('')
			.reduce((sum, num, i) => sum + Number(num) * (factor - i), 0);
		const remainder = total % 11;
		return remainder < 2 ? 0 : 11 - remainder;
	};

	const baseNine = digits.slice(0, 9);
	const digit1 = calcCheckDigit(baseNine, 10);
	const digit2 = calcCheckDigit(baseNine + digit1, 11);
	const isValid = digits === baseNine + digit1 + digit2;

	return {
		valid: isValid,
		formatted: isValid
			? `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
			: undefined,
	};
}

/**
 * Converte data do formato brasileiro (DD/MM/YYYY) para ISO
 * @param {string} rawDate - Data no formato DD/MM/YYYY
 * @returns {Date|null} - Objeto Date válido ou null se inválida
 */
function parseBRDateToIso(rawDate) {
	const [day, month, year] = rawDate.split('/');
	if (!day || !month || !year) return null;

	const isoString = `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	const date = new Date(isoString);

	// Verifica se a data é válida
	if (isNaN(date.getTime())) return null;

	return date;
}

/**
 * Valida se o usuário tem mais de 6 anos de idade
 * @param {Date} date - Data de nascimento
 * @returns {boolean} - True se tem 6 anos ou mais, false caso contrário
 */
function isOlderThanSixYears(date) {
	const today = new Date();

	let age = today.getFullYear() - date.getFullYear();
	const monthDiff = today.getMonth() - date.getMonth();
	const dayDiff = today.getDate() - date.getDate();

	if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
		age--;
	}

	return age >= 6;
}

export { validateCPF, parseBRDateToIso, isOlderThanSixYears };
