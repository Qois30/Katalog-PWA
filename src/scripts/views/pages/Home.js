import restaurantDbSource from '../../data/restaurantDbSource'
import { createMovieItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading"></h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurant = await restaurantDbSource.restaurantList()
    console.log(restaurant)

    const moviesContainer = document.querySelector('#movies')
    restaurant.forEach((restaurant) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurant)
    })
  }
}

export default Home
