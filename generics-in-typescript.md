# Generics in TypeScript and asynchronous Promise<T> Explained Simply

Generics look confusing at first in Typescript. That little `<T>` shows up everywhere, and it's too much confusing sometime when things get complicated. But once you understand the basics, async code gets a lot easier to work with.

## What is a generic?

A generic is a placeholder for a type. The type isn't fixed when the function is written. TypeScript fills it in when the function is called.

```ts
function getFirst<T>(items: T[]): T {
  return items[0];
}

getFirst([1, 2, 3]); // number
getFirst(["a", "b"]); // string
```

Here we are passing an array of numbers as parameter in the first call and an array of string in the second call. But in the function 'getFirst' we have used a generic type `<T>` which is useful and easy to reuse the code.

## How it helps with Promises

`Promise<T>` is a generic too. `Promise<string>` means "a string will arrive later". So after `await`, the real type will be showed.

A small reusable helper like below shows this well:

```ts
interface User {
  id: number;
  name: string;
}

async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

const user = await getData<User>("/api/users/1");
console.log(user.name);
```

Now your code editor will suggest `name` and `id` after typing `user.`. The same function also works for posts or comments.

## Conclusion

Generics are not as scary as they look. They let code be reused while the types stay safe. A good way to learn is to write `getData<T>` by hand and play around with it.
