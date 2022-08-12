# CameraPipeline_CameraStream

## Prerequisites
- Docker

## Setting up your local environment
1. Get the prerequisites (Install the following tools, if you don't have them already):
    - Docker. We use Docker for local dev, tests, and building. Install it from https://docs.docker.com/get-docker/.
2. Clone this repo:
    ```
    git clone https://github.com/Jordielson/CameraPipeline_VideoStream.git
    ```
3. After cloning the repo, create a branch for your changes(Optional):
    ```
    git checkout -b <BRANCH_NAME>
    ```
4. Creating Docker image:
    ```
    docker-compose up --build
    ```
5. When you've finished developing, shut down the Docker container:
    ```
    docker-compose down
    ```
6. When you start development, start the Docker container:
    ```
    docker-compose up
    ```
