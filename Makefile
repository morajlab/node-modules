.PHONY: install test lint_staged

install:
	@poetry install
	@npm config set '@morajlab:registry' https://npm.pkg.github.com
	@yarn
	@mjw hook --install

test:
	@mjw test

lint_staged:
	exit 0 || @npx --no-install lint-staged
