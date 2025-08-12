# Database Normalization

## Introduction

The process of converting database design into a standard form to eliminate inconsistencies, duplicat information and improving performance

## First Normal Form

- First stage of the normalisation process
- “each set of columns must uniquely identify a row”
- a combination of all columns must be unique

**Primary Key**

- A field or column in a table that contains a unique value for the row
- Value can only be stored once in that column

## Second Normal Form

### Relationships

- One to Many
- One to One
- Many to Many (not ideal but common), solved by using joining table
- Self Relationship (A table joints to itself)

### Second Normal Form Definition

- Second stage of normalisation process
- Fufil the requirements of first normal form
- Each non-key attributes must be functionally dependent on the primary key

Foreign Keys

- A field in a table that is rlated to a primary key in another table
- used to link two tables

2NF Actions

- See if there are any attributes that do not rely on the primary key, and move them to a new table
- Determine how these tables are related based on the available relationships
- Add foreign keys to these tables

## Third Normal Form

### Third Normal Form Definition

- Fufill the requirements of second normal form
- has no transitive functional dependency

### 3NF Actions

Third Normal Form Definition

- Fufill the requirements of second normal form
- has no transitive functional dependency

3NF Actions

- Determine if there are any transitive functional dependencies (A>B>C)
- Move these to a seperate table
