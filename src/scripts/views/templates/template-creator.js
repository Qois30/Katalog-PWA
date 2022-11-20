import CONFIG from '../../globals/config'

const createMovieDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((menu) => `<li>${menu.name}</li>`).join('')}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((menu) => `<li>${menu.name}</li>`).join('')}</p>
  </div>
  <div class="movie__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
`

const createMovieItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`

export { createMovieItemTemplate, createMovieDetailTemplate }
