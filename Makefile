# Git workflow commands
.PHONY: wip
wip:
	git add .
	git commit -m "WIP: Work in progress"
	git push

# Install command
.PHONY: install
install:
	npm install

# Update command
.PHONY: update
update:
	npm update

# Update command
.PHONY: check\:deps
check\:deps:
	npm outdated

# Build command
.PHONY: build
build:
	npm run build

# Deploy command
.PHONY: deploy
deploy:
	npm run deploy

# Test command
.PHONY: test
test:
	npm run test

# End-to-end test command
.PHONY: teste2e-prepare
teste2e-prepare: 
	lsof -ti :5173 | xargs kill -9 || true
	rm -rf my-project
	npm create vite@latest my-project -- --template react
	cd my-project && npm install -D tailwindcss postcss autoprefixer
	cd my-project && npx tailwindcss init -p
	echo "/** @type {import('tailwindcss').Config} */" > my-project/tailwind.config.js
	echo "export default {" >> my-project/tailwind.config.js
	echo "  content: [" >> my-project/tailwind.config.js
	echo "    './index.html'," >> my-project/tailwind.config.js
	echo "    './src/**/*.{js,ts,jsx,tsx}'," >> my-project/tailwind.config.js
	echo "  ]," >> my-project/tailwind.config.js
	echo "  theme: {" >> my-project/tailwind.config.js
	echo "    extend: {}," >> my-project/tailwind.config.js
	echo "  }," >> my-project/tailwind.config.js
	echo "  plugins: []," >> my-project/tailwind.config.js
	echo "}" >> my-project/tailwind.config.js
	echo "@tailwind base;" > my-project/src/index.css
	echo "@tailwind components;" >> my-project/src/index.css
	echo "@tailwind utilities;" >> my-project/src/index.css
	npm install
	@echo "Project created successfully. Navigate to the project directory and run 'npm run dev' to start."

.PHONY: test\:e2e-remote
test\:e2e-remote: build teste2e-prepare

	@echo "Install latest version of twindmerge"
	cd my-project && npm install twindmerge
	echo "import { merge } from 'twindmerge';\n\nfunction App() {\n\n  return (\n    <>\n      <div className={merge('text-gray-500 text-red-200')}>\n          text\n      </div>\n    </>\n  )\n}\n\nexport default App" > my-project/src/App.jsx

	@echo "Test with remote version of twindmerge"
	cd my-project && npm run dev & npx cypress run --e2e --config baseUrl=http://localhost:5173

.PHONY: test\:e2e-local
test\:e2e-local: build teste2e-prepare

	@echo "Install latest version of twindmerge"
	cd my-project && npm install twindmerge
	echo "import { merge } from 'twindmerge';\n\nfunction App() {\n\n  return (\n    <>\n      <div className={merge('text-gray-500 text-red-200')}>\n          text\n      </div>\n    </>\n  )\n}\n\nexport default App" > my-project/src/App.jsx

	@echo "Test with local dist of twindmerge"
	cp -r dist my-project/node_modules/twindmerge
	cd my-project && npm run dev & npx cypress run --e2e --config baseUrl=http://localhost:5173

# Lint command
.PHONY: lint
lint:
	npm run lint

# Display all available commands
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  wip     - Commit and push work in progress"
	@echo "  install - Install dependencies"
	@echo "  build   - Build the project"
	@echo "  deploy  - Deploy the project"
	@echo "  test    - Run tests"
	@echo "  lint    - Run linter"
	@echo "  help    - Display this help message"
