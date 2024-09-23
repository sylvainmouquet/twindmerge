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

When we use tailwindcss it's great to be able to override a current configuration.
The usage of merge is very helpfull to 


## Installation
Provide instructions on how to install your project. Include any dependencies and steps required to get the project up and running.

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

