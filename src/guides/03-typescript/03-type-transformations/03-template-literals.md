# Template Literals

## 1. Only allowed specified String Patterns

- anything that is prefixed with string will be accepted

```ts
type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// Should succeed:
goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");
```

## 2. Extract Union Strings Matching a Pattern

- Can use same concept of `Extract` to take things out of union

```ts
type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = Extract<Routes, `${string}:${string}`>;
// anything that conforms with prefix string : postfix string
```

## 3. Create a Union of Strings with All Possible Permutations of Two Unions

```ts
type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type Sandwich = `${BreadType} sandwich with ${Filling}`;

// Returns the following
// | "rye sandwich with cheese"
// | "rye sandwich with ham"
// | "rye sandwich with salami"
// | "brown sandwich with cheese"
// | "brown sandwich with ham"
// | "brown sandwich with salami"
// | "white sandwich with cheese"
// | "white sandwich with ham"
// | "white sandwich with salami"
```

## 4. Splitting a String into a Tuple

- Can just leverage from `ts-toolbelt`

```ts
import { S } from "ts-toolbelt";

type Path = "Users/John/Documents/notes.tsxt";

type SplitPath = S.Split<Path, "/">;
// Returns ["Users", "John", "Documents", "notes.txt"]
```

## 5. Create Object Whose Keys Are Derived From a Union

- Just leverage on `Record`

```ts
type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = Record<TemplateLiteralKey, string>;
// Returns
// {
//   userId: string;
//   userName: string;
//   postId: string;
//   postName: string;
//   commentId: string;
//   commentName: string;
// }
```

## 6. Transform String Literals to Uppercase

```ts
type Event = "log_in" | "log_out" | "sign_up";

type ObjectOfKeys = Record<Uppercase<Event>, string>;

// Returns
// {
//   LOG_IN: string;
//   LOG_OUT: string;
//   SIGN_UP: string;
// }
```
