package main

import (
	"api-chi/cmd/config"
	"api-chi/cmd/routes"

	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func main() {
	config.LoadApiConfig()
	config.LoadWebConfig()
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://localhost:" + config.WEB_PORT},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
	}))

	r.Route("/api", func(r chi.Router) {
		routes.BlogTagRoutes(r)
	})

	err := http.ListenAndServe(":"+config.API_PORT, r)
	if err != nil {
		log.Fatal(err)
	}
}
