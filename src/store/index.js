export const APP_STORE = {
	// Исходные переменные приложения
	state: {
		buttonCount: 0,
		userPhrase: '',
	},
	// "Мутации": изменение переменных приложения
	mutations: {
		INCREMENT_COUNT(state) {
			state.buttonCount++;
		},
		SET_USER_PHRASE(state, value) {
			state.userPhrase = value;
		},
	},
	// Тут функции: которые можно вызывать и внутри них менять переменные приложения.
	// Можно в одной функции вызывать кучу "мутаций"
	actions: {
		incrementCount({ commit }) {
			commit('INCREMENT_COUNT');
		},
		changeUserPhrase({ commit }, value) {
			commit('SET_USER_PHRASE', value);
		},
	},
	// "Геттеры": это актуальное состояние state. Их можно импортировать в компоненты приложения.
	getters: {
		buttonCount: (state) => state.buttonCount,
		userPhrase: (state) => state.userPhrase,
	},
};
