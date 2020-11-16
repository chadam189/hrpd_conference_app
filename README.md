# Presentation Schedule

A sample service to integrate with other services via AMQP.  This file structure was generated and will be trimmed down as development begins.

## Getting Started

### Development

There are two ways to get the development environment up and running.  In development mode, the server takes advantage of Nodemon for hot reloading of server files on save.  Make sure that you check out the README's in the `submodules/*` directories to identify any dependencies that they might have.

```sh
# to start both the server, the dependencies, and the supporting docker container in parallel
npm run start:dev
```

```sh
# to start the server alone
npm run start:dev:server

# to start the supporting services
npm run start:dev:locations
npm run start:dev:presentations

#to start the AMQP docker container alone
npm run start:dev:mq
```

### Production

Starting the production version of the application is as simple as running a command.

```sh
npm run start
```
