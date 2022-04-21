import click
import os
import subprocess
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
def publish(name, directory):
    """Publish package to registry"""

    try:
        subprocess.run(
            ["npm", "publish"], check=True, cwd=os.path.join(directory, name)
        )
        success(
            "package '{}' in path '{}' published to registry.".format(name, directory)
        )
    except Exception as ex:
        error(ex)
