import React , { useState } from 'react';
import { Skeleton} from 'antd';
const App = () => {
    const [active, setActive] = useState(false);
    const [size, setSize] = useState('default');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
      };

    <Skeleton active={active} size={size}  />
}
export default App;