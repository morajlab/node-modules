import click
from ..src.template import listTemplates


@click.command()
def template():
    """Show list of templates"""

    for t in listTemplates():
        click.echo(t["name"])
