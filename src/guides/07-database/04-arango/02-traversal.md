# Overview

Typical Graph Query
```
FOR vertexVariableName, edgeVariableName, pathVariableName in traversalExpression
```

General example
```aql

FOR v, e, p IN 1..1 ANY
'worldVertices/continent-south-america'
GRAPH 'worldCountry'
RETURN {v, e, p}

```
