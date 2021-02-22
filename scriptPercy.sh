#!/bin/sh
npm start &
npx percy exec -- cypress run --spec "cypress/integration/firstTest.spec.js"
