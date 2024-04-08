import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
	state: () => {
		return { userInfo:{} };
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		
	},
});
