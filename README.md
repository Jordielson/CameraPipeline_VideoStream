# CameraPipeline_CameraStream

## Prerequisites
- Node.js and npm
- Docker

## Setting up your local environment
1. Get the prerequisites (Install the following tools, if you don't have them already):
    - Node.js and npm.Downloading and installing it from https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
    - Docker. We use Docker for local dev. Install it from https://docs.docker.com/get-docker/.
2. Clone this repo:
    ```
    git clone https://github.com/Jordielson/CameraPipeline_VideoStream.git
    ```
3. Install required dependencies for application:
    ```
    npm install
    ```
4. After cloning the repo, create a branch for your changes(Optional):
    ```
    git checkout -b <BRANCH_NAME>
    ```
5. Creating Docker image:
    ```
    docker-compose up --build
    ```
6. When you've finished developing, shut down the Docker container:
    ```
    docker-compose down
    ```
7. When you start development, start the Docker container:
    ```
    docker-compose up
    ```
