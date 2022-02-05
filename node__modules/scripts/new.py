import click
import os
import shutil
from ..src.template import listTemplates, DEFAULT_TEMPLATE_FILE_NAME
from ..src.path import getPackagePath, getTemplatePath


@click.command()
@click.argument("name")
@click.option(
    "-d",
    "--directory",
    help="Destination path",
    type=click.Path(),
    default=getPackagePath(),
)
@click.option(
    "-t",
    "--template",
    help="Template name",
    type=click.Choice([t["name"] for t in listTemplates()]),
    default=list(filter(lambda t: t["default"], listTemplates()))[0]["name"],
)
def new(name, directory, template):
    """Create new package/template"""

    try:
        shutil.copytree(
            getTemplatePath(template),
            os.path.join(directory, name),
            ignore=shutil.ignore_patterns(DEFAULT_TEMPLATE_FILE_NAME),
            dirs_exist_ok=False,
        )
        click.echo(
            "{}: {}".format(
                click.style("SUCCESS", bg="green"),
                "package '{}' created in path '{}'.".format(name, directory),
            )
        )
    except FileExistsError:
        click.echo(
            "{}: {}".format(
                click.style("ERROR", bg="red"),
                "path '%s' already exists." % os.path.join(directory, name),
            )
        )
    except Exception as ex:
        raise ex from None
