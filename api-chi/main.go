package main

import (
	"api-chi/cmd/routes"

	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Route("/api", func(r chi.Router) {
		routes.BlogTagRoutes(r)
	})

	http.ListenAndServe(":3000", r)
}
