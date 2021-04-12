export const ABOUT_TITLE = 'Rather Get Pizza Podcast';
export const ABOUT_TEXT =
	'Deciding what do for dinner is a big dilemma.  Sam and Leon are often stuck between options.  But there is always one constant.  We’d rather get pizza?  Sam and Leon podcast about the twists and turns of life.  Discussing daily life: anything from making dinner to making a relationship work.';
export const CONTACT_FORM = {
	action:
		'https://icloud.us5.list-manage.com/subscribe/post?u=d4f15aa89a4c7a87974002b24&amp;id=86778aac02',
	fields: [
		{
			name: 'EMAIL',
			placeholder: 'Your Email *',
			type: 'email',
			required: true,
		},
		{
			name: 'FNAME',
			placeholder: 'First Name',
			type: 'text',
			required: false,
		},
		{
			name: 'LNAME',
			placeholder: 'Last Name',
			type: 'text',
			required: false,
		},
		{
			name: 'MESSAGE',
			placeholder: 'Message',
			type: 'text',
			required: false,
			field: 'textarea',
			className: 'max-height-200px',
			maxLength: 500,
			rows: 5,
		},
	],
	messages: {
		sending: 'Sending...',
		success: 'Thank you for subscribing!',
		error: 'An unexpected internal error has occurred.',
		empty: 'You must write an e-mail.',
		duplicate: 'Too many subscribe attempts for this email address',
		button: 'Subscribe',
	},
};
