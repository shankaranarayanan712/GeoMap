/** @format */

import Home from './container/home';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components/error';
import './App.css';
function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Home />
		</ErrorBoundary>
	);
}

export default App;
