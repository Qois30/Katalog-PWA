import FavoriteRestaurantIdb from '../../data/favoriteRestaurantIdb'
import { createMovieItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
        <div class="content">
          <h2 class="content__heading">Your Liked Movie</h2>
          <div id="movies" class="movies">
   
          </div>
        </div>
      `
  },

  async afterRender () {
    const movies = await FavoriteRestaurantIdb.getAllRestaurant()
    const moviesContainer = document.querySelector('#movies')

    movies.forEach((restaurant) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurant)
    })
  }
}

export default Like
