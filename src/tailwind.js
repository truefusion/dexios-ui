import alert from './components/alert';
import badge from './components/badge';
import box from './components/box';
import button from './components/button';
import divider from './components/divider';
import input from './components/input';
import tabs from './components/tabs';

import border from './utilities/border';
import outline from './utilities/outline';
import soft from './utilities/soft';
import solid from './utilities/solid';

/** @type {import('tailwindcss').Config} */
export default {
	plugins: [
		border,
		outline,
		soft,
		solid,
		alert,
		badge,
		box,
		button,
		divider,
		input,
		tabs,
	],
}

export {
	alert,
	badge,
	border,
	box,
	button,
	divider,
	input,
	outline,
	soft,
	solid,
	tabs,
};
