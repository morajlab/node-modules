import click
from ..src.template import listTemplates


@click.command()
def template():
    for t in listTemplates():
        click.echo(t["name"])
