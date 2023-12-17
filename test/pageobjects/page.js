// this is my URL

const { browser } = require('@wdio/globals')

module.exports = class Page {
    openSpotifyMainPage () {
        return browser.url(`https://open.spotify.com`)
    }
}
