import os
from .path import getTemplatePath
from .log import warn

DEFAULT_TEMPLATE_FILE_NAME = "MJW_DEFAULT_TEMPLATE"


def listTemplates():
    result = list()
    default_list = list()

    for t in os.scandir(getTemplatePath()):
        name = t.name
        is_default = os.path.exists(getTemplatePath(name, DEFAULT_TEMPLATE_FILE_NAME))

        if is_default:
            default_list.append(name)

        result.append(
            {
                "name": name,
                "default": is_default,
            }
        )

    if len(default_list) > 1:
        warn(
            "'{}' file exists in multiple templates.\n".format(
                DEFAULT_TEMPLATE_FILE_NAME
            )
        )

    return result
