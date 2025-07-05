---
sidebar_position: 1
tags:
  - Docker
  - TSDProxy
---

# TSD Proxy

<img src="/logos/tsdproxy.png" alt="TSDProxy" width="150" />
Some description

## Installation

1. Create a `docker-compose.yml` file

```bash
nano docker-compose.yml
```

2. Add the following content to the `docker-compose.yml` file

```yaml
services:
  tsdproxy:
    image: almeidapaulopt/tsdproxy:latest
    container_name: tsdproxy
    restart: unless-stopped
    ports:
      - "8080:8080"   
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
      - "/home/data/tsdproxy-data:/data"
      - "/home/data/tsdproxy-config:/config"   
```

3. Start the container

```bash
docker-compose up -d
```

## Access TSDProxy

```bash
http://<your-server-ip>:8080
```