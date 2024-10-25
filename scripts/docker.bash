export $(grep -v '^#' .env | xargs)

PROJECT_WEB_IMAGE=$(eval echo $PROJECT_WEB_IMAGE)
PROJECT_API_IMAGE=$(eval echo $PROJECT_API_IMAGE)
PROJECT_DATABASE_IMAGE=$(eval echo $PROJECT_DATABASE_IMAGE)
PROJECT_WEB_CONTAINER=$(eval echo $PROJECT_WEB_CONTAINER)
PROJECT_API_CONTAINER=$(eval echo $PROJECT_API_CONTAINER)
PROJECT_DATABASE_CONTAINER=$(eval echo $PROJECT_DATABASE_CONTAINER)

# Print list of options
print_list() {
  echo "Pass wrong arguments! Here is list of arguments for docker test script"
  echo -e "\tremove-images : remove all image"
}

# Main script
if [ $# -eq 1 ]; then
  case "$1" in
  "remove-images")
    docker rmi ${PROJECT_DATABASE_IMAGE} ${PROJECT_API_IMAGE} ${PROJECT_WEB_IMAGE}
    ;;

  *)
    print_list
    ;;
  esac
else
  print_list
fi