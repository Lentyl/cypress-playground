const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { isFileExist } = require('cy-verify-downloads');
const { rmdir } = require('fs')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://demoqa.com',
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      on('task', {
        isFileExist,
        downloadFile,
        deleteDownloads() {
          return new Promise((resolve) => {
            rmdir('cypress/downloads', { recursive: true }, () => {
              resolve(null)
            })
          })
        },
      })
    },
  },
});
