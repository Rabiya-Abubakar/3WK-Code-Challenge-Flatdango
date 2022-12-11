document.addEventListener('DOMContentLoaded',()=>{
    fetchFilms()
})

//Fetch all films
function fetchFilms() {
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => {renderAllFilms(data) 
    renderOneFilm(data[0])})
}

function renderAllFilms(films) {

    films.map(film => {
       
        let div = document.createElement('div')
        div.classList.add("flex", "gap-3")
        
        div.innerHTML =
        `
        <img
        id="film_thumb"
        src=${film.poster}
        class="object-fill w-168 h-28 rounded cursor-pointer"


      />
      <div class="flex flex-col space-y-1">
        <h1 class="text-md font-bold cursor-pointer">${film.title}</h1>
        <div class="flex items-center gap-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5_44)">
              <path
                d="M13.2222 6.52557C13.3668 6.41789 13.474 6.26768 13.5288 6.096C13.5837 5.92432 13.5834 5.73978 13.5281 5.56824C13.4728 5.39671 13.3652 5.24679 13.2204 5.13951C13.0755 5.03222 12.9008 4.97295 12.7206 4.97001L9.22056 4.83779C9.20335 4.8366 9.18685 4.83046 9.17305 4.82011C9.15925 4.80976 9.14874 4.79564 9.14278 4.77945L7.93334 1.51279C7.87257 1.34659 7.7622 1.20308 7.61717 1.10169C7.47214 1.0003 7.29946 0.945923 7.1225 0.945923C6.94555 0.945923 6.77286 1.0003 6.62783 1.10169C6.4828 1.20308 6.37244 1.34659 6.31167 1.51279L5.10611 4.79112C5.10015 4.80731 5.08964 4.82143 5.07584 4.83178C5.06204 4.84213 5.04554 4.84827 5.02834 4.84945L1.52834 4.98168C1.34813 4.98462 1.17336 5.04389 1.02853 5.15117C0.883708 5.25846 0.776092 5.40838 0.720772 5.57991C0.665453 5.75144 0.665205 5.93599 0.720062 6.10767C0.77492 6.27935 0.882133 6.42956 1.02667 6.53723L3.77222 8.69557C3.78596 8.70638 3.79623 8.72098 3.80176 8.73757C3.80729 8.75416 3.80784 8.772 3.80333 8.7889L2.85834 12.1372C2.80937 12.3077 2.81411 12.4892 2.87192 12.6569C2.92973 12.8246 3.03781 12.9704 3.18144 13.0746C3.32508 13.1787 3.4973 13.236 3.67467 13.2388C3.85205 13.2415 4.02597 13.1896 4.17278 13.09L7.07389 11.1456C7.08818 11.1357 7.10514 11.1304 7.1225 11.1304C7.13987 11.1304 7.15682 11.1357 7.17111 11.1456L10.0722 13.09C10.217 13.193 10.3903 13.2483 10.5681 13.2483C10.7458 13.2483 10.9191 13.193 11.0639 13.09C11.2076 12.9869 11.3157 12.8418 11.3735 12.6746C11.4313 12.5075 11.4359 12.3265 11.3867 12.1567L10.4339 8.79668C10.4288 8.77981 10.4291 8.76179 10.4347 8.74509C10.4403 8.72839 10.4508 8.71381 10.465 8.70334L13.2222 6.52557Z"
                fill="#F5C518"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_44">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p class="text-sm">8.2</p>
        </div>
        <p class="text-sm">Duration : ${film.runtime} min</p>
        <div class="bg-clifford w-fit py-1 px-2 rounded hidden">
          <p class="text-sm text-white">Sold out</p>
        </div>
      </div>
        `
        document.querySelector('#film_list').appendChild(div)
        
       
    })

    document.querySelector('#film_thumb').addEventListener('click',()=>{
        console.log()
    })

    
}

function renderOneFilm(film) {

    let div = document.createElement('div')
    div.id = 'info'
    div.innerHTML = 
    `<div class="w-full max-h-500 relative">
    <img
      src=${film.poster}
      class="object-fill h-500 w-full"
    />
    <div
      class="flex flex-row items-center gap-6 absolute bottom-6 left-6"
    >
      <button
        class="bg-gila rounded py-3 px-6 text-lg text-white flex items-center gap-3"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="12"
            fill="white"
            fill-opacity="0.3"
          />
          <path
            d="M9.525 18.025C9.19167 18.2417 8.854 18.254 8.512 18.062C8.17067 17.8707 8 17.575 8 17.175V6.825C8 6.425 8.17067 6.129 8.512 5.937C8.854 5.74567 9.19167 5.75833 9.525 5.975L17.675 11.15C17.975 11.35 18.125 11.6333 18.125 12C18.125 12.3667 17.975 12.65 17.675 12.85L9.525 18.025Z"
            fill="black"
          />
        </svg>

        Watch now
      </button>
      <button
        class="bg-stallon rounded py-3 px-6 text-lg flex items-center gap-3"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 7.74L7.95 5.45V14.45L11 12.16L13.95 9.95L11 7.74ZM11 7.74L7.95 5.45V14.45L11 12.16L13.95 9.95L11 7.74ZM11 7.74L7.95 5.45V14.45L11 12.16L13.95 9.95L11 7.74ZM8.95 2.02V0C6.94 0.2 5.11 1 3.63 2.21L5.05 3.64C6.17995 2.75789 7.52761 2.19809 8.95 2.02V2.02ZM3.64 5.05L2.21 3.63C0.964812 5.14659 0.195906 6.99753 0 8.95H2.02C2.2 7.49 2.78 6.16 3.64 5.05ZM2.02 10.95H0C0.2 12.96 1 14.79 2.21 16.27L3.64 14.84C2.75636 13.7147 2.19627 12.3698 2.02 10.95V10.95ZM3.63 17.69C5.14758 18.9335 6.998 19.7022 8.95 19.9V17.88C7.52761 17.7019 6.17995 17.1421 5.05 16.26L3.63 17.69V17.69ZM19.95 9.95C19.95 15.11 16.03 19.37 11 19.9V17.88C14.92 17.36 17.95 14 17.95 9.95C17.95 5.9 14.92 2.54 11 2.02V0C16.03 0.53 19.95 4.79 19.95 9.95Z"
            fill="black"
          />
        </svg>

        Trailer
      </button>
    </div>
  </div>
  <div class="space-y-4">
    <div class="flex items-center gap-4 mt-3">
      <h1 class="font-bold text-3xl">${film.title}</h1>
      <div class="flex items-center gap-1">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5_44)">
            <path
              d="M13.2222 6.52557C13.3668 6.41789 13.474 6.26768 13.5288 6.096C13.5837 5.92432 13.5834 5.73978 13.5281 5.56824C13.4728 5.39671 13.3652 5.24679 13.2204 5.13951C13.0755 5.03222 12.9008 4.97295 12.7206 4.97001L9.22056 4.83779C9.20335 4.8366 9.18685 4.83046 9.17305 4.82011C9.15925 4.80976 9.14874 4.79564 9.14278 4.77945L7.93334 1.51279C7.87257 1.34659 7.7622 1.20308 7.61717 1.10169C7.47214 1.0003 7.29946 0.945923 7.1225 0.945923C6.94555 0.945923 6.77286 1.0003 6.62783 1.10169C6.4828 1.20308 6.37244 1.34659 6.31167 1.51279L5.10611 4.79112C5.10015 4.80731 5.08964 4.82143 5.07584 4.83178C5.06204 4.84213 5.04554 4.84827 5.02834 4.84945L1.52834 4.98168C1.34813 4.98462 1.17336 5.04389 1.02853 5.15117C0.883708 5.25846 0.776092 5.40838 0.720772 5.57991C0.665453 5.75144 0.665205 5.93599 0.720062 6.10767C0.77492 6.27935 0.882133 6.42956 1.02667 6.53723L3.77222 8.69557C3.78596 8.70638 3.79623 8.72098 3.80176 8.73757C3.80729 8.75416 3.80784 8.772 3.80333 8.7889L2.85834 12.1372C2.80937 12.3077 2.81411 12.4892 2.87192 12.6569C2.92973 12.8246 3.03781 12.9704 3.18144 13.0746C3.32508 13.1787 3.4973 13.236 3.67467 13.2388C3.85205 13.2415 4.02597 13.1896 4.17278 13.09L7.07389 11.1456C7.08818 11.1357 7.10514 11.1304 7.1225 11.1304C7.13987 11.1304 7.15682 11.1357 7.17111 11.1456L10.0722 13.09C10.217 13.193 10.3903 13.2483 10.5681 13.2483C10.7458 13.2483 10.9191 13.193 11.0639 13.09C11.2076 12.9869 11.3157 12.8418 11.3735 12.6746C11.4313 12.5075 11.4359 12.3265 11.3867 12.1567L10.4339 8.79668C10.4288 8.77981 10.4291 8.76179 10.4347 8.74509C10.4403 8.72839 10.4508 8.71381 10.465 8.70334L13.2222 6.52557Z"
              fill="#F5C518"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_44">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="text-sm">8.2</p>
      </div>
    </div>

    <p
      class="font-medium text-xl uppercase before:bg-kibidango before:p-0.5 before:mr-2"
    >
      About
    </p>
    <p>
      ${film.description}
    </p>

    <p
      class="font-medium text-xl uppercase before:bg-kibidango before:p-0.5 before:mr-2"
    >
      buy tickets
    </p>
    <div class="grid grid-cols-2 gap-2">
      <p>Show time : ${film.showtime}</p>
      <p>Duration : ${film.runtime} min</p>
      <p>Capacity : ${film.capacity}</p>
      <p>Available tickets : ${film.capacity - film.tickets_sold}</p>
    </div>

    <form action="#" class="">
      <input
        type="text"
        class="bg-stallon py-1 placeholder:italic placeholder:text-sm rounded outline-0 px-4 text-sm"
        placeholder="Number of tickets"
      />
      <input
        type="submit"
        class="bg-clifford px-2 py-0.5 rounded text-white"
        value="Buy tickets"
      />
    </form>
  </div>`

  document.querySelector('#film_info').appendChild(div)



}

