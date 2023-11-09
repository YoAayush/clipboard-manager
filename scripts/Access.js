
chrome.storage.local.get("data", (result)=>{
    if(result.data){
        result.data.forEach(element => {
            console.log("fetched data is " + element);
            const newElement = `<span class="clips">${element}<i title="copy" class="fa-regular fa-copy"></i></span>`;
            document.querySelector(".sec-2").innerHTML += newElement;
            document.querySelector(".sec-2").lastElementChild.addEventListener("click",()=>{
                console.log("text is added to clipboard");
                navigator.clipboard.writeText(element);
            })
        });
    } 

    //image get code.
    // else{
    //     result.data.forEach(element => {
    //         console.log("fetched data is " + element);
    //         const newElement = `<span class="clips"><img src=${element} style="width: 200px;height: 100px;object-fit: contain;"/><i title="copy" class="fa-regular fa-copy"></i></span>`;
    //         document.querySelector(".sec-2").innerHTML += newElement;
    //         document.querySelector(".sec-2").lastElementChild.addEventListener("click",()=>{
    //             console.log("image is added to clipboard");
    //             navigator.clipboard.write([
    //                 new ClipboardItem({
    //                     'image/*': element
    //                 })
    //             ]);
    //         })
    //     });
    // }
});

