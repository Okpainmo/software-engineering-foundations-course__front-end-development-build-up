import { extensionsData } from '../data/extension-data.js';

const cardsWrapper = document.getElementById('cardsWrapper');

const myNumber = 25;
const regularString = 'A string';
const dynamicString = `Dynamic String ${myNumber}`;

console.log(regularString);
console.log(dynamicString);

function renderExtensionsData() {
  const render = extensionsData.map((singleExtension, index) => {
    console.log(index);

    const imageUrl = `../assets/images/img-${index}.svg`;

    const { extensionName, extensionSummary } = singleExtension;
    return `
           <div class="card glass-effect" style="border: 1.5px 
                    solid rgba(255, 255, 255, 0.5);">
            <div style="display: flex; column-gap: 20px; padding: 20px">
                <div class="extension-logo">
                    <img src=${imageUrl} alt="project logo">
                </div>
                <div class="extension-details">
                    <h3 style="font-size: 22px; font-weight: bold;">
                        ${extensionName}
                    </h3>
                    <div style="font-size: 16px; margin-top: 10px">
                    ${extensionSummary}
                    </div>
                </div>
            </div>
            <div style="padding: 20px; display: flex; align-items: center; justify-content: space-between   ;">
                <div style="font-size: 18px; padding: 8px 20px; border-radius: 20px; 
                    background-color: hsl(225, 23%, 24%); border: 1.5px 
                    solid rgba(255, 255, 255, 0.5); width: 70px; text-align: center;
                   ">
                    <div style="transform: translateY(-1px)">
                        Remove
                    </div>
                </div>
                <div class="toggle-switch"
                    style="background-color: hsl(3, 71%, 56%); width: 60px; border-radius: 20px; height: 30px; display: flex; align-items: center;">
                    <div class="toggle-switch-eyeball" style="background-color: white; color: white; width: 23px; 
                        border-radius: 100%; height: 23px; margin-left: 3px; text-align: center;">
                        0
                    </div>
                </div>
            </div>
        </div>
        `;
  });

  cardsWrapper.innerHTML = render.join(' ');
}

renderExtensionsData();

// Js Data Types.

// 1. Boolean
// 2. Number
// 3. String
// 4. Array
// 5. Object
// 6. Null
// 7. Undefined
