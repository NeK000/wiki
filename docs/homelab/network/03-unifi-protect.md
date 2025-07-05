---
sidebar_position: 3
id: protect
---
# UniFi Protect Video Surveillance Setup

In this section, I detail my home video surveillance system powered by UniFi Protect. My setup is designed for reliability, security, and ease of management, leveraging PoE for both network connectivity and power delivery to all cameras.

## Camera Network Architecture

All cameras are connected via PoE (Power over Ethernet), ensuring a clean and efficient installation with a single cable for both data and power. For wireless flexibility, I utilize the dedicated `WiFi_Camera` network, which is mapped to the isolated Camera VLAN. This VLAN is configured without internet access, ensuring that cameras remain securely separated from other networks and external connectivity.

### Key Features

- **PoE Backbone:** Simplifies deployment and reduces cable clutter.
- **Dedicated WiFi Network:** `WiFi_Camera` SSID isolates camera traffic for enhanced security and performance.
- **VLAN Segmentation:** Cameras are isolated on their own VLAN, protecting them from other network devices.

## Camera Inventory

My surveillance system includes a variety of UniFi cameras to cover different monitoring needs:

- **G3 Flex**  
    Compact and versatile, ideal for indoor use or discreet outdoor locations. If installed outdoors, it should be placed in a covered area to protect it from direct rain exposure.
- **G5 Bullet**  
    High-definition, weather-resistant cameras for perimeter and driveway coverage.
- **G5 Ultra Turret**  
    Advanced turret cameras with superior image quality for critical areas.

## UniFi Protect Hardware

The following UniFi hardware powers my video surveillance setup:

- **UDM SE** (UniFi Dream Machine Special Edition)  
    Centralized management, routing, and Protect NVR functionality.
- **USW 16 PoE** (UniFi Switch 16-Port PoE)  
    Supplies power and network connectivity to all PoE cameras.
- **UniFi Patch Panel** (24-port)  
    Organized cable management for a clean rack installation.

---

This configuration ensures reliable video coverage, easy management, and strong network security for all surveillance devices.