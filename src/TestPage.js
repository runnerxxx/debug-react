/*
 * @Author: your name
 * @Date: 2021-01-28 12:06:28
 * @LastEditTime: 2021-01-29 14:45:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /debug-react/src/TestPage.js
 */
import {React} from './adaptation';
import B from './B';
const {useState, useCallback, useEffect, Component} = React;

class A extends Component {
    render() {
        return <div>
            A 页面
        </div>
    }
}

export default function TestPage(props) {
    const [state, setstate] = useState(true);

    const unmountB = () => {
        setstate(!state);
    }
    
    return (
        <div className="App">
            HELLO WORLD

            <A/>
            {
                state ? <B /> : null
            }

                <button onClick={unmountB}>unmount B</button>
            </div>
    );
}
