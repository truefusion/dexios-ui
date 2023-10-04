import './styles/index.less';

import * as Components from './components';

export default {
	install(app) {
		Object.entries(Components).forEach(([k,v]) => {
			app.component(`Dexios${k}`, v);
		});
	},
}
