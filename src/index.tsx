import path from "path";
import { render } from "solid-js/dom";
import { createSignal, onCleanup } from "solid-js";

const App = () => {
	const [count, setCount] = createSignal(0),
		timer = setInterval(() => setCount(count() + 1), 1000);
	onCleanup(() => clearInterval(timer));

	return <div>Counter: {count()}</div>;
};

render(() => <App />, document.body);