import click
from tabulate import tabulate
from ..src.template import listTemplates


@click.command()
def template():
    """Show list of templates"""

    click.echo(
        tabulate(
            [(t["name"], "*" if t["default"] else "") for t in listTemplates()],
            headers=["Name", "Default"],
            tablefmt="grid",
            stralign="center",
        )
    )
