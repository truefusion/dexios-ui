import {
	createRouter,
	createWebHistory
} from 'vue-router';

import Button from '../examples/Button.vue';
import Calendar from '../examples/Calendar.vue';
import Card from '../examples/Card.vue';
import Divider from '../examples/Divider.vue';
import Dropdown from '../examples/Dropdown.vue';
import Input from '../examples/Input.vue';
import Label from '../examples/Label.vue';
import Menu from '../examples/Menu.vue';
import Message from '../examples/Message.vue';
import Modal from '../examples/Modal.vue';
import Segment from '../examples/Segment.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Button',
			component: Button,
		},
		{
			path: '/calendar',
			name: 'Calendar',
			component: Calendar,
		},
		{
			path: '/card',
			name: 'Card',
			component: Card,
		},
		{
			path: '/divider',
			name: 'Divider',
			component: Divider,
		},
		{
			path: '/dropdown',
			name: 'Dropdown',
			component: Dropdown,
		},
		{
			path: '/input',
			name: 'Input',
			component: Input,
		},
		{
			path: '/label',
			name: 'Label',
			component: Label,
		},
		{
			path: '/menu',
			name: 'Menu',
			component: Menu,
		},
		{
			path: '/message',
			name: 'Message',
			component: Message,
		},
		{
			path: '/modal',
			name: 'Modal',
			component: Modal,
		},
		{
			path: '/segment',
			name: 'Segment',
			component: Segment,
		},
	],
});

export default router;
