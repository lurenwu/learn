// const greet = require('./Greeter.js');
import Geeter from './Greeter.js'
import React from 'react'
import {render} from 'react-dom'

render(<Geeter />, document.getElementById('root'))
console.log(Geeter);
// document.querySelector('#root').appendChild(greet());
