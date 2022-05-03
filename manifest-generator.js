const fs = require('fs');
const neu_config = JSON.parse(fs.readFileSync('neutralino.config.json'))

const manifest = {
    "applicationId": neu_config.applicationId,
    "version": neu_config.version,
    "resourcesURL": neu_config.globalVariables.UPDATE_MANIFEST_URL.replace('manifest.json', 'resources.neu')
}

console.log("manifest generated!")
fs.writeFileSync('dist/neutralino-template/manifest.json', JSON.stringify(manifest))