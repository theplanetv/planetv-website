package routes

import (
	"api-chi/cmd/controllers"

	"github.com/go-chi/chi/v5"
)

func BlogTagRoutes(r chi.Router) {
	controller := controllers.BlogTagController{}

	r.Route("/blogtag", func(r chi.Router) {
		r.Get("/count", controller.Count)
		r.Post("/", controller.Create)
		r.Patch("/", controller.Update)
		r.Delete("/{id}", controller.Remove)
	})
}
