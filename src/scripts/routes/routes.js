import Home from '../views/pages/Home'
import Detail from '../views/pages/detail'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail
}

export default routes
