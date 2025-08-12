# ACID

The ACID principles stands for four key properties guranteeing reliable processing of database transactions.

These properties ensure that data remains valid and consistent even in the facr of errors, power failures or concurrent access.

## Atomicity

Atomicity guarantees that each transaction is treated as a single, indivisible "atomic" unit. Either all operations within the transaction are completed successfully, or none of them are. If any part of the transaction fails, the entire transaction is rolled back to its original state, leaving the database unchanged as if the transaction never happened.

`Example: Consider transferring $100 from Account A to Account B.`

```
BEGIN TRANSACTION;
-- Operation 1: Debit Account A
UPDATE Accounts SET balance = balance - 100 WHERE account_id = 'A';
-- Operation 2: Credit Account B
UPDATE Accounts SET balance = balance + 100 WHERE account_id = 'B';
COMMIT;
```

If the database debits Account A but fails before crediting Account B (e.g., due to a crash), Atomicity ensures that the entire transaction is rolled back. Account A's balance will be restored to its original value, preventing lost money.

## Consistency

Consistency ensures that a transaction brings the database from one valid state to another valid state. Transactions must obey predefined rules (like constraints, triggers, and business logic) to maintain data integrity. If a transaction would violate these rules, it is rolled back.

`Example: Continuing the money transfer example:`

A consistency rule might be that an account balance cannot be negative. If debiting Account A would make its balance negative (and this isn't allowed), the transaction should fail and be rolled back, maintaining the consistency rule.

Another consistency aspect is that the total sum of money across all accounts should remain constant (assuming no money is created or destroyed). A successful atomic transfer ensures this consistency: (Initial A + Initial B) = (A - 100 + B + 100) = (Initial A + Initial B).

## Isolation

Isolation ensures that the concurrent execution of transactions results in a system state that is equivalent to the state achieved if the transactions were executed serially (one after another). Transactions do not interfere with each other; each transaction appears to run in isolation.

`Example: Imagine two users, User X and User Y, accessing the database simultaneously:`

User X starts the $100 transfer from A to B.

While User X's transaction is in progress (say, after debiting A but before crediting B), User Y queries the balances of Account A and Account B.

Without Isolation, User Y might see an inconsistent state (Account A is debited, but Account B is not yet credited). Isolation prevents this. Depending on the isolation level, User Y would either see the state _before_ User X's transaction started or the state _after_ it fully committed, but not the intermediate state.

## Durability

Durability guarantees that once a transaction has been successfully committed, its changes are permanent and will survive subsequent system failures (like power outages, crashes, or errors). Committed data is typically written to persistent storage (like a hard disk or solid-state drive) in a way that can be recovered.

`Example: Following the money transfer:`

User X successfully commits the transaction transferring $100 from A to B. The database confirms the commit. Immediately after, the database server crashes. When the server restarts, the database recovery process ensures that the completed transaction is not lost. The balances of Account A and Account B will correctly reflect the $100 transfer.
