# ACID

## 1. Atomicity

Atomicity is all based around this idea of togetherness. When carrying out any kind of database transaction, it often consists of multiple operations. With atomicity, either every operation succeeds or none of them do. This is important because the operations can have an impact on each other, so one failing can lead to unexpected results.

Think of a financial transaction, for example. You are paying a friend $250 for a holiday you are going on. The whole transaction would consist of the money leaving your account and arriving in the recipient’s account. If there was no atomicity, it is possible that money leaves your account but doesn’t arrive at the other end, resulting in you being debited the money but still owing the recipient.

## 2. Consistency

Consistency is about ensuring that changes made as part of a transaction are consistent with any database constraints. If the data at any stage goes against these constraints, the whole transaction will fail.

Unless you have an agreed overdraft, banks, for example, will expect your balance to be positive. So if you tried to withdraw more money than you have available, this would break a constraint and fail, rolling back all operations in that transaction.

## 3. Isolation

Isolation is there to make sure that all transactions are run in an isolated environment without interfering with each other.

Sticking with the financial example, imagine you have a bank balance of $250 and you try to withdraw $100 at an ATM. At the same time, a standing order you have set up comes out for $100. With isolation, these transactions can occur concurrently, ensuring that your ending balance is $0, not $100, because the transactions impacted each other.

## 4. Durability

Durability is another important element of ACID because it ensures that no matter what happens, once a transaction is complete, the changes in that transaction are written to the database. This makes sure that data changes are persisted, even in the event of a power failure or system crash.
