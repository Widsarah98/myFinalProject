const Page = require('./page')
const Selectors = require('./selectors.js')

class Flow extends Page {
    async signIn() {
        await super.openSpotifyMainPage();
        await Selectors.loginBtn.click();
        await Selectors.login('sarah.widmer1544@stu.mtec.edu', '5Janleksa');
        await expect(Selectors.successfulLogin).toBeExisting();
    }

    async runFlowOne() {
        await this.signIn()
        await Selectors.signOut()
    }
    
    async runFlowTwo() {
        await this.signIn()
        await Selectors.searchBtn.click();
        await Selectors.searchField.setValue('U2');
        await Selectors.threeDotsWithWithoutYou.click();
        await Selectors.saveToYourLikedSongsBtn.click();
        await expect(Selectors.likedSongsBtn).toBeExisting();
        await Selectors.threeDotsWithWithoutYou.click();
        await Selectors.removeFromYourLikedSongsBtn.click();
        // await expect(Selectors.likedSongsBtn). check to make sure the liked song was removed
    }
    
    async runFlowThree() {
        await this.signIn();
        await Selectors.homeIcon.click();
        await Selectors.createPlaylistPlusBtn.click();
        await Selectors.createANewPlaylist.click();
        await Selectors.changePlaylistNameBtn.click();
        await Selectors.newPlaylistNameField.setValue('sarah');
        await Selectors.savePlaylistName.click();
        await Selectors.searchSongsInPlaylist.setValue('u2');
        await browser.pause(6000);  
        // don't delete this line. Need the pause for results to show up
        await Selectors.u2Result.click();
        await browser.pause(4000);
        await Selectors.stillHaventFound.click();
        await browser.pause(4000);
        await Selectors.Vertigo.click();
        await browser.pause(6000);
       // await Selectors.threeDotsInPlaylist.click();
        await Selectors.playlist.click({button: 'right'});
        await browser.pause(4000);
        await Selectors.deletePlaylistFromList.click();
        await browser.pause(4000);
        await Selectors.deletePlaylistBtn.click();
        await browser.pause(4000);




    }

}

module.exports = new Flow();