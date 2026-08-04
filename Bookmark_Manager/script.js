const titleInput = document.getElementById("website");
const urlInput = document.querySelector("#url");
const saveBtn = document.querySelector("#addBookmark");
const bookmarkList = document.querySelector("#bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
renderBookmark();
// let bookmarks = [];

saveBtn.addEventListener("click", () => {
    // e.preventDefault();
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();

    if(!validate(title,url)){
        return;
    };

    const bookmark = {
        title,
        url
    }

    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
    renderBookmark();
    
    titleInput.value="";
    urlInput.value="";

});

function renderBookmark(){
    bookmarkList.innerHTML = "";
    bookmarks.forEach(function(bookmark){
        const li = document.createElement("li");

        li.innerHTML = `
        <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`
        bookmarkList.append(li);
    })
}

function validate(title,url){
      if(title ==="" || url ===""){
        alert("Fill all fields")
        return false;
    }
    if(!url.startsWith("http")){
        alert("Invalid url");
        return false;
    }
    return true;
}