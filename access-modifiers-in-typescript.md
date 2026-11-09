# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers describe where a class member can be used. They help make a class easier to work with by showing which parts are accessable from anywhere and which parts are not. TypeScript has `public`, `private`, and `protected`; `readonly` is a related property modifier that prevents reassignment.

## How they work

Class members are `public` by default, so writing `public` is optional. Public members can be accessed from anywhere the instance is available.

```ts
class Account {
  public readonly id: number;
  private balance = 0;
  protected owner: string;

  constructor(id: number, owner: string) {
    this.id = id;
    this.owner = owner;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }
}
```

Here, callers can read `id` and use `deposit`, but they cannot directly change `balance`. Code inside `Account` can update its private balance. `protected` is similar to `private`, except subclasses can access it.

```ts
class SavingsAccount extends Account {
  describeOwner(): string {
    return this.owner; // Allowed: owner is protected.
    // return this.balance; // Error: balance is private.
  }
}

const account = new SavingsAccount(234, "Mina");
account.deposit(20000);
console.log(account.id);
// account.balance; // Error: balance is private.
// account.id = 7; // Error: id is readonly.
```

`readonly` allows assignment during initialization, such as in the constructor, but prevents later reassignment. It does not make an object immutable.

## Conclusion

Use `public` for the supported interface, `private` for class-only details, and `protected` when subclasses need access. Add `readonly` when a property should be set once and then kept pointing to the same value.
