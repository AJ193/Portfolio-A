const showHideMenu = document.querySelector('.menu-slider');
function showHide() {
  showHideMenu.classList.toggle('active');
}
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', showHide);
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', showHide);

const submit = document.querySelector('form');
const emailInput = document.getElementById('email');
const resultMsg = document.querySelector('.msg');

//  Work Projects Data

const projects = [
  {
    name: 'Multi Post Stories',
    img: 'images/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: 'images/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: 'images/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    img: 'images/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: 'images/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: 'images/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
];

//  Generate Work section from Js file

const works = document.getElementById('card-holder');

for (let i = 0; i < projects.length; i += 1) {
  const cardHolder = document.createElement('div');
  cardHolder.innerHTML = `
  <div class="info-holder">
    <h2 class="project-heading white-font">
    ${projects[i].name}
    </h2>
    <p class="card-description white-font">
    ${projects[i].description2}
    </p>
    <ul class="tag-list white-font">

      <li class='card-feature-items'>${projects[i].tags[0]}</li>
      <li class='card-feature-items'>${projects[i].tags[1]}</li>
      <li class='card-feature-items'>${projects[i].tags[2]}</li>
    </ul>
  </div>
  <div class='button-section'>
    <a
      id='cardButton${i}'
      class='pop card-button dark-font seeInfo'
      href='#popUp'
      >See Project</a
    >
  </div>
    `;
  cardHolder.classList.add('work-card');
  works.appendChild(cardHolder);
}

//  Deatils Popup window

const popup = document.createElement('div');
function createPopup(nbr) {
  popup.innerHTML = `
  <div id="popup-container" class="popup-window">
  <div class="popup-holder">
    <div class="popup-close-btn-holder">
      <div class="title-xbtn">
        <h1 id="popup-header" class="project-heading project-heading-pop">${projects[nbr].name}</h1>
        <svg
          id="x-popup"
          class=".xBtn"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#67798e"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
          />
        </svg>
      </div>
      <ul id="popup-feature" class="popup-tag-list">
        <li class="card-feature-items popup-feature">${projects[nbr].tags[0]}</li>
        <li class="card-feature-items popup-feature">${projects[nbr].tags[1]}</li>
        <li class="card-feature-items popup-feature">${projects[nbr].tags[2]}</li>
      </ul>
    </div>
    <div class="popup-info">
      <img
        id="popup-image"
        class="popup-image"
        src="${projects[nbr].img}"
        alt="post image"
      />
      <div class="popup-info-holder">
        <p id="popup-description" class="popup-description">
        ${projects[nbr].description}
        </p>
        <div class="popup-btn-holder">
          <a id="seeLivePopup" class="popup-btn" href="${projects[nbr].demoLink}"
            >Demo&nbsp;
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
                fill="black"
              />
            </svg>
          </a>
          <a id="seeSourcePopup" class="popup-btn" href="${projects[nbr].codeLink}"
            >Code &nbsp;
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;
  document.body.appendChild(popup);
}

for (let j = 0; j < projects.length; j += 1) {
  const showCard = document.getElementById(`cardButton${j}`);

  showCard.addEventListener('click', () => {
    createPopup(j);
    const xPopup = document.getElementById('x-popup');
    xPopup.addEventListener('click', () => {
      popup.remove();
    });
  });
}

// handel form validation
submit.addEventListener('submit', (e) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    resultMsg.textContent = 'Email must be in lower case';
    resultMsg.style.color = 'red';
    return false;
  }
  return true;
});