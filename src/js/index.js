const form = document.getElementById('form');
const inputText = document.getElementById('horoscopo');
const inputContainerElement = document.getElementById('formContainer');
const resultContainerElement = document.getElementById('resultContainer');
const error = document.getElementById('error');
const resulttext = document.getElementById('resulttext');
const restarElement = document.getElementById('restart');
const horoscopoSemanal = {
	aries: {
		fecha: '21 de marzo - 19 de abril',
		prediccion:
			'Esta semana es probable que te encuentres con desafíos inesperados, pero tu determinación te ayudará a superarlos con éxito. Mantén la calma y confía en tu instinto.'
	},
	tauro: {
		fecha: '20 de abril - 20 de mayo',
		prediccion:
			'Es una semana excelente para enfocarte en tus metas profesionales. Tu persistencia y dedicación te llevarán más cerca de tus objetivos. No te desanimes por contratiempos menores.'
	},
	geminis: {
		fecha: '21 de mayo - 20 de junio',
		prediccion:
			'Tu creatividad estará en su punto máximo esta semana, lo que te permitirá encontrar soluciones innovadoras a problemas cotidianos. Aprovecha esta energía positiva para expresarte plenamente.'
	},
	cancer: {
		fecha: '21 de junio - 22 de julio',
		prediccion:
			'Es importante que te enfoques en cuidar tu bienestar emocional esta semana. Busca actividades que te ayuden a relajarte y recargar energías. No descuides tus emociones.'
	},
	leo: {
		fecha: '23 de julio - 22 de agosto',
		prediccion:
			'Tu confianza y carisma estarán en alza esta semana, lo que te abrirá puertas en el ámbito social y profesional. Aprovecha esta oportunidad para hacer conexiones importantes.'
	},
	virgo: {
		fecha: '23 de agosto - 22 de septiembre',
		prediccion:
			'Es probable que te enfrentes a algunos desafíos esta semana, pero tu enfoque y determinación te ayudarán a superarlos. Mantén la calma y sigue adelante con confianza.'
	},
	libra: {
		fecha: '23 de septiembre - 22 de octubre',
		prediccion:
			'Tu habilidad para encontrar el equilibrio será clave esta semana, especialmente en tus relaciones personales. Presta atención a las necesidades de los demás y busca soluciones armoniosas.'
	},
	escorpio: {
		fecha: '23 de octubre - 21 de noviembre',
		prediccion:
			'Es una semana ideal para profundizar en tus pasiones y explorar tus intereses más profundos. No temas adentrarte en lo desconocido; descubrirás nuevas facetas de ti mismo.'
	},
	sagitario: {
		fecha: '22 de noviembre - 21 de diciembre',
		prediccion:
			'Tu optimismo y entusiasmo contagiarán a los demás esta semana. Aprovecha esta energía positiva para perseguir tus sueños con determinación y alegría.'
	},
	capricornio: {
		fecha: '22 de diciembre - 19 de enero',
		prediccion:
			'Es importante que te enfoques en la organización y la planificación esta semana. Con una estrategia clara, podrás alcanzar tus metas con mayor eficiencia. No te distraigas.'
	},
	acuario: {
		fecha: '20 de enero - 18 de febrero',
		prediccion:
			'Tu originalidad y creatividad serán tus mejores aliados esta semana. No temas pensar fuera de la caja y proponer ideas innovadoras. Tu perspectiva única te llevará lejos.'
	},
	piscis: {
		fecha: '19 de febrero - 20 de marzo',
		prediccion:
			'Es importante que te conectes con tu intuición esta semana. Escucha tu voz interior y sigue tu corazón en tus decisiones. Confía en que estás en el camino correcto.'
	}
};

const printHoroscopo = value => {
	// Obtener el valor del input
	const signoZodiacal = value.trim().toLowerCase();

	// Verificar si el signo zodiacal es válido
	if (signoZodiacal in horoscopoSemanal) {
		// Obtener la predicción del horóscopo semanal para el signo zodiacal
		const horoscopo = horoscopoSemanal[signoZodiacal].prediccion;

		// Mostrar la predicción en el resultado
		console.log(signoZodiacal);
		console.log(horoscopo);
		resulttext.textContent = horoscopo;

		// Ocultar el contenedor del input y mostrar el contenedor del resultado
		inputContainerElement.classList.add('hide');
		resultContainerElement.classList.remove('hide');
	} else {
		// Si no se encuentra una predicción para el signo zodiacal proporcionado
		error.textContent = 'No se encontró la predicción para el signo ingresado.';
	}
};
const restart = () => {
	location.reload();
};

form.addEventListener('submit', event => {
	event.preventDefault();
	const value = inputText.value.toLowerCase();
	printHoroscopo(value);
});
restarElement.addEventListener('click', restart);
