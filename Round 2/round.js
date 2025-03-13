// Load list items automatically from localStorage
window.onload = function () {
    let storedData = localStorage.getItem("listData");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist1");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List loaded from localStorage");
    } else {
        console.log("No data found in localStorage");
    }
};

//card2
window.onload = function () {
    let storedData = localStorage.getItem("listData2");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist2");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 2");
    }
};

//card3
window.onload = function () {
    let storedData = localStorage.getItem("listData3");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist3");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 3");
    }
};

//card4
window.onload = function () {
    let storedData = localStorage.getItem("listData4");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist4");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 4");
    }
};

//card5
window.onload = function () {
    let storedData = localStorage.getItem("listData5");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist5");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 5");
    }
};

//card6
window.onload = function () {
    let storedData = localStorage.getItem("listData6");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist6");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 6");
    }
};

//card7
window.onload = function () {
    let storedData = localStorage.getItem("listData7");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist7");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 7");
    }
};

//card8
window.onload = function () {
    let storedData = localStorage.getItem("listData8");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist8");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 8");
    }
};

//card9
window.onload = function () {
    let storedData = localStorage.getItem("listData9");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist9");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 9");
    }
};

//card10
window.onload = function () {
    let storedData = localStorage.getItem("listData10");

    if (storedData) {
        let itemsArray = JSON.parse(storedData);
        let list = document.querySelector(".slist10");

        itemsArray.forEach(itemText => {
            let li = document.createElement("li");
            li.innerText = itemText;
            list.appendChild(li);
        });

        console.log("List 2 loaded from localStorage");
    } else {
        console.log("No data found for List 10");
    }
};