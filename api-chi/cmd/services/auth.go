package services

import (
	"api-chi/cmd/config"
	"api-chi/cmd/models"
	"fmt"
	"strconv"

	"golang.org/x/crypto/bcrypt"
)

type AuthService struct{}

func (s *AuthService) Login(input *models.Auth) error {
	config.LoadAuthConfig()
	if config.AUTH_BCRYPT_COST == "" {
		config.AUTH_BCRYPT_COST = "10"
	}
	bcryptCost, err := strconv.Atoi(config.AUTH_BCRYPT_COST)
	if err != nil {
		return fmt.Errorf("Can't set bcrypt default cost")
	}

	// Check username
	if input.Username != config.AUTH_USERNAME {
		return fmt.Errorf("Username is incorrect!")
	}

	// Check password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcryptCost)
	if err != nil {
		return fmt.Errorf("Error hashing password: %s", err)
	}
	err = bcrypt.CompareHashAndPassword(hashedPassword, []byte(config.AUTH_PASSWORD))
	if err != nil {
		return fmt.Errorf("Password is incorrect!")
	}

	return nil
}
