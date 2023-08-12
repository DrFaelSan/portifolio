
# Bem vindo ao meu portifólio

Olá meu nome é Rafael Vieira, tenho 24 anos no momento estou solteiro, amo a área de T.I e hoje pretendo fazer meu portifólio e com isso estou criando esse **README (instruções)** para vocês terem uma base de como foi o passo a passo para o desenvolvimento do mesmo, aqui colocarei os comandos utilizados no desenvolvimento, pacotes utilizados e talvez algumas dicas que farei o possível para buscar para fazer um portifólio de respeito, sem mais de longas vamos aos passos...  

# Passo a Passo

```shell
npm init vite@latest
```
> **Nota:** Preenchimento das informações solicitadas na criação do projeto, nome, framework e linguagem.
	
```shell
cd <project name>
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwind init -p
npm i @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
npm install lucide-react -D	 
npm install react-type-animation
```

> **Nota:** Na raiz do projeto devemos criar o arquivo **prettier.config.js** e nele devemos inserir os seguintes comandos:

```js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```
> **Nota:** No Arquivo **tailwind.config.js** devemos inserir os seguintes códigos:

```js
/** @type  {import('tailwindcss').Config} */

module.exports  = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		variants: {
			animation: ["motion-safe"],
		},
		extend: {
			animation: {
				fadeIn:  "fadeIn 2s ease-in forwards"
			},
			keyframes: {
				fadeIn: {
				"0%": { opacity:  0 },
				"100%": { opacity:  1 }
				}
			}
		},
	}
}
```

> **Nota:** No Arquivo **.eslintrc.cjs** devemos inserir os seguintes códigos:

```js
module.exports  = {
	env: { browser:  true, es2020:  true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'@rocketseat/eslint-config/react'
	],
	parser:  '@typescript-eslint/parser',
	parserOptions: { 
		ecmaVersion:  'latest', 
		sourceType:  'module' 
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components':  'warn',
	},
}
```

## Estrutura de pastas

```shell
 src
 ├── App.tsx
 ├── main.tsx
 ├── index.css
 ├── vite-env.d.ts	 
 ├── assets
 ├── components
	├── Main
		├── index.tsx
	├── Sidebar
		├── index.tsx
		├── SidebarContent.tsx
		├── SidebarIcon.tsx
		├── SidebarRoot.tsx
	├── SidebarDesk
		├── index.tsx
		├── SidebarDeskContent.tsx
		├── SidebarDeskIcon.tsx
		├── SidebarDeskRoot.tsx
	├── Sidenav
		 ├── index.tsx
		 ├── Data
			├── index.tsx
	├── Work
		 ├── index.tsx
		 ├── WorkContent.tsx
		 ├── WorkRoot.tsx
		 ├── Data
			 ├── index.tsx

```
