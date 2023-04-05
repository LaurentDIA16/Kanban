# Kanban

** Contexte du projet**

Pour ses besoins en gestion de projet votre responsable vous demande de développer un POC de Kanban pour la gestion de tache interne à votre équipe de développement.

Pour ce faire il vous a transmis un wireframe pour exprimer son besoin en terme d'UI/UX (vous êtes libre d'améliorer l'aspect UI/UX mais cela ne sera pas décisif)

Les fonctionnalités seront les suivantes :

- Gérer les colonnes
- Gérer les taches
- Ajout d'une tache
- Ajout d'une colonne
- Éditer le titre de la tache
- Éditer le titre de la colonne

Outre les besoins fonctionnels, votre responsable souhaite pouvoir faire continuer ce POC par un autre collègue par la suite.

En terme de technologie vous êtes libre de choix, il vous conseil la librairie jKanban mais celle-ci n'est pas imposée ([https://github.com/riktar/jkanban](https://github.com/riktar/jkanban))

# Réalisation

## Définir les fonctionnalités

- Gérer les colonnes
- Ajout d'une colonne
- Éditer le titre de la colonne
    . Extra:
        - Supprimer une colonne
- Gérer les taches
- Ajout d'une tache
- Éditer le titre de la tache
- Déplacer une tache d’une colonne à une autre
    . Extra:
        - Supprimer une tache
    
## Liste des technologies

- html
- css
- javascript
- Django
- Django Rest Framework
- postgresql
- Jkanban

## Base de données

<img width="486" alt="Capture d’écran 2023-03-31 à 08 10 06" src="https://user-images.githubusercontent.com/112149608/229020790-fd8f524a-db55-4a83-b487-91cdb595bdf4.png">


## Architecture

. Backend:
 - Django
 - Django Rest Framework
 - postgresql
  
. Frontend:
 - html
 - css
 - javascript
 - Jkanban

. Déploiement:
 - Heroku -> https://simplon-kanban.herokuapp.com/

## Fonctionnement du site (au 3/04/2023)

Ce qui fonctionne:
  - On peut créer un board (action sur le bouton Add "Default" board)
  - On peut éditer le titre du board (action sur le titre)
  - On peut déplacer un board de la droite vers la gauche l'enregistrement de la position dans la base de donnée se fait mais encore un soucis de calcul de position
  - On peut créer un item (action sur le bouton Add New Card) qui va s'enregistrer dans la base de donnée

Ce qui ne fonctionne pas... encore:
 - L'affichage des items créés dans le board
 - Éditer le titre d'un item
 - Le déplacement d'un item par rapport à un autre item dans son board ou vers un autre board
