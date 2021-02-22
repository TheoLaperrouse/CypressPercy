
# Cypress & Percy

## TODO

- [ ] Branche de Jérémie
- [ ] Documenter Percy
- [x] Trouver Template projet annexe 
- [x] Installer environnement Cypress et Percy
- [x] Repo projet annexe -> Github Perso disponible [ici](https://github.com/TheoLaperrouse/cypress-percy)
- [ ] Faire tests sur projet pro
- [ ] Percy : Integration Slack & Github/Gitlab

---

## Cypress

Permet de faire des test 'end to end' (De bout en bout, c'est à dire que l'on va crée des scénarios d'utilisation d'une appli web).
![](https://i.imgur.com/tMOwgWk.png)

### Installation

#### Sur projet 

Selon si on utilise npm ou yarn pour la gestion des paquets :
- npm install cypress
- yarn add cypress --dev

### Cypress Test Runner

Mettre en place & écrire les tests

### Cypress Dashboard

Lancer les tests en local ou depuis la CI
Possibilité de récupérer les données de tests, des screenshoots et des vidéos sur un Dashboard Cypress.

### Principe

Comment va fonctionner Cypress?
Par de petites actions comme celle ci :
- Ouvrir une page web
- Cliquer sur un élément en particulier
- Rentrer une valeur dans un input

On vient créer différents tests. 
On vérifie ensuite que le fonctionnement de l'application est bien en accord avec ce qu'elle doit faire.

### Extension Chrome & Firefox

#### Cypress Scenario Recorder

Permet d'enregistrer des scénarii réalisés "à la main", c'est à dire effectué les actions ci-dessus sur notre navigateur et en sortir un test Cypress directement 

Disponible que sur Chrome : https://chrome.google.com/webstore/detail/cypress-scenario-recorder/fmpgoobcionmfneadjapdabmjfkmfekb


### Fonctionnalités Cypress

#### Attente automatique

N'ajoutez jamais d'attente à vos tests. Cypress attend automatiquement les ordres et les assertions avant de passer à autre chose. Fini l'enfer de l'asynchronisation.

#### Snapshot

Cypress prend des clichés au fur et à mesure de vos tests. Il vous suffit de survoler les commandes dans la console pour voir exactement ce qui s'est passé à chaque étape.

#### Rechargement en temps réels

Cypress automatically reloads whenever you make changes to your tests. See commands execute in real time in your app.

#### Debugging

Déboguez directement à partir d'outils familiers comme Chrome DevTools. Les erreurs particulièrement lisibles rendent le debugage plus rapide.

#### Controle du traffic réseau

Contrôle facile sans impliquer le server 

![](https://i.imgur.com/lPeMVWU.png)

Fenêtre Cypress Test Runner.
On peut voir les tests à gauche de l'application et chacune des actions définis dans le test. On peut également voir les requêtes HTTP après l'action et les changements d'URL. (ici le premier get --> lance deux appels à l'API et l'URL change pour aller dans le menu Icon)

Pour chaque action (la sélectionner en cliquant dessus), on peut voir à droite l'application au moment de l'action.

---


## Percy

Permet de faire des reviews visuelles d'une application

###  Principe

Prend un screenshoot d'une partie de l'application et l'enregistre.
En effectuant les tests, vérifie s'il diffère de celui d'avant, demande 

### SDK pour Cypress disponible

[Documentation](https://docs.percy.io/docs/cypress)
Donne accès à cy.percySnapshot() dans les tests e2e Cypress
#### Installation sur un projet Cypress
```npm install --save-dev @percy/cypress``` or ```yarn add --dev @percy/cypress``` 
If typeScript : 
"types": ["cypress", "@percy/cypress"] in your tsconfig.json file

En haut de cypress/support/commands.js :
import '@percy/cypress';

En haut de cypress/plugins/index.js
let percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on("task", percyHealthCheck);
};

```bash
export PERCY_TOKEN=5a5015821b61acf67bdeda9ebd87e3bac6c6d444b143192ecd29f41b4f378561
```



---

##  Test des librairies sur des projets

### Sur projet annexe

On part d'un [template Vue](https://www.creative-tim.com/product/vue-white-dashboard) légérement similaire(Graphique, Menu à Gauche, Action bar) 

J'ai exporté ce projet sur un [repo Github](https://github.com/TheoLaperrouse/cypress-percy) disponible ici : 

Pour lancer l'application : 
```vue-cli-service serve``` ou ```npm start```

Réalisation d'un premier test très simple, aller sur l'acceuil et appuyer sur tous les boutons disponible dans le menu 

```javascript=
/// <reference types="cypress" />

describe('Menu', function() {
    it('click on all menu tabs', function() {
       cy.visit('http://localhost:8080/#/dashboard')
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(2) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(3) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(4) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(5) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(6) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(7) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(8) > .nav-link > p').click()
       //Percy Snapshot
       cy.percySnapshot() 
    })
   })
```

Premiers pas avec Cypress: 

1) Dans un premier temps, installer les modules : 
```npm install``` 
2) Lancement du Cypress Test Runner :
```npx cypress open```
3) Cliquer sur le test choisi -> lance un navigateur et le test en visuel

### Sur projet pro 

#### Comment lancer les tests avec Cypress

Premièrement, lancer la stack

```sh
cd energiency-solution
docker-compose up
```

On peut lancer les tests comme ça:

```sh
yarn e2e:cypress
```

```tip
Select 'Electron' as browser to run a spec file on the Cypress UI.
```