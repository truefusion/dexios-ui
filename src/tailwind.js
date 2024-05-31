import alert from './components/alert';
import badge from './components/badge';
import box from './components/box';
import button from './components/button';
import input from './components/input';
import outline from './utilities/outline';
import soft from './utilities/soft';
import solid from './utilities/solid';

/** @type {import('tailwindcss').Config} */
export default {
	plugins: [
		outline,
		soft,
		solid,
		alert,
		badge,
		box,
		button,
		input,
	],
}

export {
	alert,
	badge,
	box,
	button,
	input,
	outline,
	soft,
	solid,
};
