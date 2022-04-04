import {
	createRouter,
	createWebHistory
} from 'vue-router';

import Button from '../views/Button.vue';
import Card from '../views/Card.vue';
import Divider from '../views/Divider.vue';
import Dropdown from '../views/Dropdown.vue';
import Input from '../views/Input.vue';
import Label from '../views/Label.vue';
import Menu from '../views/Menu.vue';
import Message from '../views/Message.vue';
import Modal from '../views/Modal.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Button',
			component: Button,
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
	],
});

export default router;
