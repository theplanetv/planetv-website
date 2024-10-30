package services

import (
	"api-chi/cmd/config"
	"api-chi/cmd/models"
	"testing"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/stretchr/testify/assert"
)

func Test_AuthService(t *testing.T) {
	service := AuthService{}
	service.New()

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

	t.Run("Generate token success", func(t *testing.T) {
		// Input data
		input := &models.Auth{
			Username: "admin",
		}

		// Call the GenerateToken method
		token, err := service.GenerateToken(input)

		// Assert no error and a valid token is returned
		assert.NoError(t, err)
		assert.NotEmpty(t, token)

		// Parse the token to verify claims
		parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
			return []byte(config.AUTH_SECRET_KEY), nil
		})
		assert.NoError(t, err)
		assert.NotNil(t, parsedToken)

		// Validate token claims
		claims, ok := parsedToken.Claims.(jwt.MapClaims)
		assert.True(t, ok)
		assert.Equal(t, input.Username, claims["username"])
		assert.NotNil(t, claims["exp"])

		// Check if expiration is set correctly
		exp := int64(claims["exp"].(float64))
		assert.Greater(t, exp, time.Now().Unix())
	})
}
