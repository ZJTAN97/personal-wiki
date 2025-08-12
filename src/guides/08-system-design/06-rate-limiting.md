# Rate Limiting

Rate limiting is a critical component in system design for controlling request rates, preventing abuse and ensuring fair resource allocation.

## Core Concepts

`Limit`: Maximum allowed requests within a specific timeframe (e.g., 100 messages/hour).

`Window`: Time interval for enforcement (e.g., hourly, daily).

`Identifier`: Unique attribute to track users/devices (e.g., IP, userID).

`Responses`: Blocking, throttling, or shaping requests upon exceeding limits.
