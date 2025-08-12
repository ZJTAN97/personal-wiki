# Introduction

## What is System Design?

System design is the process of defining the architecture, components, interfaces, and data flows of a software system to meet functional and non-functional requirements. It acts as a blueprint for translating abstract requirements into a structured, implementable solution

## Basic Definitions

- `Horizontal Scaling`: Scale by adding more servers.

- `Vertical Scaling`: Scale by adding more resources.

## Quick Math for Capacity Estimates

- `8 bits` == `1B`
- `1024B` == `1KB`
- `1024 KB` == `1MB`
- `1024MB` == `1GB`
- `1024GB` == `1TB`

## Traffic Estimates

Using instagram as an example

- Estimate total number of requests app will recieve
- Active Daily Active Users (DAU) \* Average read and writes per user

```
// if instagrams has 10 million active users daily

10 000 000 DAU * 30 photos viewed = 300 000 000 Query Based Requests

10 000 000 DAU * 1 photo upload = 10 000 000 Mutation Based Request

// this gives us

300 000 000 // 86400 = 3472 requests per second

10 000 000 // 86400 = 115 writes per second

```

## Resources

To go through this [resource](https://github.com/donnemartin/system-design-primer#study-guide)
