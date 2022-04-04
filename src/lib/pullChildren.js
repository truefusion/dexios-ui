export default function pull(children, valid  = () => true) {
	var ret = [];
	if (Array.isArray(children)) {
		children.forEach((item) => {
			var {type} = item;
			switch (typeof type) {
				case 'object': {
					if (valid(type)) {
						ret.push(item);
					}
					break;
				}
				case 'symbol': {
					ret = ret.concat(pull(item.children, valid));
					break;
				}
			}
		});
	}
	return ret;
}
