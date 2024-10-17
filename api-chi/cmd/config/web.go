package config

import "os"

var (
	// Web config
	WEB_PORT string
)

func LoadWebConfig() {
	WEB_PORT = os.Getenv("WEB_PORT")
}
