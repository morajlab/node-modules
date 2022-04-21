import click
import shutil
import os
from ..src.path import getPackagePath
from ..src.log import error, success


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
    "-r", "--remote", help="Remove remote package", is_flag=True, default=False
)
def remove(name, directory, remote):
    """Remove package locally and from remote registry"""

    try:
        shutil.rmtree(os.path.join(directory, name), ignore_errors=False)
        success("package '{}' removed from path '{}'.".format(name, directory))
    except FileNotFoundError:
        error("package '{}' doesn't exist in path '{}'.".format(name, directory))
    except Exception as ex:
        raise ex from None
