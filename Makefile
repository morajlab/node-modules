.PHONY: install test lint_staged

install:
	@poetry install
	@npm config set '@morajlab:registry' https://npm.pkg.github.com
	@npm install
	@mjw hook --install

test:
	@mjw test

lint_staged:
	@npx --no-install lint-staged
