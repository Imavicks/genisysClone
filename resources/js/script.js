// function to change grid images on gridA to images on gridB
/* eslint-disable */
function changeGridA(imageNumber) {
/* eslint-enable */
  const gridAImages = [
    document.getElementById('grid1'),
    document.getElementById('grid2'),
    document.getElementById('grid3'),
    document.getElementById('grid4'),
  ];

  let imageSet = [];

  if (imageNumber === 1) {
    imageSet = ['resources/assets/white 15.jpg', 'resources/assets/white 15.jpg', 'resources/assets/white 20.png', 'resources/assets/white 21.png'];
  } else if (imageNumber === 2) {
    imageSet = ['resources/assets/black 5.png', 'resources/assets/black 5.png', 'resources/assets/black 15.png', 'resources/assets/black 8.png'];
  } else if (imageNumber === 3) {
    imageSet = ['resources/assets/red 18.png', 'resources/assets/red 18.png', 'resources/assets/red 15.png', 'resources/assets/red 14.png'];
  } else if (imageNumber === 4) {
    imageSet = ['resources/assets/blue 12.png', 'resources/assets/blue 12.png', 'resources/assets/blue 10.png', 'resources/assets/blue 11.png'];
  }

  // Set grid A images to the imageSet if condition matches
  for (let i = 0; i < imageSet.length; i += 1) {
    if (i < gridAImages.length) {
      gridAImages[i].src = imageSet[i];
    }
  }
}

// Function to highlight images on gridA
/* eslint-disable */
function changeToGrid1(newImageSrc) {
/* eslint-enable */
  const changeToGrid1 = document.getElementById('grid1');
  changeToGrid1.src = newImageSrc;
}

// Function to change the colour description based on the image clicked
/* eslint-disable */
function changeGridBtxt(colorId) {
/* eslint-enable */
  const color = document.getElementById('color');

  if (colorId === 1) {
    color.innerHTML = '<b>Colour:</b> Nimbus cloud with white';
  } else if (colorId === 2) {
    color.innerHTML = '<b>Colour:</b> Black and white';
  } else if (colorId === 3) {
    color.innerHTML = '<b>Colour:</b> Burgundy with white';
  } else if (colorId === 4) {
    color.innerHTML = '<b>Colour:</b> Navy with white';
  } else {
    color.textContent = '';
  }
}


const contentContainer = document.getElementById('contentContainer');

const descriptionContent = `
  <div class="descrip-1">
    <div class="desp-h4"><h4>Description</h4></div>
    <div class="desp-p"><p>This model runs small, you may consider ordering from your normal size.</p></div>
  </div>
  <div class="label"><h5>Key Features</h5></div>
  <ul class="label-li">
    <li>suede / mesh upper</li>
    <li>Vamp, collar and tongue mesh are 100% recycled<br/>polyester</li>
    <li>ENCAP midsole cushioning combines soft foam with a<br/>durable polyurethane rim to deliver all-day support</li>
    <li>Midsole foam uses approximately 3% bio-based content<br/>made from renewable sources to help reduce our<br>carbon footprint</li>
    <li>Rubber outsole with 5% recycled rubber</li>
    <li>Available in extended width sizes</li>
  </ul>`;

const specificationContent = `
  <div class="label"><h5>Specification</h5></div>
  <ul class="label-li">
    <li>Upper: The upper of the New Balance 574 Core is typically constructed using a combination of suede and mesh materials. The suede overlays provide structure and support while the mesh sections offer breathability.</li>
    <li>Midsole: The shoe usually incorporates New Balance's ENCAP midsole technology. ENCAP combines a supportive polyurethane rim with a soft EVA foam core to provide cushioning and stability.</li>
    <li>Outsole: The New Balance 574 Core typically features a rubber outsole that offers durability, traction, and grip on various surfaces.</li>
    <li>Closure: The shoe usually has a lace-up closure system, allowing for a customizable and secure fit.</li>
    <li>Insole: The 574 Core typically includes a cushioned insole for added comfort and support.</li>
    <li>Branding: The shoe often showcases the iconic New Balance "N" logo on the sides, representing the brand's identity.</li>
  </ul>`;

const contentOfDeliveryContent = `
  <div class="label"></div>
  <ul class="label-li">
  <li>1xShoe<li>
  </ul>`;

// Function to display content in the container
function displayContent(content) {
  contentContainer.innerHTML = content;
}

const headings = document.querySelectorAll('.pp h2');
headings.forEach((heading) => {
  heading.addEventListener('click', () => {
    const selectedHeading = heading.textContent;

    // Remove red border-bottom from previously clicked heading
    headings.forEach((h) => {
      h.style.borderBottom = '';
    });

    // Set red border-bottom for the clicked heading
    heading.style.borderBottom = '2px solid #e73c17';

    switch (selectedHeading) {
      case 'Description':
        displayContent(descriptionContent);
        break;
      case 'Specification':
        displayContent(specificationContent);
        break;
      case 'Content of delivery':
        displayContent(contentOfDeliveryContent);
        break;
      default:
        displayContent(descriptionContent); // Default to Description
        break;
    }
  });
});

// Display Description content by default on page load
displayContent(descriptionContent);


