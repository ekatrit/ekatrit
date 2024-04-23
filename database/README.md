# Dockerfile

This repository contains the Dockerfile for building and running the Ekatrit database.

## Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

## Build the Docker Image

To build the Docker image, run the following command in the root directory of this repository:
docker build -t ekatrit-database .
docker run -d -p <host-port>:<container-port> ekatrit-database