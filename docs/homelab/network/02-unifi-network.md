---
sidebar_position: 2
id: network
---
# UniFi Network Setup
In this section, I will detail my home networking setup, including the configuration of networks, VLANs, WiFi, and related components. The following information outlines the hardware and software I use to manage and secure my environment. I will also discuss all the devices in my setup, such as access points, switches, and other network equipment.

## UniFi Network

I utilize UniFi Network to efficiently manage and segment my home network. My setup consists of four distinct networks: 

- **Cameras** (A dedicated VLAN for cameras, isolated from the WAN and configured so that devices cannot communicate with each other.)
- **IoT devices** (A separate VLAN for IoT devices, blocked from accessing other networks and from communicating with each other, providing strong isolation and security.)
- **General** (The main VLAN for trusted devices such as personal computers and servers, isolated from other VLANs for security and management.)
- **Guest** (A VLAN using UniFi’s hotspot feature, fully isolated from the rest of the network and between guest devices, requiring users to authenticate through the UniFi guest login page.)

Correspondingly, I have configured four separate WiFi networks:

- **WiFi_Camera**
- **WiFi_IoT**
- **WiFi_General**
- **WiFi_Guest**

 This approach allows me to control access, monitor traffic, and apply tailored firewall rules for each segment. UniFi's intuitive interface makes it easy to manage these networks and maintain a secure, organized environment. The flexibility of UniFi hardware and software has been instrumental in supporting my growing number of connected devices while keeping the network reliable and secure.


 ## UniFi Hardware
Here is a list of the UniFi hardware I use in my network setup:

- **UDM SE** (UniFi Dream Machine Special Edition)
- **USW 16 PoE** (UniFi Switch 16-Port PoE)
- **AC LR** (UniFi AP AC Long Range)
- **AC PRO** (UniFi AP AC Pro)
- **UniFi Patch** (UniFi Accessory Rack Panel Patch, 24-port)

These devices provide robust performance, flexibility, and scalability for my home network.