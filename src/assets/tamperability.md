**I get my socks rocked by the clear semantics of methods** like `freeze` and `seal`.  
One can `freeze` an object, encasing the object inside an icy, impenetrable shell, or `seal` an object, as if casting a partial blessing or sealing the matter shut.  
These kinds of metaphors may characterize the ways in which the programmer comes to think about the use of their tools and learns to [mnemonically](https://psychcentral.com/lib/memory-and-mnemonic-devices) reference them for increased retention.

---

## Freeze & Seal

[`Object.freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) and [`Object.seal`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal), together with `let` and `const`, define the "hierarchy of tamperability", which determines how much an object can be tampered with.  
Okay ... I made all that up ... I just mean to suggest that thinking of JavaScript objects in terms of their "tamperability tiers" can be a meaningful framing. (But I won't be offended if you prefer to call it immutability like everyone else)

---

### Tier 1 - `let`

> ![Example of a let declaration's absolute mutability](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9rnuckde99jhow1z6ukx.png)

### Tier 2 - `const`

> > ![Example of a const declaration's shallow immutability](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jn2naq9rr5rzbu0dlogf.png)

### Tier 3 - `seal`

> > > ![Example of the seal method's mutability protections](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iifoqwzln9ahbyy3z0jj.png)

### Tier 4 - `freeze`

> > > > ![Example of the freeze method's immutability enablement](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/60mxbtbixa5abk6nl66c.png)

### Tier 5

> > > > > UNKNOWN

---

---

---

### An iceberg on the tip of my tongue

_I hope you're getting excited_, cause we're about to build a logical metaphor with high-level, pseudo-natural machine speak!!! ([Di-hydrogen monoxide](https://en.wikipedia.org/wiki/Water), amirite?)

```
// Absurdly complex mock object that we're definitely gonna
accidentally try to modify the deeply nested properties of

const iceberg = {
  above: {
    name: "marylee",
  },
  surface: {
    name: "alabaster",
    submerged: [
      { visions: ["joy", "grief"] },
      {
        regrets: null,
        fightLeft: 100,
        fears: {
          one: "failure",
          two: "deep, cold water",
        },
      },
    ],
  },
};

// Super chill function that prevents the silly oopsies we make
   swimming too deep

const deepFreeze = (nestedObject) => {
  const propNames = Object.getOwnPropertyNames(nestedObject);
  // Traverse
  for (const name of propNames) {
    const value = nestedObject[name];
    // Check for reference-type value
    if (value && typeof value === "object") {
      // Recurse
      deepFreeze(value);
    }
  }
  // Freeze each of type "object"
  return Object.freeze(nestedObject);
}

const absoluteZero = deepFreeze(iceberg);
```

### _**So**_,

> 1.  We have this big messy ice rock.
> 2.  We pass it as input to our deepFreeze function, and
> 3.  we capture the prop names at the current depth as an array.
> 4.  Then, we loop over each property and check its value.
> 5.  If the value is an object, we make a recursive call on the nested value.
> 6.  By the end of our `for...of` loop, the entire depth of the parent object has been visited.
> 7.  Objects are frozen as the function calls are popped from the stack, beginning with the last field evaluated.

---

#### **You've unlocked Tier 5**:

> > > > > the ~_DEEP FREEZE_~

> ### Tamperability:
>
> > > > > ### ABSOLUTE ZERO

---

![Mr. Freeze from Batman gets a little too excited at the thought of an iceberg](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tw05zpdqvlsne2rfrrbk.jpg)

---

It's worth mentioning that JavaScript is also equipped with the methods required to evaluate these states, and the language offers even more tamper control than was mentioned here by way of [Object.preventExtensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions). JavaScript provides the programmer with fine-grained access to an object's mutability settings.  
This flexibility is one of the many reasons I love JavaScript. We have the freedom to sovereignly decide how much to allow our objects to change. However, as a functional fanatic, `Object.freeze` is the only one of these available methods that I occasionally call on. As per recommendations put forth by the functional approach, it's best to eliminate mutability altogether.

---

## In Conclusion,

Consider that:

- **Java** is the dad who never lets you try anything exciting cause it's not safe.
- **JavaScript** is the dad who lets you choose so you can learn from your mistakes.

There are of course excellent and meaningful reasons for building stricter rules into a language, not least of all to avoid pernicious bugs. The reliability of languages that enforce these rules is clear and palpable.

But that doesn't make working with them any more fun.
