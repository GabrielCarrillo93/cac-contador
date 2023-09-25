import './App.css';
import React, {useState} from 'react';
import Title from './components/Title/Title';
import CounterScreen from './components/CounterScreen/CounterScreen';
import PlusButton from './components/PlusButton/PlusButton';
import MinusButton from './components/MinusButton/MinusButton';

function App() {
    let [valor, setValor] = useState(0);

    const handlePlusClick = () => {
        setValor(valor+=1);
        return valor
    }

    const handleMinusClick = () => {
        setValor(valor-=1);
        return valor
    }

    return (
        <div className="App">
            <Title />
            <main>
                <MinusButton act={handleMinusClick}/>
                <CounterScreen value={valor}/>
                <PlusButton act={handlePlusClick}/>
            </main>
        </div>
    );
}

export default App;
