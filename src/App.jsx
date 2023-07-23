import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Text } from './components/Text/Text';
import { Wait } from './components/Wait/Wait';

function App() {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onToggleClick = () => {
    setToggle(() => !toggle);
  };

  return (
    <div
      data-testid='main-block'
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <Text />
      <Button data-testid='toggle-button' onClick={onToggleClick}>
        toggle btn
      </Button>
      {toggle && <div data-testid='toggle-block'>toggle on!</div>}
      <Wait />
      <Input placeholder='input value1' onChange={handleChange} type='text' />
      <p data-testid='input-text'>{value}</p>
    </div>
  );
}

export default App;
