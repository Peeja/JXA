
export namespace FontBook {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Abstract object provides a base class for scripting classes. It is never used directly.
  */
 export interface Item {
   /**
    * The class of the object.
    */
   class(): any;
   /**
    * All of the object's properties.
    */
   properties(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An application's top level scripting object.
  */
 export interface Application {
   /**
    * The name of the application.
    */
   name(): string;
   /**
    * Is this the frontmost (active) application?
    */
   frontmost(): boolean;
   /**
    * The version of the application.
    */
   version(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A color.
  */
 export interface Color {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A document.
  */
 export interface Document {
   /**
    * The document's path.
    */
   path(): string;
   /**
    * Has the document been modified since the last save?
    */
   modified(): boolean;
   /**
    * The document's name.
    */
   name(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A window.
  */
 export interface Window {
   /**
    * The full title of the window.
    */
   name(): string;
   /**
    * The unique identifier of the window.
    */
   id(): number;
   /**
    * The bounding rectangle of the window.
    */
   bounds(): any;
   /**
    * Whether the window has a close box.
    */
   closeable(): boolean;
   /**
    * Whether the window has a title bar.
    */
   titled(): boolean;
   /**
    * The index of the window in the back-to-front window ordering.
    */
   index(): number;
   /**
    * Whether the window floats.
    */
   floating(): boolean;
   /**
    * Whether the window can be miniaturized.
    */
   miniaturizable(): boolean;
   /**
    * Whether the window is currently miniaturized.
    */
   miniaturized(): boolean;
   /**
    * Whether the window is the application's current modal window.
    */
   modal(): boolean;
   /**
    * Whether the window can be resized.
    */
   resizable(): boolean;
   /**
    * Whether the window is currently visible.
    */
   visible(): boolean;
   /**
    * Whether the window can be zoomed.
    */
   zoomable(): boolean;
   /**
    * Whether the window is currently zoomed.
    */
   zoomed(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A font family
  */
 export interface FontFamily {
   /**
    * The name of the family
    */
   name(): string;
   /**
    * Synonym for displayed name
    */
   displayName(): string;
   /**
    * Font family display name
    */
   displayedName(): string;
   /**
    * A font family
    */
   enabled(): boolean;
   /**
    * Whether the family contains duplicated faces
    */
   duplicated(): boolean;
   /**
    * Font files for the family
    */
   files(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A typeface
  */
 export interface Typeface {
   /**
    * The name of the family
    */
   name(): string;
   /**
    * Synonym for displayed name
    */
   displayName(): string;
   /**
    * Typeface display name
    */
   displayedName(): string;
   /**
    * Font family
    */
   fontFamily(): any;
   /**
    * Font family name
    */
   familyName(): string;
   /**
    * Style name
    */
   styleName(): string;
   /**
    * PostScript font name
    */
   postScriptName(): string;
   /**
    * The unique identifier of the typeface
    */
   ID(): string;
   /**
    * A font family
    */
   enabled(): boolean;
   /**
    * Whether the typeface is duplicated or not duplicated faces
    */
   duplicated(): boolean;
   /**
    * Font format
    */
   fontType(): string;
   /**
    * Copyright
    */
   copyright(): string;
   /**
    * Font container
    */
   fontContainer(): any;
   /**
    * Font files for the face
    */
   files(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An abstact object representing font files
  */
 export interface FontContainer {
   /**
    * The name of the container
    */
   name(): string;
   /**
    * The path to the main container
    */
   path(): string;
   /**
    * Files for the container
    */
   files(): any;
   /**
    * Font Domain for the container
    */
   domain(): any;
   /**
    * The unique identifier of the container
    */
   ID(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A font collection.
  */
 export interface FontCollection {
   /**
    * The name of the collection
    */
   name(): string;
   /**
    * Synonym for displayed name
    */
   displayName(): string;
   /**
    * Display name of the domain
    */
   displayedName(): string;
   /**
    * Whether the collection is enabled or disabled.
    */
   enabled(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A font library
  */
 export interface FontLibrary {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * MyFonts font library
  */
 export interface MyFontsLibrary {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A font domain
  */
 export interface FontDomain {
   /**
    * The unique identifier of the domain
    */
   ID(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * All Fonts library object
  */
 export interface AllFontsLibraryObject {}
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Font Book's top level scripting object.
  */
 export interface Application {
   /**
    * Whether validating fonts before installing or not.
    */
   validateFontsBeforeInstalling(): boolean;
   /**
    * Where to install fonts.
    */
   installationTarget(): any;
   /**
    * The All Fonts library.
    */
   fontsLibrary(): any;
   /**
    * current selection.
    */
   selection(): any;
   /**
    * selected font families.
    */
   selectedFontFamilies(): any;
   /**
    * selected collections.
    */
   selectedCollections(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A typeface
  */
 export interface Typeface {
   /**
    * additional info about the typeface
    */
   typefaceAdditionalInfo(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * All Fonts library object
  */
 export interface AllFontsLibraryObject {
   /**
    * Whether the collection is enabled or disabled.
    */
   enabled(): boolean;
 }
    
    // Records

    // Function options


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface QuitOptionalParameter {
      /**
       * Specifies whether changes should be saved before quitting.
       */
      saving?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CloseOptionalParameter {
      /**
       * Specifies whether changes should be saved before closing.
       */
      saving?: any;
      /**
       * The file in which to save the object.
       */
      savingIn?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CountOptionalParameter {
      /**
       * The class of objects to be counted.
       */
      each?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new object(s).
       */
      to: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * The class of the new object.
       */
      new: any;
      /**
       * The location at which to insert the object.
       */
      at?: any;
      /**
       * The initial data for the object.
       */
      withData?: any;
      /**
       * The initial values for properties of the object.
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
       * The new location for the object(s).
       */
      to: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SaveOptionalParameter {
      /**
       * The file in which to save the object.
       */
      in?: string;
      /**
       * The file type in which to save the data.
       */
      as?: string;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SetOptionalParameter {
      /**
       * The new value.
       */
      to: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface AddOptionalParameter {
      /**
       * The container to which to add the object
       */
      to?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface RemoveOptionalParameter {
      /**
       * The container from which to remove the object
       */
      from?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ExportOptionalParameter {
      /**
       * The path to which to export the objeccts
       */
      to: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ValidateFontFileOptionalParameter {
      /**
       * Whether to generate summay.
       */
      generatingSummaryOnly?: boolean;
      /**
       * Whether to ignore erros.
       */
      ignorringErrors?: boolean;
      /**
       * Whether to do dynamic checking.
       */
      dynamicChecking?: boolean;
      /**
       * Additional parameters.
       */
      withProperties?: any;
    }

}
export interface FontBook extends FontBook.Application {
    // Functions

     /**
      * Open an object.
      * @param directParameter list of objects to open
      * 
      */
     open(directParameter: any, ): void;

     /**
      * Print an object.
      * @param directParameter list of objects to print
      * 
      */
     print(directParameter: any, ): void;

     /**
      * Quit an application.

      * @param option
      * 
      */
     quit(option?: FontBook.QuitOptionalParameter): void;

     /**
      * Close an object.
      * @param directParameter the object to close
      * @param option
      * 
      */
     close(directParameter: any, option?: FontBook.CloseOptionalParameter): void;

     /**
      * Return the number of elements of a particular class within an object.
      * @param directParameter the object whose elements are to be counted
      * @param option
      * @return the number of elements
      */
     count(directParameter: any, option?: FontBook.CountOptionalParameter): number;

     /**
      * Delete an object.
      * @param directParameter the object to delete
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Copy object(s) and put the copies at a new location.
      * @param directParameter the object(s) to duplicate
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: FontBook.DuplicateOptionalParameter): void;

     /**
      * Verify if an object exists.
      * @param directParameter the object in question
      * @return true if it exists, false if not
      */
     exists(directParameter: any, ): boolean;

     /**
      * Get the data for an object.
      * @param directParameter undefined
      * @return undefined
      */
     get(directParameter: any, ): any;

     /**
      * Make a new object.

      * @param option
      * @return to the new object
      */
     make(option?: FontBook.MakeOptionalParameter): any;

     /**
      * Move object(s) to a new location.
      * @param directParameter the object(s) to move
      * @param option
      * 
      */
     move(directParameter: any, option?: FontBook.MoveOptionalParameter): void;

     /**
      * Save an object.
      * @param directParameter the object to save, usually a document or window
      * @param option
      * 
      */
     save(directParameter: any, option?: FontBook.SaveOptionalParameter): void;

     /**
      * Set an object's data.
      * @param directParameter undefined
      * @param option
      * 
      */
     set(directParameter: any, option?: FontBook.SetOptionalParameter): void;

     /**
      * Add the given object to the container.
      * @param directParameter The object for the command
      * @param option
      * 
      */
     add(directParameter: any, option?: FontBook.AddOptionalParameter): void;

     /**
      * Remove the given object from the container.
      * @param directParameter The object for the command
      * @param option
      * 
      */
     remove(directParameter: any, option?: FontBook.RemoveOptionalParameter): void;

     /**
      * Export the given objects to the specified location.
      * @param directParameter The object for the command
      * @param option
      * 
      */
     export(directParameter: any, option?: FontBook.ExportOptionalParameter): void;

     /**
      * Validate the given font file.
      * @param directParameter The file for the command
      * @param option
      * @return undefined
      */
     validateFontFile(directParameter: any, option?: FontBook.ValidateFontFileOptionalParameter): any;
}
