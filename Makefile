# Git workflow commands
wip:
	git add .
	git commit -m "WIP: Work in progress"
	git push

# Install command
install:
	npm install

# Build command
build:
	npm run build

# Deploy command
deploy:
	npm run deploy

# Test command
test:
	npm run test

# Lint command
lint:
	npm run lint

# Display all available commands
help:
	@echo "Available commands:"
	@echo "  wip     - Commit and push work in progress"
	@echo "  install - Install dependencies"
	@echo "  build   - Build the project"
	@echo "  deploy  - Deploy the project"
	@echo "  test    - Run tests"
	@echo "  lint    - Run linter"
	@echo "  help    - Display this help message"
