# Documentación de la empresa

Este repositorio contiene la documentación interna y pública (cuando corresponda) de **Liit**.

## Filosofí­a
- **Docs as Code**: Markdown + Pull Requests + CODEOWNERS + CI.
- **Portal de lectura** con Docusaurus, publicado automáticamente tras cada merge a main.
- **Gobernanza**: cada carpeta tiene responsables y fecha de revisión.

## Árbol inicial
`
/docs
  /00-about
  /10-handbook
  /20-engineering
    /adr
  /30-platform
    /runbooks
  /40-data
    /dbt
  /50-products
    /api
  /99-glossary
/portal  (Docusaurus)
`

## Flujo de trabajo
1. Crear rama -> editar Markdown -> abrir PR.
2. Revisión automática (lint, enlaces, build del portal) + CODEOWNERS de cada carpeta.
3. Al hacer merge a main, se publica el sitio.

## Comandos útiles
- npm ci dentro de /portal
 
- npm run start para entorno local
 
- npm run build para compilar el sitio
 
- npm run serve para previsualizar el build

## Versionado de docs
- Etiquetar cambios relevantes: docs/vYYYY.MM

