# TWindMerge

TWindMerge is a utility for merging Tailwind CSS classes, keeping only the latest class when conflicts occur.

### Demonstration:


```typescript
// merges string input
merge("text-gray-100 text-gray-50")
    -> "text-gray-50"
// merges clsx input
merge(clsx("text-gray-100", "text-gray-50")) 
    -> "text-gray-50"
// merges multiple arguments
merge(['bg-blue-500', 'bg-red-500'])
    -> "bg-red-500"
// merges array input
merge('bg-blue-500', 'bg-red-500')
    -> "bg-red-500"
```

## Table of Contents

- [TWindMerge](#TWindMerge)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contact](#contact)

## Description

TWindMerge provides a powerful solution for managing Tailwind CSS classes in dynamic environments. 
By keeping only the latest conflicting class, TWindMerge ensures that your styles are applied as intended, reducing unexpected visual outcomes and improving the maintainability of your codebase.


## Installation

```bash
# Install the dependency using npm, yarn, or pnpm
npm install twindmerge
# or
yarn add twindmerge
# or
pnpm add twindmerge
```

## Usage

```typescript
// Import the merge function
import { merge } from 'twindmerge';
// Example usage in a React component
function ExampleComponent() {
  return (
    <div className={merge("bg-red-200 bg-green-200")}>
      This div will have a green background.
    </div>
  );
}
// Example usage with array
function ExampleComponentWithClsx() {
  return (
    <div className={merge(["text-gray-100", "text-gray-50"])}>
      This div will have text-gray-50 class.
    </div>
  );
}

// Example usage with clsx
import clsx from 'clsx';
function ExampleComponentWithClsx() {
  return (
    <div className={merge(clsx("text-gray-100", "text-gray-50"))}>
      This div will have text-gray-50 class.
    </div>
  );
}
```


## License

TWindMerge is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions, suggestions, or issues related to TWindMerge, please open an issue on the GitHub repository.

