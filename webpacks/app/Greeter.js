import React, {Component} from 'react'
var config = require('./config.json');
import {firstName} from './export.js';
import styles from  './app.css';
class Geeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {`'haha111111221333111311331223222111332111111' + ${firstName +  config.greetText}`}
            </div>
        )
    }
}
export default Geeter
// export  default function () {
//     var greet = document.createElement('div');
//     greet.textContent =firstName +  config.greetText;
//     return greet;
// }
