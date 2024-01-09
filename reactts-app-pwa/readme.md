# Front-End ThreeJS CAD

Este arquivo contém orientações sobre a criação do projeto, utilização de bibliotecas, instalação de dependências, e orientações para a publicação desta aplicação.
**TODOS OS PROCEDIMENTOS PARA PUBLICAÇÃO DEVEM SER DESCRITOS AQUI**, afinal, você não vai viver pra sempre, e na tua memória as bagaça não ficam mais de 30 minutos!


## Desenvolvimento

Front criado com Node, projeto React PWA em TypeScript:

> npx create-react-app reactts-app-pwa --template cra-template-pwa-typescript

Bibliotecas instaladas:

```sh
cd reactts-app-pwa
npm install --save three
npm install --save-dev @reduxjs/toolkit sass @types/three
npm install --save-dev styled-components @types/styled-components
```

Para resolver problemas com a instalação, pode-se:
 - Excluir a pasta node_modules;
 - Excluir o package-lock.json;
 - Executar `npm i --package-lock-only`;
 - Executar `npm install`;


Para poder usar `imports`/`export` no SCSS, precisamos criar um arquivo nomeado `shims-scss.d.ts` com o conteúdo abaixo:

```ts
declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}
```

Dentro dos arquivos scss dos quais você quer exportar uma variável, por exemplo, use:
```scss
:export {//Este export permite importação das variáveis via Javascript/Typescript
    accentColor1:$accentColor1;
    accentColor1Light:$accentColor1Light;
}
```

## Executando localmente

Para executar o front localmente use:

```sh
cd reactts-app-pwa
npm install #se ainda não tiver feito uma vez
npm start
```



## Listagem de licenças de terceiros

Para listas as licenças, instale o `license-report` globalmente na sua máquina:

> sudo npm install -g license-report

E para gerar o HTML das licenças de terceiros use:

> license-report --output=html > public/third-party-licenses.html





## Publicando a aplicação

**Antes de publicar**:

`1` - ...

`2` - Gerar a lista de licenças de terceiros, conforme o item acima;


**Compilar**:

```sh
cd reactts-app-pwa
npm install #se ainda não tiver feito uma vez
npm run build
```

**Carregar**:

Carregar para o FTP o conteúdo de:

**LOCAL**: `site/reactts-app-pwa/build` -> **FTP**: `ROOT/home`;


# About

By: **williampilger** | 2024

Bom Princípio - RS - Brasil - América do Sul - Terra - Via Láctea