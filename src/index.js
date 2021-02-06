import style from './style.css';
import logo from './assets/webpack.svg';
import gemini from './assets/saga-kanon.png';
import data from './data.json';
import {HelloWorld} from './components/HelloWorld.js';

const arr = [1, 2, 3],
  codeESNext = () => console.log(...arr);

console.log('Hola mundo sin configuracion con webpack');
codeESNext();
//document.getElementById('app').innerHTML = `<img src="${logo}" alt="webpack">`;

const d = document,
  $app = d.getElementById('app'),
  $h1 = d.createElement('h1'),
  $logo = d.createElement('img'),
  $img = d.createElement('img'),
  $nav = document.createElement('nav');

let menu = '',
  hello = new HelloWorld('Vanilla js');

data.links.forEach((link) => (menu += `<a href="${link[1]}">${link[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($img);
