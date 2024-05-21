const formEl = document.querySelector('.contact .form');
const buttonEl = document.querySelector('.contact .button');

emailjs.init('Z14s_TFKKrMhgJ85Z');

async function sendRestEmail(data) {
	const { senderEmail, senderName, senderCellphone, senderMessage } = data;

	const restReqPayload = {
		service_id: 'default_service',
		template_id: 'template_for4s5a',
		user_id: 'Z14s_TFKKrMhgJ85Z',
		template_params: {
			subject: 'Contact',
			message: `
			- EMAIL: ${senderEmail}
			- NAME: ${senderName}
			- CELLPHONE: ${senderCellphone}

			MENSAJE
			-------

			${senderMessage}
			`,
			sender_name: senderName,
		},
		accessToken: '2eIcF5qpsPVPdhrsp03Xa',
	};

	await fetch('https://api.emailjs.com/api/v1.0/email/send', {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(restReqPayload),
	});
}

formEl.addEventListener('submit', (e) => {
	e.preventDefault();

	sendRestEmail({
		senderEmail: formEl.senderEmail.value,
		senderName: formEl.senderName.value,
		senderCellphone: formEl.senderCellphone.value,
		senderMessage: formEl.senderMessage.value,
	});

	formEl.senderEmail.value = '';
	formEl.senderName.value = '';
	formEl.senderCellphone.value = '';
	formEl.senderMessage.value = '';

	buttonEl.innerText = 'SENT!';
});
