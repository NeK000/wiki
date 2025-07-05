---
sidebar_position: 1
tags:
  - Docker
  - TSDProxy
  - MIT License
  - Tailscale
  - Networking
  - Proxy
  - Tunnel
---

# TSDProxy
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

  <img src="https://raw.githubusercontent.com/almeidapaulopt/tsdproxy/main/web/public/icons/icon-192x192.png" alt="TSDProxy Logo" width="120" height="120" style={{marginLeft: 24}}/>
  
  <div style={{flex: 1}}>

    TSDProxy is an application that automatically creates a proxy to virtual addresses in your Tailscale network.
  </div>


</div>
<a href="https://github.com/almeidapaulopt/tsdproxy" target="_blank" style={{display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle'}}>
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="20" height="20" style={{marginLeft: 8, marginRight: 6}}/>
      <span style={{marginLeft: 2}}>GitHub repository TSDProxy</span>
    </a>

## Installation

1. Create a `docker-compose.yml` file

```bash
nano docker-compose.yml
```

2. Add the following content to the `docker-compose.yml` file

For more details, refer to the [official documentation](https://almeidapaulopt.github.io/tsdproxy/docs/getting-started/#create-a-tsdproxy-docker-composeyaml).

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


3. Add the configurations

TSDProxy requires a configuration file to be placed in the `/config` directory. For details and a sample configuration file, see the [official documentation](https://almeidapaulopt.github.io/tsdproxy/docs/serverconfig/#sample-configuration-file).

4. Start the container

```bash
docker-compose up -d
```

## Access TSDProxy

```bash
http://<your-server-ip>:8080
```