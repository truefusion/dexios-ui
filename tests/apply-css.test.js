import {describe, expect, test} from '@jest/globals';
import applyCss from '../src/lib/apply-css';

describe('applyCss', () => {
	test('without prefix', () => {
		const css = applyCss('', ['test1', 'test2']);
		expect(css).toBe('@apply test1 test2');
	});

	test('prefix', () => {
		const css = applyCss('t-', ['test1', 'test2']);
		expect(css).toBe('@apply t-test1 t-test2');
	});
});
