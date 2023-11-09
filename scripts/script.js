// import isUrl from "is-url";

chrome.contextMenus.create({
  id: "clipboardManager",
  title: "Add to clipboard Manager",
  contexts: ["all"]
})

chrome.contextMenus.onClicked.addListener((info,tab) => {
  if(info.selectionText && info.menuItemId === "clipboardManager"){
    console.log(info.selectionText);
    const data = info.selectionText;
    // chrome.storage.local.set({"data": data}).then(() => {
    //   console.log("value that has been set is " + data);
    // })
    chrome.storage.local.get("data", (result) => {
      console.log(result);
      if (result.data) {
        chrome.storage.local.set({ data: [...result.data, data] });
      } else {
        chrome.storage.local.set({ data: [data] });
      }
    });
  } else{
      if(info.mediaType){
        // const firstCheck = isUrl(info.srcUrl);
        // console.log(firstCheck);
        const source = info.srcUrl;
        // console.log(typeof(source));
        chrome.storage.local.get("data", (result) => {
          console.log(result);
          if (result.data) {
            chrome.storage.local.set({ data: [...result.data, source] });
          } else {
            chrome.storage.local.set({ data: [source] });
          }
        });
      } else{
        const link = info.linkUrl;
        chrome.storage.local.get("data", (result) => {
          console.log(result);
          if (result.data) {
            chrome.storage.local.set({ data: [...result.data, link] });
          } else {
            chrome.storage.local.set({ data: [link] });
          }
        });
      }
  }
});

//clear chrome storage.
// chrome.storage.local.clear(function() {
//   var error = chrome.runtime.lastError;
//   if (error) {
//       console.error(error);
//   }
//   console.log("clipboard is cleared.")
// });