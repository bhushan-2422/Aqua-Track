// Toggle visibility for pipelines
document.querySelector('.pipelines').addEventListener('click', function(event) {
    event.preventDefault();
    
    const pipeContainer = document.querySelector('.pipe-container');
    const pipelinesLink = event.target;
    
    // Toggle visibility instead of display
    if (pipeContainer.style.visibility === 'hidden' || pipeContainer.style.visibility === '') {
        pipeContainer.style.visibility = 'visible';
    } else {
        pipeContainer.style.visibility = 'hidden';
    }

    pipelinesLink.classList.toggle('active');
});

// Calculate Life of Pipe
function getLife(pipe) {
    const manufactureDate = new Date(pipe.getAttribute('data-manufacture-date'));
    const currentDate = new Date();
    const diff = currentDate.getFullYear() - manufactureDate.getFullYear();
    

    if (diff > 8) return 5;
    if (diff > 5) return 3;
    if (diff > 2) return 1;
    return 0;
}

// Calculate Thickness
function getThickness(pipe) {
    const width = pipe.offsetWidth;
    return (width < 6) ? 3 : 1;
}

// Calculate Number of Joints
function getJoints(pipe) {
    return pipe.textContent.length;
}

// Check if in Farmland
function isInFarmland(pipe) {
    return pipe.classList.contains('farm') ? 3 : 0;
}

// Check if near a tank
function isNearTank(pipe) {
    return pipe.classList.contains('neartank') ? 3 : 0;
}

// Check if plastic
function isPlastic(pipe) {
    return pipe.classList.contains('plastic') ? 3 : 0;
}


// Apply Color Based on Condition
function applyConditionColor(life, thickness, joints, farmland, neartank, plastic, pipe) {
    const sum = life + thickness + joints + farmland + neartank + plastic;
    
    if (sum > 9) {
        pipe.style.backgroundColor = 'red';
    } 
    else if (sum > 7 && sum <= 10) {
        pipe.style.backgroundColor = 'blue';
    } 
    else {
        pipe.style.backgroundColor = 'green';
    }
}




// Evaluate All Pipes
function evaluatePipes() {
    const pipes = document.querySelectorAll('.pipe');
    pipes.forEach(pipe => {
        const life = getLife(pipe);
        const thickness = getThickness(pipe);
        const joints = getJoints(pipe);
        const farmland = isInFarmland(pipe);
        const neartank = isNearTank(pipe);
        const plastic = isPlastic(pipe);

        applyConditionColor(life, thickness, joints, farmland, neartank, plastic, pipe);
    });
}

evaluatePipes();

//update card lists
 // Function to check if an <li> with the same text already exists in a list
function listContainsText(list, text) {
    return Array.from(list.children).some(li => li.textContent === text);
}

// Function to update each list dynamically
function updateLists() {
    for (let i = 1; i <= 10; i++) {
        const list = document.querySelector(`.list${i}`); // Select the corresponding list
        const areaElements = document.querySelectorAll(`.area${i}`); // Select corresponding divs

        let added = false; // Ensure only one entry per area group

        areaElements.forEach(pipe => {
            if (!added) {
                if (getLife(pipe) === 5 && !listContainsText(list, "Pipe is 9 years old")) {
                    const li = document.createElement("li");
                    li.textContent = "Pipe is 9 years old";
                    list.appendChild(li);
                }
                if (getThickness(pipe) === 3 && !listContainsText(list, "Thickness is less")) {
                    const li = document.createElement("li");
                    li.textContent = "Thickness is less";
                    list.appendChild(li);
                }
                if (getJoints(pipe) > 0) {
                    const text = `Number of edges are ${getJoints(pipe)}`;
                    if (!listContainsText(list, text)) {
                        const li = document.createElement("li");
                        li.textContent = text;
                        list.appendChild(li);
                    }
                }
                if (isInFarmland(pipe) === 3 && !listContainsText(list, "Placed on agriculture land")) {
                    const li = document.createElement("li");
                    li.textContent = "Placed on agriculture land";
                    list.appendChild(li);
                }
                if (isNearTank(pipe) === 3 && !listContainsText(list, "Placed near tank area")) {
                    const li = document.createElement("li");
                    li.textContent = "Placed near tank area";
                    list.appendChild(li);
                }
                if (isPlastic(pipe) === 3 && !listContainsText(list, "Material is plastic")) {
                    const li = document.createElement("li");
                    li.textContent = "Material is plastic";
                    list.appendChild(li);
                }

                added = true; // Stop further appending for multiple divs in the same group
            }
        });
    }
}

// Call the function to update all lists
updateLists();













// // Select all area classes from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     const elements = document.querySelectorAll(`.area${i}`);
    
//     elements.forEach(el => {
//         el.addEventListener('mouseover', () => {
//             elements.forEach(item => {
//                 item.style.boxShadow = '0 0 2px 2px black';
//             });
//         });

//         el.addEventListener('mouseout', () => {
//             elements.forEach(item => {
//                 item.style.boxShadow = 'none';
//             });
//         });
//     });
// }



// const areas = document.querySelectorAll('.area1');


// areas.forEach(area => {
//     area.addEventListener('mouseenter', () => {
//         areas.forEach(item => {
//             item.style.transform = 'scale(1.2)';
//         });
//     });

//     area.addEventListener('mouseleave', () => {
//         areas.forEach(item => {
//             item.style.transform = 'scale(1)';
//         });
//     });
// });





// glow effect
let activeClass = null; // Track the currently glowing class

        // Function to remove glow from all classes
        const removeAllGlows = () => {
            for (let i = 1; i <= 10; i++) {
                document.querySelectorAll(`.area${i}`).forEach(div => {
                    div.classList.remove('glow');
                });
            }
            activeClass = null; // Reset active class
        };

        // Loop through all class names from area1 to area10
        for (let i = 1; i <= 10; i++) {
            const className = `area${i}`;
            
            // Get all divs with this class
            const areaDivs = document.querySelectorAll(`.${className}`);
            
            // Add click event listener to each div
            areaDivs.forEach(div => {
                div.addEventListener('click', (event) => {
                    event.stopPropagation(); // Stop event from bubbling up
                    
                    // Toggle glow only on the clicked group
                    if (activeClass === className) {
                        // If already active, turn off glow
                        removeAllGlows();
                    } else {
                        // Turn off glow for all, then activate the clicked group
                        removeAllGlows();
                        areaDivs.forEach(d => {
                            d.classList.add('glow');
                        });
                        activeClass = className;
                    }
                });
            });
        }

        // Click anywhere outside to remove all glows
        document.addEventListener('click', removeAllGlows);
    


//cards visibility code
document.addEventListener("DOMContentLoaded", function () {
    // Select all area elements
    const areas = {};
    for (let i = 1; i <= 10; i++) {
        areas[`area${i}`] = document.querySelectorAll(`.area${i}`);
    }
    
    // Select the card elements
    const cards = {};
    for (let i = 1; i <= 10; i++) {
        cards[`card${i}`] = document.querySelector(`.card${i}`);
        if (cards[`card${i}`]) {
            cards[`card${i}`].style.display = "none";
        }
    }

    // Function to hide all cards
    function hideCards() {
        for (let i = 1; i <= 10; i++) {
            if (cards[`card${i}`]) {
                cards[`card${i}`].style.display = "none";
            }
        }
    }

    // Add event listeners to each area group
    for (let i = 1; i <= 10; i++) {
        if (areas[`area${i}`]) {
            areas[`area${i}`].forEach(element => {
                element.addEventListener("click", function () {
                    hideCards(); // Hide all cards first
                    if (cards[`card${i}`]) {
                        cards[`card${i}`].style.display = "block"; // Show the corresponding card
                    }
                });
            });
        }
    }
});


//star bg
document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".stars");
    const numStars = 100;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Track mouse movement
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position
        let startX = Math.random() * window.innerWidth;
        let startY = Math.random() * window.innerHeight;
        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;

        // Random size
        let size = Math.random() * 5 + 3; // Between 3px and 8px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random color
        const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffffff"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = randomColor;
        star.style.boxShadow = `0 0 15px ${randomColor}`;

        // Random movement animation
        star.style.animation = `randomMovement ${Math.random() * 5 + 3}s infinite alternate ease-in-out`;

        starContainer.appendChild(star);

        function moveStarWithCursor() {
            let dx = (mouseX - startX) * 0.02; // Small movement factor
            let dy = (mouseY - startY) * 0.02;
            star.style.transform = `translate(${dx}px, ${dy}px)`;
            requestAnimationFrame(moveStarWithCursor);
        }
        moveStarWithCursor();
    }

    // Create multiple stars
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
});





