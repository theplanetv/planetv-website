package services

import (
	"api-chi/cmd/config"
	"api-chi/cmd/models"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type BlogTagService struct {
	Conn *pgxpool.Pool
}

func (s *BlogTagService) Open() error {
	config.LoadConfig()
	conn, err := pgxpool.New(config.CTX, config.POSTGRES_URL)
	if err != nil {
		return err
	}

	// Assign connection
	s.Conn = conn
	return nil
}

func (s *BlogTagService) Close() {
	s.Conn.Close()
}

func (s *BlogTagService) Count() (int, error) {
	// Execute SQL
	sql := "SELECT * FROM count_blog_tag();"
	value := 0
	err := s.Conn.QueryRow(config.CTX, sql).Scan(&value)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}

func (s *BlogTagService) Create(input *models.BlogTag) (string, error) {
	// Execute SQL
	sql := "SELECT * FROM create_blog_tag(@name);"
	args := pgx.NamedArgs{
		"name": input.Name,
	}
	value := ""
	err := s.Conn.QueryRow(config.CTX, sql, args).Scan(&value)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}

func (s *BlogTagService) Update(input *models.BlogTag) (models.BlogTag, error) {
	// Execute SQL
	sql := "SELECT * FROM update_blog_tag(@id, @name);"
	args := pgx.NamedArgs{
		"id":   input.Id,
		"name": input.Name,
	}
	value := models.BlogTag{}
	err := s.Conn.QueryRow(config.CTX, sql, args).Scan(&value.Id, &value.Name)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}

func (s *BlogTagService) Remove(id *string) (string, error) {
	// Execute SQL
	sql := "SELECT * FROM remove_blog_tag(@id);"
	args := pgx.NamedArgs{
		"id": *id,
	}
	value := ""
	err := s.Conn.QueryRow(config.CTX, sql, args).Scan(&value)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}
