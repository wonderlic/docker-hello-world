# wonderlic/hello-world

### Links

* github: [https://github.com/wonderlic/docker-hello-world](https://github.com/wonderlic/docker-hello-world)
* docker hub: [https://registry.hub.docker.com/u/wonderlic/hello-world/](https://registry.hub.docker.com/u/wonderlic/hello-world/)

### Description

This docker image will start a node.js webserver and respond back with 'hello world' for every incoming request.

### Usage

```
docker run \
  -e PORT=... \
  wonderlic/hello-world
```

If not set:
*  PORT defaults to 8080
