var Safari = Application("Safari");
var doc = Safari.documents; // ドキュメントを取得する
var text: string = doc[0].text(); // ページの内容（テキスト）を取得する
Safari.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Safari.displayAlert(text); // アラートダイアログを表示する
