package config

import "os"

var (
	// Auth config
	AUTH_USERNAME    string
	AUTH_PASSWORD    string
	AUTH_BCRYPT_COST string
)

func LoadAuthConfig() {
	AUTH_USERNAME = os.Getenv("AUTH_USERNAME")
	AUTH_PASSWORD = os.Getenv("AUTH_PASSWORD")
	AUTH_BCRYPT_COST = os.Getenv("AUTH_BCRYPT_COST")
}
