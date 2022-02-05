import click


def error(message):
    click.echo(
        "{}: {}".format(click.style("ERROR", fg="bright_red"), message), err=True
    )


def success(message):
    click.echo("{}: {}".format(click.style("SUCCESS", fg="bright_green"), message))


def warn(message):
    click.echo("{}: {}".format(click.style("WARNING", fg="bright_yellow"), message))
