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
