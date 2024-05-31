import plugin from "tailwindcss/plugin";
import applyCss from '../lib/apply-css';

export default plugin(function ({ addComponents, matchComponents }) {
	const btn_base = [
		'dexios-ui-box',
		'bg-transparent',
		'border-0',
		'cursor-pointer',
		'gap-2',
		'inline-flex',
		'items-center',
		'justify-center',
		'py-2',
		'transition',
		'whitespace-nowrap',
	];

	addComponents({
		'.btn-base': {
			[applyCss(btn_base)]: {},
		},
	});
	matchComponents({
		'btn-outline': (value) => {
			const btn_outline = [
				`dexios-ui-outline-inset-[${value}]`,
				'shadow-sm',
			];
			return {
				[applyCss(btn_outline)]: {},
			};
		},
		'btn-solid': (value) => {
			const btn_solid = [
				`dexios-ui-solid-[${value}]`,
				'shadow-sm',
			];
			return {
				[applyCss(btn_solid)]: {},
			};
		},
	});
});
