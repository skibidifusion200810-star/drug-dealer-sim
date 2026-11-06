import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

const base=new URL('../',import.meta.url);
const source=new URL('../source/index.html',import.meta.url);
const output=new URL('../index.html',import.meta.url);
const markup=readFileSync(source,'utf8');
if(!markup.includes('src="/src/main.jsx"'))throw Error('Expected source HTML entry not found.');
writeFileSync(output,markup);
console.log('Restored Vite source index.html for local development and production build.');
