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
    