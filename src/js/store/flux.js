const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				
				
			
			],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			pushTask: (text) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				let obj = {title:text, id:2}
				

				
				const demo = [...store.demo, obj];
				

				//reset the global store
				setStore({ demo: demo });
			},
			deleteLi: (i) => {
				const store = getStore();

				const demo = store.demo

				const res = demo.filter((item,index)=> {
					return index != i;
				})

				setStore({ demo: res });
			}
		}
	};
};

export default getState;
