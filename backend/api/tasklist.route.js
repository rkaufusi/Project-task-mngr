import express from 'express'
import RestaurantsCtrl from './restaurants.controller.js'
import ReviewsCtrl from './reviews.controller.js'
import TasksCtrl from './tasks.controller.js'
import UpdateTasksCtrl from './updateTasksCtrl.js'

const router = express.Router()
router.route("/").get(TasksCtrl.apiGetRestaurants);
//router.route("/id/:id").get(TasksCtrl.apiGetRestaurantById);
//router.route("/cuisines").get(TasksCtrl.apiGetRestaurantCuisines);
//router.route("/").get(TasksCtrl.apiGetRestaurants);


router
  .route("/tasks")
  .post(UpdateTasksCtrl.apiPostReview)
  .put(UpdateTasksCtrl.apiUpdateReview)
  .delete(UpdateTasksCtrl.apiDeleteReview)
/*
router.route("/").get(RestaurantsCtrl.apiGetRestaurants);
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById);
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines);


router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)
*/
export default router