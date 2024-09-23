# Git workflow commands
wip:
	git add .
	git commit -m "WIP: Work in progress"
	git push

# Build command
build:
	npm run build

# Deploy command
deploy:
	npm run deploy

# Test command
test:
	npm run test

# Display all available commands
help:
	@echo "Available commands:"
	@echo "  wip     - Commit and push work in progress"
	@echo "  build   - Build the project"
	@echo "  deploy  - Deploy the project"
	@echo "  test    - Run tests"
	@echo "  help    - Display this help message"

# Create GitHub Actions workflow file
create-github-actions:
	mkdir -p .github/workflows
	echo "name: Run Tests\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js\n      uses: actions/setup-node@v2\n      with:\n        node-version: '14'\n    - run: npm ci\n    - run: npm test" > .github/workflows/test.yml
	@echo "GitHub Actions workflow file created at .github/workflows/test.yml"
