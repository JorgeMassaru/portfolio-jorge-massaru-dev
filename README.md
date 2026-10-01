# Portfólio — Jorge Massaru

Portfólio pessoal desenvolvido com Next.js App Router, React, TypeScript e Tailwind CSS. Reúne apresentação, formação, experiência, projetos e canais de contato.

## Começar

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```text
app/
	contato/                 Página e metadata de contato
	experiencia/             Linha do tempo acadêmica e profissional
	projetos/                Catálogo de projetos
		ComandaMenu/           Detalhes do projeto Comanda Menu
		learny/                Detalhes do projeto Learny
	sobre/                   Apresentação, habilidades e formação
	images/                  Imagens usadas nas páginas
	layout.tsx               Layout compartilhado e metadata padrão
	page.tsx                 Página inicial
	globals.css              Estilos e tokens globais
components/
	contact/                 Formulário interativo
	layout/                  Navegação e rodapé
	projects/                Cartões e colunas de projetos
	ui/                      Cabeçalhos e elementos compartilhados
```

## Organização do código

- Cada pasta dentro de `app/` representa uma rota. O `page.tsx` da rota mantém o conteúdo específico e sua metadata.
- As páginas permanecem como Server Components por padrão. A interatividade fica nos componentes client, como o formulário e os cartões de projeto.
- Componentes reutilizáveis ficam em `components/`, agrupados pelo domínio ou função.
- Comentários curtos identificam seções e explicam comportamentos menos óbvios; o JSX e os nomes devem explicar o restante.

## Scripts

```bash
npm run dev      # desenvolvimento
npm run lint     # análise estática
npm run build    # build de produção
npm start        # servir o build de produção
```

## Adicionar um projeto

1. Cadastre título, descrição, tecnologias, destino e imagem na lista `projects` em `app/projetos/page.tsx`.
2. Coloque imagens próprias em `app/images/projects/` e importe-as na página.
3. Se o projeto precisar de detalhes, crie uma rota em `app/projetos/` e aponte o campo `href` para ela.
