# TWMerge

TWMerge is a utility for merging Tailwind CSS classes, keeping only the latest class when conflicts occur.

### Demonstration:
```typescript
merge("text-gray-100 text-gray-50")
    -> "text-gray-50"
merge(clsx("text-gray-100", "text-gray-50")) 
    -> "text-gray-50"
```

## Table of Contents

- [TWMerge](#twmerge)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contact](#contact)

## Description

TWMerge provides a powerful solution for managing Tailwind CSS classes in dynamic environments. 
By keeping only the latest conflicting class, TWMerge ensures that your styles are applied as intended, reducing unexpected visual outcomes and improving the maintainability of your codebase.


## Installation

```bash
# Install the dependency
npm install --save twmerge

```

## Usage

```bash
# Import and call the merge function
import {merge} from 'twmerge'
<div className={merge("bg-red-200 bg-green-200")}></div>
```


## License

TWMerge is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions, suggestions, or issues related to TWMerge, please open an issue on the GitHub repository.

