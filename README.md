# Angular 2 com Ruby on Rails.

## Tutorial baseado no [Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/) do angular.io

Tour of Heroes simula requisições em uma web API com angular-in-memory-web-api.
Meu próposito com esse repositório foi criar um web API com Ruby on Rails e integrar o que foi feito no Tour of Heroes.

Para essa integração tive que incluir/alterar e mudar de lugar alguns arquivos do app final.

A estrutura final do app Tour of Heroes é essa:

* angular-tour-of-heroes
 * app
    * app.component.ts
    * app.component.css
    * app.module.ts
    * app-routing.module.ts
    * dashboard.component.css
    * dashboard.component.html
    * dashboard.component.ts
    * hero.ts
    * hero-detail.component.css
    * hero-detail.component.html
    * hero-detail.component.ts
    * hero-search.component.html (new)
    * hero-search.component.css (new)
    * hero-search.component.ts (new)
    * hero-search.service.ts (new)
    * rxjs-extensions.ts
    * hero.service.ts
    * heroes.component.css
    * heroes.component.html
    * heroes.component.ts
    * main.ts
    * in-memory-data.service.ts (new)
 * node_modules
    * ...
 * index.html
 * package.json
 * styles.css
 * systemjs.config.js
 * tsconfig.json

## RAILS
Siga esse [post](http://tutorials.pluralsight.com/ruby-ruby-on-rails/react-vs-angular-2-integration-with-rails) até
o começo da integração com o Angular, daí vamos fazer da seguinte maneira:

**Tendo como base o app Tour of Heroes**

## NODE
**ALERTA: Evite copiar e colar todo o projeto angular para o projeto em Ruby on Rails.
Vamos fazer por partes!**

Copie e cole os arquivos **tsconfig.json** e **package.json** na raiz do projeto Rails. Depois de ter feito isso, execute:

### Terminal
> npm install

Isso irá instalar todos os módulos do app.
Agora, copie e cole os arquivos index.html, styles.css, systemjs.config.js para dentro da pasta public.

Modifique o **index.html**

    code
    ...
    <script src="/assets/core-js/client/shim.min.js"></script>
    <script src="/assets/zone.js/dist/zone.js"></script>
    <script src="/assets/reflect-metadata/Reflect.js"></script>
    <script src="/assets/systemjs/dist/system.src.js"></script>
    ...
    <script>
      System.import('app/main').catch(function(err){ console.error(err); });
    </script>
    ...


No arquivo **systemjs.config.js**, altere somente a linha **'npm:': 'node_modules/'** para **'npm:': '/assets/'**

Feito tudo isso, execute:

### Terminal
> npm run tsc && rails s
