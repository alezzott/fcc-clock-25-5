import './App.css';
import { Clock } from './components/Clock';

function App() {
    return (
        <>
            <section>
                <h1 className="text-main font-semibold text-[72px] text-center">Clock.js</h1>
                <Clock />
            </section>
            <h1 className="font-semibold pt-3 text-center">
                By
                <a href="https://github.com/alezzott" className="hover:text-lime-500 " target="_blank">
                    {' '}
                    alezzo 👨‍💻
                </a>
            </h1>
        </>
    );
}

export default App;
