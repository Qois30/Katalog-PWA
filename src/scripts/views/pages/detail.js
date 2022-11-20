import UrlParser from '../../routes/url-parser'
import restaurantDbSource from '../../data/restaurantDbSource'
import { createMovieDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <div id="movie" class="movie"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await restaurantDbSource.detailRestaurant(url.id)
    const movieContainer = document.querySelector('#movie')
    movieContainer.innerHTML = createMovieDetailTemplate(restaurant)
  }
}

export default Detail
