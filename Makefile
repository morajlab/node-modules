.PHONY: install test lint_staged storybook

install:
	@poetry install
	@npm config set '@morajlab:registry' https://npm.pkg.github.com
	@npm install
	@mjw hook --install

test:
	@mjw test

storybook:
	@npx nx run $(name):storybook

lint_staged:
	@npx --no-install lint-staged
