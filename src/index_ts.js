import style from './style.css';
import logo from './assets/webpack.svg';
import gemini from './assets/saga-kanon.png';
import data from './data.json';
import {HelloWorld} from './components/HelloWorld.ts';

const d = document,
  $app = d.getElementById('app'),
  $h1 = d.createElement('h1'),
  $logo = d.createElement('img'),
  $nav = document.createElement('nav');

let menu = '',
  hello = new HelloWorld('TypeScript');

data.links.forEach((link) => (menu += `<a href="${link[1]}">${link[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add('icon');
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
