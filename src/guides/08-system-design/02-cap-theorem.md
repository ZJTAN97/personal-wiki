# CAP Theorem

CAP Theorem states that for a distributed system, only two of the three gurantees can be achieved.

- `Consistency`: Every read receives the most recent write or an error
- `Availability`: Every request receieves a response, without gurantee that it contains the most recent version of the information.
- `Partition Tolerance`: The system continues to operate despite arbitrary partitioning due to network failures.

The theorem underscores the need to align system design with application requirements, as no single solution optimizes all three properties under network failures.

## CP - Consistency and Partition Tolerance

Return errors or timeouts to ensure data accuracy, sacrificing availability

## AP - Availability and Partition Tolerance

Serve potentially stale data to maintain responsiveness, risking inconsistency
