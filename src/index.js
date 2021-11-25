const messages = [
	'Oscar',
	'Ana',
	'Carolina',
	'Paulina',
	'Roberto',
	'Santiago',
	'Diego',
	'Laura',
	'Yesica',
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };
