
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
	module.exports = {
	  content: [
	    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	  ],
	  theme: {
	    extend: {},
	  },
	  plugins: [require('@tailwindcss/forms')],
	}
```

> **Nota:** No Arquivo **.eslintrc.cjs** devemos inserir os seguintes códigos:

```js
	{
		"extends": 
		[
			"@rocketseat/eslint-config/react"
		]
	}
```

	

## Estrutura de pastas

```shell
  $ tree
  .
  ├── lib
  │   └── blackjack.ex
  ├── mix.exs
  ├── README.md
  └── test
      ├── blackjack_test.exs
      └── test_helper.exs
```
