# NgButton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

This project was created to understand how we can create web components using Angular. 

To understand how Angular gives a way to create custom elements, refer to this [Angular doc](https://angular.io/guide/elements)

Try using angular-cli version >=6. For this project we are using 10.1.6.

## Install angular-cli and create a new project
`npm i  -g @angular/cli`
This will install angular-cli globally on your system.

`ng new "your-project-name" --prefix custom`
This will create a new project.

## Add angular-elements and polyfill
`ng add @angular/elements`
This is going to add angular elements to the project. While installing you will observe that on your terminal, it will show:
 - Added document-register-element as a dependency
 - Added document-register-element.js polyfill to scripts
You would also observe that your package.json and angular.json is updated.

## Create the angular component
ng g component "your-component-name" --inline-style --inline-template -v ShadowDom
This is going to create the angular component with ShadowDOM encapsulation. The "Native" encapsulation has been deprecated. 

## Registering the component in NgModule
We need to register our angular component with the app-module. We want Angular to compile this component so, it has to be specified in entryComponents. Angular provides the createCustomElement() function for converting an Angular component, together with its dependencies, to a custom element. We also need to register the component custom-element tag using customElements.define() with the browser's customElementRegistry.

## Configuration related changes
We need to check if the target has been specified as ES2015 as that is the standard which web component follows.
We also need to configure `"scripts": [{"input": "node_modules/document-register-element/build/document-register-element.js"}]` in angular.json

## Generating the web component and using it in a normal HTML page
There are few changes which we will have to make to package.json
 - Build script: `"build": "ng build --prod --output-hashing=none"`
   This is going to produce an output which is not hashed. By default, the build generated using angular-cli is hashed.  
 - Package: `"package": "cat dist/ng-button/{runtime,polyfills,scripts,main}.js  | gzip > element.js.gz",`
   Because the build generates different files which are required for our generated web component to work. What we have done is we have bundled all the generated      files which is required for this web component to work.
 - Static server: `"serve": "http-server --gzip"`
   This static server is required for running the demo file. We import the generated web component in the index.html file.
   
## Credits
  - [Build custom web components with Angular 6](https://medium.com/@tomsu/building-web-components-with-angular-elements-746cd2a38d5b)
