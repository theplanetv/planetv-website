package services

import (
	"api-chi/cmd/models"
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_AuthService(t *testing.T) {
	service := AuthService{}

	t.Run("Login failed", func(t *testing.T) {
		// Login data
		input := models.Auth{
			Username: "admin",
			Password: "ad",
		}

		// Connect database
		err := service.Login(&input)
		assert.Error(t, err)
	})

	t.Run("Login success", func(t *testing.T) {
		// Login data
		input := models.Auth{
			Username: "admin",
			Password: "admin",
		}

		// Connect database
		err := service.Login(&input)
		assert.NoError(t, err)
	})
}
