import click
import os
import shutil

DEFAULT_TEMPLATE_FILE_NAME = "MJW_DEFAULT_TEMPLATE"
root_path = os.path.join(os.path.dirname(__file__), "..")
templates_path = os.path.join(root_path, "templates")
packages_path = os.path.join(root_path, "packages")

def list_templates():
  result = list()

  for t in os.scandir(templates_path):
      result.append({ "name": t.name, "default": os.path.exists(os.path.join(templates_path, t.name, DEFAULT_TEMPLATE_FILE_NAME)) })

  return result


@click.command()
@click.argument("name")
@click.option("-d", "--directory", type=click.Path(), default=packages_path)
@click.option("-t", "--template", type=click.Choice([t["name"] for t in list_templates()]), default=list(filter(lambda t: t["default"], list_templates()))[0]["name"])
def new(name, directory, template):
  try:
    shutil.copytree(os.path.join(templates_path, template), os.path.join(directory, name), ignore=shutil.ignore_patterns(DEFAULT_TEMPLATE_FILE_NAME), dirs_exist_ok=False)
    click.echo("{}: {}".format(click.style("SUCCESS", bg="green"), "package '{}' created in path '{}'.".format(name, directory)))
  except FileExistsError:
    click.echo("{}: {}".format(click.style("ERROR", bg="red"), "path '%s' already exists." % os.path.join(directory, name)))
  except Exception as ex:
    raise ex from None
