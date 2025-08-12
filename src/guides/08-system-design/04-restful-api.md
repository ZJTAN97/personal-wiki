# REST API Design

## Introduction

REST (Representational State Transfer) is an architectural style for an API that uses HTTP requests to access and use data. The data can be used to GET, PUT, POST and DELETE data types which corresponds to CRUD operations.

:::note
Essentially a style of web architecture that governs the behaviour of clients and servers.
:::

## Advantages and Disadvantages

Advantages

1. Easy to understand and learn
2. High load can be maanged with HTTP proxy server & cach
3. use standard HTTP protocols to retrieve data and requests

Disadvantages

1. Lack of state
2. Lack of security, public URL is exposed. Though can use OAuth

## Principles

1. Uniform Interface

Any single resource should not be too large and contain each and everything in its representation. Whenever relevant, a resource should contain links (HATEOAS) pointing to relative URIs to fetch related information.

2. Client-Server Decoupling

Servers and clients may also be replaced and developed independently, as long as the interface/contract between them is not altered.

3. Statelessness

No client context shall be stored on the server between requests. The client is responsible for managing the state of the application.

4. Cacheability

Well managed caching partiall or completely eliminates some client-server interactions, further improving scalability and performance

5. Layered System Architecture

REST allows you to use a layered system architecture where you deploy the APIs on server A, and store data on server B and authenticate requests in Server C, for example. A client cannot ordinarily tell whether it is connected directly to the end server or an intermediary along the way.

## Design Considerations

Derived from this [blogpost](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/#h-accept-and-respond-with-json) in stackoverflow

1. Accept and respond with JSON

2. Use nouns instead of verbs in endpoint paths

3. Name collections with plural nouns

4. Nesting resources for hierarchical objects

5. Handle errors gracefully and return standard error codes

6. Allow filtering, sorting and pagination

7. Maintain good security practices

8. Cache data to improve perforamnce

9. Versioning of APIs
