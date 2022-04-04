import './tailwind.css';

import * as Components from './components';

export default {
	install(app) {
		Object.entries(Components).forEach(([k,v]) => {
			app.component(`Vigil${k}`, v);
		});
	},
}
