var contextMenu = {
    "id": 'clipboardManager',
    "title": "Add this to clipboard manager",
    "contexts": ["selection"]
  };
  
  chrome.contextMenus.create(contextMenu);
  
  const Arr = [];
  
  chrome.contextMenus.onClicked.addListener((info) => {
    try {
      if (info.menuItemId === "clipboardManager" && info.selectionText) {
        alert("you have selected " + info.selectionText);
        Arr.push(info.selectionText);
        copyItems();
      }
    } catch (error) {
        console.log(error);
    }
  });
  
  function copyItems(){
    for(var i = 0; i<Arr.length; i++){
      const newElement = `<span class="clips">${Arr[i]}<i title="copy" class="fa-regular fa-copy" onclick="()=>{clickEvent()}"></i></span>`;
       document.querySelector(".sec-2").innerHTML += newElement;
    }
  }
  
  //copy item function (NOT WORKING)
  function clickEvent(){
    const value = document.querySelector(".clips").textContent;
    console.log(value);
    navigator.clipboard.write(value);
    alert("value is added to clipboard is " + value);
    chrome.storage.local.set({key: value}).then(()=>{
      alert("vlaue is set in local storage");
    })
  }
  
  //below storage code is used to store copied item in chrome local storage for further use.
  // chrome.storage.local.set({key: copied_item}).then(()=>{
  //   alert("vlaue is set");
  // })
  
  
  