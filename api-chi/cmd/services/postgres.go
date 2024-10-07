package services

import (
	"api-chi/cmd/config"

	"github.com/jackc/pgx/v5/pgxpool"
)

type postgresService struct {
	pool *pgxpool.Pool
}

func (service *postgresService) New() error {
	// Create connection
	var err error
	service.pool, err = pgxpool.New(config.CTX, config.POSTGRES_URL)
	if err != nil {
		return err
	}

	// Ping connection
	conn, err := service.pool.Acquire(config.CTX)
	if err != nil {
		return err
	}
	defer conn.Release()

	return nil
}

func (service *postgresService) Close() {
	service.pool.Close()
}