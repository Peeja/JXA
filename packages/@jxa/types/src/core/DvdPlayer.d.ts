
export namespace DVDPlayer {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * DVD Player
  */
 export interface Application {
   /**
    * The version of the DVD Player
    */
   version(): string;
   /**
    * Is the app starting up?
    */
   appInitializing(): boolean;
   /**
    * Does user have multiple choices to start playback from?
    */
   hasMultiplePlaybackChoice(): boolean;
   /**
    * Turn off interaction with user for last play sheet, etc
    */
   interactionOverride(): boolean;
   /**
    * Turn off display of menu bar when mouse moves to menu bar area in full screen mode
    */
   viewerFullScreenMenuOverride(): boolean;
   /**
    * Is there media in the drive?
    */
   hasMedia(): boolean;
   /**
    * Is playback currently on a dvd menu?
    */
   dvdMenuActive(): boolean;
   /**
    * The current dvd menu
    */
   activeDvdMenu(): any;
   /**
    * The state of playback
    */
   dvdState(): any;
   /**
    * The scan rate for fast forwarding and rewinding
    */
   dvdScanRate(): any;
   /**
    * To hide or show the controller window
    */
   controllerVisibility(): boolean;
   /**
    * The position of the controller window in screen coordinates
    */
   controllerPosition(): any;
   /**
    * The window bounds in screen coordinates
    */
   controllerBounds(): any;
   /**
    * The screen bounds the window is on
    */
   controllerScreenBounds(): any;
   /**
    * The controller orientation - (Not supported in 5.0 and greater)
    */
   controllerOrientation(): any;
   /**
    * The state of the controller drawer
    */
   controllerDrawer(): any;
   /**
    * To hide or show the info window - (Not supported in 5.0 and greater)
    */
   infoVisibility(): boolean;
   /**
    * The position of the info window in screen coordinates - (Not supported in 5.0 and greater)
    */
   infoPosition(): any;
   /**
    * The window bounds in screen coordinates - (Not supported in 5.0 and greater)
    */
   infoBounds(): any;
   /**
    * The screen bounds the window is on - (Not supported in 5.0 and greater)
    */
   infoScreenBounds(): any;
   /**
    * Sets the type of info window being displayed - (Not supported in 5.0 and greater)
    */
   infoType(): any;
   /**
    * The info text color - (Not supported in 5.0 and greater)
    */
   infoTextColor(): any;
   /**
    * To hide or show the viewer window
    */
   viewerVisibility(): boolean;
   /**
    * To set the position of the viewer window in screen coordinates
    */
   viewerPosition(): any;
   /**
    * The window bounds in screen coordinates
    */
   viewerBounds(): any;
   /**
    * The screen bounds the window is on
    */
   viewerScreenBounds(): any;
   /**
    * To set the the viewer size
    */
   viewerSize(): any;
   /**
    * Set to true to enter presentation mode
    */
   viewerFullScreen(): boolean;
   /**
    * To turn the audio on or off
    */
   audioMuted(): boolean;
   /**
    * The DVD audio volume, 0 is silent, 255 is full on
    */
   audioVolume(): number;
   /**
    * The elapsed time, in seconds, of the current title
    */
   elapsedTime(): number;
   /**
    * The elapsed time, in seconds and frames, of the current title
    */
   elapsedExtendedTime(): any;
   /**
    * The remaining time, in seconds, of the current title
    */
   remainingTime(): number;
   /**
    * The remaining time, in seconds and frames, of the current title
    */
   remainingExtendedTime(): any;
   /**
    * The length of the title in seconds
    */
   titleLength(): number;
   /**
    * The length of the title in seconds and frames
    */
   titleExtendedLength(): any;
   /**
    * The number of angles available at the current time position
    */
   availableAngles(): number;
   /**
    * The number of audio tracks available at the current time position
    */
   availableAudioTracks(): number;
   /**
    * The number of chapters available at the current time position
    */
   availableChapters(): number;
   /**
    * The number of subtitles available at the current time position
    */
   availableSubtitles(): number;
   /**
    * The number of titles available at the current time position
    */
   availableTitles(): number;
   /**
    * The current camera angle at the current time position
    */
   angle(): number;
   /**
    * The current audio track at the current time position
    */
   audioTrack(): number;
   /**
    * The current chapter at the current time position
    */
   chapter(): number;
   /**
    * Are we currently displaying subtitles?
    */
   displayingSubtitle(): boolean;
   /**
    * The current subtitle (caption) at the current time position
    */
   subtitle(): number;
   /**
    * The current title at the current time position
    */
   title(): number;
   /**
    * Turn closed captioning on or off
    */
   closedCaptioning(): boolean;
   /**
    * The display type for closed captioning
    */
   closedCaptioningDisplay(): any;
   /**
    * Supports extended bookmark functionality
    */
   extendedBookmarks(): boolean;
   /**
    * The number of bookmarks available for the current media
    */
   availableBookmarks(): number;
   /**
    * The names of the bookmarks for the current media
    */
   bookmarkList(): any;
   /**
    * Has a default bookmark been set?
    */
   hasDefaultBookmark(): boolean;
   /**
    * Does the media have a last play bookmark from being previously viewed?
    */
   hasLastPlayBookmark(): any;
   /**
    * Supports extended video clip functionality
    */
   extendedVideoClips(): boolean;
   /**
    * The number of video clips available for the current media
    */
   availableVideoClips(): number;
   /**
    * The names of the video clips for the current media
    */
   videoClipList(): any;
   /**
    * To turn the loop state for video clips on or off
    */
   loopVideoClip(): boolean;
   /**
    * Is video clip being played?
    */
   clipMode(): boolean;
   /**
    * Disable displaying the status message?
    */
   disableStatusWindow(): boolean;
 }
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * DVD Player
  */
 export interface Application {
   privateMenuPaused(): boolean;
   privateMenuActionTicks(): number;
 }
    
    // Records

    // Function options



















}
export interface DVDPlayer extends DVDPlayer.Application {
    // Functions

     /**
      * Start fast forwarding a DVD disc

      * @return returns DVD Player error code
      */
     fastForwardDvd(): number;

     /**
      * Start playback of a DVD disc

      * @return returns DVD Player error code
      */
     playDvd(): number;

     /**
      * Pause the playback of a DVD disc

      * @return returns DVD Player error code
      */
     pauseDvd(): number;

     /**
      * Start rewinding a DVD disc

      * @return returns DVD Player error code
      */
     rewindDvd(): number;

     /**
      * Stop the playback of a DVD disc

      * @return returns DVD Player error code
      */
     stopDvd(): number;

     /**
      * Step the dvd movie to the next frame

      * @return returns DVD Player error code
      */
     stepDvd(): number;

     /**
      * Go to the specified place
      * @param directParameter undefined
      * @return returns DVD Player error code
      */
     go(directParameter: any, ): number;

     /**
      * Press a key in a menu
      * @param directParameter undefined
      * @return returns DVD Player error code
      */
     press(directParameter: any, ): number;

     /**
      * open a VIDEO_TS folder for playing dvd from file
      * @param directParameter file reference to VIDEO_TS folder
      * @return returns DVD Player error code
      */
     openVIDEOTs(directParameter: any, ): number;

     /**
      * open a dvd video folder (VIDEO_TS or HVDVD_TS) folder for playing dvd from file
      * @param directParameter file reference to VIDEO_TS or HVDVD_TS folder
      * @return returns DVD Player error code
      */
     openDvdVideoFolder(directParameter: any, ): number;

     /**
      * Play the previous chapter of the current title

      * @return returns DVD Player error code
      */
     playPreviousChapter(): number;

     /**
      * Play the next chapter of the current title

      * @return returns DVD Player error code
      */
     playNextChapter(): number;

     /**
      * Specify the bookmark to play by index
      * @param directParameter The index of the bookmark
      * @return returns DVD Player error code
      */
     playBookmark(directParameter: number, ): number;

     /**
      * Specify the bookmark to play by name
      * @param directParameter The name of the bookmark
      * @return returns DVD Player error code
      */
     playNamedBookmark(directParameter: string, ): number;

     /**
      * Specify the video clip to play by index
      * @param directParameter The index of the video clip
      * @return returns DVD Player error code
      */
     playVideoClip(directParameter: number, ): number;

     /**
      * Specify the video clip to play by name
      * @param directParameter The name of the video clip
      * @return returns DVD Player error code
      */
     playNamedVideoClip(directParameter: string, ): number;

     /**
      * Exit video clip mode if currently playing a video clip

      * @return returns DVD Player error code
      */
     exitClipMode(): number;

     /**
      * obscure the mouse cursor

      * @return returns DVD Player error code
      */
     obscureCursor(): number;

     /**
      * eject the dvd we are using

      * @return returns DVD Player error code
      */
     ejectDvd(): number;
}
