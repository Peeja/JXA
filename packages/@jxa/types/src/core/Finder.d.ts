
export namespace Finder {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The Finder
  */
 export interface Application {
   /**
    * (NOT AVAILABLE YET) the Finder’s clipboard window
    */
   clipboard: any;
   /**
    * the Finder’s name
    */
   name: string;
   /**
    * Is the Finder’s layer visible?
    */
   visible: boolean;
   /**
    * Is the Finder the frontmost process?
    */
   frontmost: boolean;
   /**
    * the selection in the frontmost Finder window
    */
   selection: any;
   /**
    * the container in which a new folder would appear if “New Folder” was selected
    */
   insertionLocation: any;
   /**
    * the version of the System software running on this computer
    */
   productVersion: string;
   /**
    * the version of the Finder
    */
   version: string;
   /**
    * the startup disk
    */
   startupDisk: any;
   /**
    * the desktop
    */
   desktop: any;
   /**
    * the trash
    */
   trash: any;
   /**
    * the home directory
    */
   home: any;
   /**
    * the computer location (as in Go > Computer)
    */
   computerContainer: any;
   /**
    * Various preferences that apply to the Finder as a whole
    */
   finderPreferences: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An item
  */
 export interface Item {
   /**
    * the name of the item
    */
   name: string;
   /**
    * the user-visible name of the item
    */
   displayedName: string;
   /**
    * the name extension of the item (such as “txt”)
    */
   nameExtension: string;
   /**
    * Is the item's extension hidden from the user?
    */
   extensionHidden: boolean;
   /**
    * the index in the front-to-back ordering within its container
    */
   index: number;
   /**
    * the container of the item
    */
   container: any;
   /**
    * the disk on which the item is stored
    */
   disk: any;
   /**
    * the position of the item within its parent window (can only be set for an item in a window viewed as icons or buttons)
    */
   position: any;
   /**
    * the position of the item on the desktop
    */
   desktopPosition: any;
   /**
    * the bounding rectangle of the item (can only be set for an item in a window viewed as icons or buttons)
    */
   bounds: any;
   /**
    * the label of the item
    */
   labelIndex: number;
   /**
    * Is the file locked?
    */
   locked: boolean;
   /**
    * the kind of the item
    */
   kind: string;
   /**
    * a description of the item
    */
   description: string;
   /**
    * the comment of the item, displayed in the “Get Info” window
    */
   comment: string;
   /**
    * the logical size of the item
    */
   size: any;
   /**
    * the actual space used by the item on disk
    */
   physicalSize: any;
   /**
    * the date on which the item was created
    */
   creationDate: any;
   /**
    * the date on which the item was last modified
    */
   modificationDate: any;
   /**
    * the icon bitmap of the item
    */
   icon: any;
   /**
    * the URL of the item
    */
   URL: string;
   /**
    * the user that owns the container
    */
   owner: string;
   /**
    * the user or group that has special access to the container
    */
   group: string;
   ownerPrivileges: any;
   groupPrivileges: any;
   everyonesPrivileges: any;
   /**
    * the information window for the item
    */
   informationWindow: any;
   /**
    * every property of an item
    */
   properties: any;
   /**
    * the class of the item
    */
   class: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An item that contains other items
  */
 export interface Container {
   /**
    * the entire contents of the container, including the contents of its children
    */
   entireContents: any;
   /**
    * (NOT AVAILABLE YET) Is the container capable of being expanded as an outline?
    */
   expandable: boolean;
   /**
    * (NOT AVAILABLE YET) Is the container opened as an outline? (can only be set for containers viewed as lists)
    */
   expanded: boolean;
   /**
    * (NOT AVAILABLE YET) Are the container and all of its children opened as outlines? (can only be set for containers viewed as lists)
    */
   completelyExpanded: boolean;
   /**
    * the container window for this folder
    */
   containerWindow: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * the Computer location (as in Go > Computer)
  */
 export interface ComputerObject {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A disk
  */
 export interface Disk {
   /**
    * the unique id for this disk (unchanged while disk remains connected and Finder remains running)
    */
   id: number;
   /**
    * the total number of bytes (free or used) on the disk
    */
   capacity: any;
   /**
    * the number of free bytes left on the disk
    */
   freeSpace: any;
   /**
    * Can the media be ejected (floppies, CDs, and so on)?
    */
   ejectable: boolean;
   /**
    * Is the media a local volume (as opposed to a file server)?
    */
   localVolume: boolean;
   /**
    * Is this disk the boot disk?
    */
   startup: boolean;
   /**
    * the filesystem format of this disk
    */
   format: any;
   /**
    * Does this disk do file system journaling?
    */
   journalingEnabled: boolean;
   /**
    * Ignore permissions on this disk?
    */
   ignorePrivileges: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A folder
  */
 export interface Folder {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Desktop-object is the class of the “desktop” object
  */
 export interface DesktopObject {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Trash-object is the class of the “trash” object
  */
 export interface TrashObject {
   /**
    * Display a dialog when emptying the trash?
    */
   warnsBeforeEmptying: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A file
  */
 export interface File {
   /**
    * the OSType identifying the type of data contained in the item
    */
   fileType: any;
   /**
    * the OSType identifying the application that created the item
    */
   creatorType: any;
   /**
    * Is the file a stationery pad?
    */
   stationery: boolean;
   /**
    * the version of the product (visible at the top of the “Get Info” window)
    */
   productVersion: string;
   /**
    * the version of the file (visible at the bottom of the “Get Info” window)
    */
   version: string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An alias file (created with “Make Alias”)
  */
 export interface AliasFile {
   /**
    * the original item pointed to by the alias
    */
   originalItem: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An application's file on disk
  */
 export interface ApplicationFile {
   /**
    * the bundle identifier or creator type of the application
    */
   id: string;
   /**
    * (AVAILABLE IN 10.1 TO 10.4) the memory size with which the developer recommends the application be launched
    */
   suggestedSize: number;
   /**
    * (AVAILABLE IN 10.1 TO 10.4) the smallest memory size with which the application can be launched
    */
   minimumSize: number;
   /**
    * (AVAILABLE IN 10.1 TO 10.4) the memory size with which the application will be launched
    */
   preferredSize: number;
   /**
    * Is the application high-level event aware? (OBSOLETE: always returns true)
    */
   acceptsHighLevelEvents: boolean;
   /**
    * Does the process have a scripting terminology, i.e., can it be scripted?
    */
   hasScriptingTerminology: boolean;
   /**
    * (AVAILABLE IN 10.1 TO 10.4) Should the application launch in the Classic environment?
    */
   opensInClassic: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A document file
  */
 export interface DocumentFile {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A file containing an internet location
  */
 export interface InternetLocationFile {
   /**
    * the internet location
    */
   location: string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A clipping
  */
 export interface Clipping {
   /**
    * (NOT AVAILABLE YET) the clipping window for this clipping
    */
   clippingWindow: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A package
  */
 export interface Package {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A window
  */
 export interface Window {
   /**
    * the unique id for this window
    */
   id: any;
   /**
    * the upper left position of the window
    */
   position: any;
   /**
    * the boundary rectangle for the window
    */
   bounds: any;
   /**
    * Does the window have a title bar?
    */
   titled: boolean;
   /**
    * the name of the window
    */
   name: string;
   /**
    * the number of the window in the front-to-back layer ordering
    */
   index: number;
   /**
    * Does the window have a close box?
    */
   closeable: boolean;
   /**
    * Does the window have a title bar?
    */
   floating: boolean;
   /**
    * Is the window modal?
    */
   modal: boolean;
   /**
    * Is the window resizable?
    */
   resizable: boolean;
   /**
    * Is the window zoomable?
    */
   zoomable: boolean;
   /**
    * Is the window zoomed?
    */
   zoomed: boolean;
   /**
    * Is the window visible (always true for open Finder windows)?
    */
   visible: boolean;
   /**
    * Is the window collapsed
    */
   collapsed: boolean;
   /**
    * every property of a window
    */
   properties: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A file viewer window
  */
 export interface FinderWindow {
   /**
    * the container at which this file viewer is targeted
    */
   target: any;
   /**
    * the current view for the container window
    */
   currentView: any;
   /**
    * the icon view options for the container window
    */
   iconViewOptions: any;
   /**
    * the list view options for the container window
    */
   listViewOptions: any;
   /**
    * the column view options for the container window
    */
   columnViewOptions: any;
   /**
    * Is the window's toolbar visible?
    */
   toolbarVisible: boolean;
   /**
    * Is the window's status bar visible?
    */
   statusbarVisible: boolean;
   /**
    * the width of the sidebar for the container window
    */
   sidebarWidth: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * the desktop window
  */
 export interface DesktopWindow {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An inspector window (opened by “Show Info”)
  */
 export interface InformationWindow {
   /**
    * the item from which this window was opened
    */
   item: any;
   /**
    * the current panel in the information window
    */
   currentPanel: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The Finder Preferences window
  */
 export interface PreferencesWindow {
   /**
    * The current panel in the Finder preferences window
    */
   currentPanel: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The window containing a clipping
  */
 export interface ClippingWindow {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A process running on this computer
  */
 export interface Process {
   /**
    * the name of the process
    */
   name: string;
   /**
    * Is the process' layer visible?
    */
   visible: boolean;
   /**
    * Is the process the frontmost process?
    */
   frontmost: boolean;
   /**
    * the file from which the process was launched
    */
   file: any;
   /**
    * the OSType of the file type of the process
    */
   fileType: any;
   /**
    * the OSType of the creator of the process (the signature)
    */
   creatorType: any;
   /**
    * Is the process high-level event aware (accepts open application, open document, print document, and quit)?
    */
   acceptsHighLevelEvents: boolean;
   /**
    * Does the process accept remote events?
    */
   acceptsRemoteEvents: boolean;
   /**
    * Does the process have a scripting terminology, i.e., can it be scripted?
    */
   hasScriptingTerminology: boolean;
   /**
    * the size of the partition with which the process was launched
    */
   totalPartitionSize: number;
   /**
    * the number of bytes currently used in the process' partition
    */
   partitionSpaceUsed: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A process launched from an application file
  */
 export interface ApplicationProcess {
   /**
    * the application file from which this process was launched
    */
   applicationFile: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A process launched from a desk accessory file
  */
 export interface DeskAccessoryProcess {
   /**
    * the desk accessory file from which this process was launched
    */
   deskAccessoryFile: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The Finder Preferences
  */
 export interface Preferences {
   /**
    * the window that would open if Finder preferences was opened
    */
   window: any;
   /**
    * the default icon view options
    */
   iconViewOptions: any;
   /**
    * the default list view options
    */
   listViewOptions: any;
   /**
    * the column view options for all windows
    */
   columnViewOptions: any;
   /**
    * Spring open folders after the specified delay?
    */
   foldersSpringOpen: boolean;
   /**
    * the delay before springing open a container in seconds (from 0.167 to 1.169)
    */
   delayBeforeSpringing: any;
   /**
    * Hard disks appear on the desktop?
    */
   desktopShowsHardDisks: boolean;
   /**
    * External hard disks appear on the desktop?
    */
   desktopShowsExternalHardDisks: boolean;
   /**
    * CDs, DVDs, and iPods appear on the desktop?
    */
   desktopShowsRemovableMedia: boolean;
   /**
    * Connected servers appear on the desktop?
    */
   desktopShowsConnectedServers: boolean;
   /**
    * target location for a newly-opened Finder window
    */
   newWindowTarget: any;
   /**
    * Folders open into new windows?
    */
   foldersOpenInNewWindows: boolean;
   /**
    * Folders open into new tabs?
    */
   foldersOpenInNewTabs: boolean;
   /**
    * Open new windows in column view?
    */
   newWindowsOpenInColumnView: boolean;
   /**
    * Show name extensions, even for items whose “extension hidden” is true?
    */
   allNameExtensionsShowing: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * (NOT AVAILABLE YET) A Finder label (name and color)
  */
 export interface Label {
   /**
    * the name associated with the label
    */
   name: string;
   /**
    * the index in the front-to-back ordering within its container
    */
   index: number;
   /**
    * the color associated with the label
    */
   color: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * (NOT AVAILABLE YET) A family of icons
  */
 export interface IconFamily {
   /**
    * the large black-and-white icon and the mask for large icons
    */
   largeMonochromeIconAndMask: any;
   /**
    * the large 8-bit mask for large 32-bit icons
    */
   large8BitMask: any;
   /**
    * the large 32-bit color icon
    */
   large32BitIcon: any;
   /**
    * the large 8-bit color icon
    */
   large8BitIcon: any;
   /**
    * the large 4-bit color icon
    */
   large4BitIcon: any;
   /**
    * the small black-and-white icon and the mask for small icons
    */
   smallMonochromeIconAndMask: any;
   /**
    * the small 8-bit mask for small 32-bit icons
    */
   small8BitMask: any;
   /**
    * the small 32-bit color icon
    */
   small32BitIcon: any;
   /**
    * the small 8-bit color icon
    */
   small8BitIcon: any;
   /**
    * the small 4-bit color icon
    */
   small4BitIcon: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * the icon view options
  */
 export interface IconViewOptions {
   /**
    * the property by which to keep icons arranged
    */
   arrangement: any;
   /**
    * the size of icons displayed in the icon view
    */
   iconSize: number;
   /**
    * additional info about an item displayed in icon view
    */
   showsItemInfo: boolean;
   /**
    * displays a preview of the item in icon view
    */
   showsIconPreview: boolean;
   /**
    * the size of the text displayed in the icon view
    */
   textSize: number;
   /**
    * the location of the label in reference to the icon
    */
   labelPosition: any;
   /**
    * the background picture of the icon view
    */
   backgroundPicture: any;
   /**
    * the background color of the icon view
    */
   backgroundColor: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * the column view options
  */
 export interface ColumnViewOptions {
   /**
    * the size of the text displayed in the column view
    */
   textSize: number;
   /**
    * displays an icon next to the label in column view
    */
   showsIcon: boolean;
   /**
    * displays a preview of the item in column view
    */
   showsIconPreview: boolean;
   /**
    * displays the preview column in column view
    */
   showsPreviewColumn: boolean;
   /**
    * discloses the preview pane of the preview column in column view
    */
   disclosesPreviewPane: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * the list view options
  */
 export interface ListViewOptions {
   /**
    * Are folder sizes calculated and displayed in the window?
    */
   calculatesFolderSizes: boolean;
   /**
    * displays a preview of the item in list view
    */
   showsIconPreview: boolean;
   /**
    * the size of icons displayed in the list view
    */
   iconSize: any;
   /**
    * the size of the text displayed in the list view
    */
   textSize: number;
   /**
    * the column that the list view is sorted on
    */
   sortColumn: any;
   /**
    * Are relative dates (e.g., today, yesterday) shown in the list view?
    */
   usesRelativeDates: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * a column of a list view
  */
 export interface Column {
   /**
    * the index in the front-to-back ordering within its container
    */
   index: number;
   /**
    * the column name
    */
   name: any;
   /**
    * The direction in which the window is sorted
    */
   sortDirection: any;
   /**
    * the width of this column
    */
   width: number;
   /**
    * the minimum allowed width of this column
    */
   minimumWidth: number;
   /**
    * the maximum allowed width of this column
    */
   maximumWidth: number;
   /**
    * is this column visible
    */
   visible: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A list of aliases. Use ‘as alias list’ when a list of aliases is needed (instead of a list of file system item references).
  */
 export interface AliasList {}
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The Finder
  */
 export interface Application {
   /**
    * the desktop picture of the main monitor
    */
   desktopPicture: any;
 }
    
    // Records

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface OpenOptionalParameter {
      /**
       * the application file to open the object with
       */
      using?: any;
      /**
       * the initial values for the properties, to be included with the open command sent to the application that opens the direct object
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface PrintOptionalParameter {
      /**
       * optional properties to be included with the print command sent to the application that prints the direct object
       */
      withProperties?: any;
    }




    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CountOptionalParameter {
      /**
       * the class of the elements to be counted
       */
      each: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DataSizeOptionalParameter {
      /**
       * the data type for which the size is calculated
       */
      as?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * the new location for the object(s)
       */
      to?: any;
      /**
       * Specifies whether or not to replace items in the destination that have the same name as items being duplicated
       */
      replacing?: boolean;
      /**
       * Specifies whether or not to autoroute items (default is false). Only applies when copying to the system folder.
       */
      routingSuppressed?: boolean;
      /**
       * Specifies whether or not to copy permissions/ownership as is
       */
      exactCopy?: boolean;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * the class of the new element
       */
      new: any;
      /**
       * the location at which to insert the element
       */
      at: any;
      /**
       * when creating an alias file, the original item to create an alias to or when creating a file viewer window, the target of the window
       */
      to?: any;
      /**
       * the initial values for the properties of the element
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MoveOptionalParameter {
      /**
       * the new location for the object(s)
       */
      to: any;
      /**
       * Specifies whether or not to replace items in the destination that have the same name as items being moved
       */
      replacing?: boolean;
      /**
       * Gives a list (in local window coordinates) of positions for the destination items
       */
      positionedAt?: any;
      /**
       * Specifies whether or not to autoroute items (default is false). Only applies when moving to the system folder.
       */
      routingSuppressed?: boolean;
    }




    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SortOptionalParameter {
      /**
       * the property to sort the items by (name, index, date, etc.)
       */
      by: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CleanUpOptionalParameter {
      /**
       * the order in which to clean up the objects (name, index, date, etc.)
       */
      by?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface EmptyOptionalParameter {
      /**
       * (obsolete)
       */
      security?: boolean;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface UpdateOptionalParameter {
      /**
       * only update if necessary (i.e. a finder window is open). default is false
       */
      necessity?: boolean;
      /**
       * register applications. default is true
       */
      registeringApplications?: boolean;
    }




}
export interface Finder extends Finder.Application {
    // Functions

     /**
      * Open the specified object(s)
      * @param directParameter list of objects to open
      * @param option
      * 
      */
     open(directParameter: any, option?: Finder.OpenOptionalParameter): void;

     /**
      * Print the specified object(s)
      * @param directParameter list of objects to print
      * @param option
      * 
      */
     print(directParameter: any, option?: Finder.PrintOptionalParameter): void;

     /**
      * Quit the Finder

      * 
      */
     quit(): void;

     /**
      * Activate the specified window (or the Finder)
      * @param directParameter the window to activate (if not specified, activates the Finder)
      * 
      */
     activate(directParameter?: any, ): void;

     /**
      * Close an object
      * @param directParameter the object to close
      * 
      */
     close(directParameter: any, ): void;

     /**
      * Return the number of elements of a particular class within an object
      * @param directParameter the object whose elements are to be counted
      * @param option
      * @return the number of elements
      */
     count(directParameter: any, option?: Finder.CountOptionalParameter): number;

     /**
      * Return the size in bytes of an object
      * @param directParameter the object whose data size is to be returned
      * @param option
      * @return the size of the object in bytes
      */
     dataSize(directParameter: any, option?: Finder.DataSizeOptionalParameter): number;

     /**
      * Move an item from its container to the trash
      * @param directParameter the item to delete
      * @return to the item that was just deleted
      */
     delete(directParameter: any, ): any;

     /**
      * Duplicate one or more object(s)
      * @param directParameter the object(s) to duplicate
      * @param option
      * @return to the duplicated object(s)
      */
     duplicate(directParameter: any, option?: Finder.DuplicateOptionalParameter): any;

     /**
      * Verify if an object exists
      * @param directParameter the object in question
      * @return true if it exists, false if not
      */
     exists(directParameter: any, ): boolean;

     /**
      * Make a new element

      * @param option
      * @return to the new object(s)
      */
     make(option?: Finder.MakeOptionalParameter): any;

     /**
      * Move object(s) to a new location
      * @param directParameter the object(s) to move
      * @param option
      * @return to the object(s) after they have been moved
      */
     move(directParameter: any, option?: Finder.MoveOptionalParameter): any;

     /**
      * Select the specified object(s)
      * @param directParameter the object to select
      * 
      */
     select(directParameter: any, ): void;

     /**
      * Private event to open a virtual location
      * @param directParameter the location to open
      * 
      */
     openVirtualLocation(directParameter: string, ): void;

     /**
      * (NOT AVAILABLE YET) Copy the selected items to the clipboard (the Finder must be the front application)

      * 
      */
     copy(): void;

     /**
      * Return the specified object(s) in a sorted list
      * @param directParameter a list of finder objects to sort
      * @param option
      * @return the sorted items in their new order
      */
     sort(directParameter: any, option?: Finder.SortOptionalParameter): any;

     /**
      * Arrange items in window nicely (only applies to open windows in icon view that are not kept arranged)
      * @param directParameter the window to clean up
      * @param option
      * 
      */
     cleanUp(directParameter: any, option?: Finder.CleanUpOptionalParameter): void;

     /**
      * Eject the specified disk(s)
      * @param directParameter the disk(s) to eject
      * 
      */
     eject(directParameter?: any, ): void;

     /**
      * Empty the trash
      * @param directParameter “empty” and “empty trash” both do the same thing
      * @param option
      * 
      */
     empty(directParameter?: any, option?: Finder.EmptyOptionalParameter): void;

     /**
      * (NOT AVAILABLE) Erase the specified disk(s)
      * @param directParameter the items to erase
      * 
      */
     erase(directParameter: any, ): void;

     /**
      * Bring the specified object(s) into view
      * @param directParameter the object to be made visible
      * 
      */
     reveal(directParameter: any, ): void;

     /**
      * Update the display of the specified object(s) to match their on-disk representation
      * @param directParameter the item to update
      * @param option
      * 
      */
     update(directParameter: any, option?: Finder.UpdateOptionalParameter): void;

     /**
      * Restart the computer

      * 
      */
     restart(): void;

     /**
      * Shut Down the computer

      * 
      */
     shutDown(): void;

     /**
      * Put the computer to sleep

      * 
      */
     sleep(): void;
}