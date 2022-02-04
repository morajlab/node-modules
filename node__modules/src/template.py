import os
from .path import getTemplatePath

DEFAULT_TEMPLATE_FILE_NAME = "MJW_DEFAULT_TEMPLATE"


def listTemplates():
    result = list()

    for t in os.scandir(getTemplatePath()):
        result.append(
            {
                "name": t.name,
                "default": os.path.exists(
                    getTemplatePath(t.name, DEFAULT_TEMPLATE_FILE_NAME)
                ),
            }
        )

    return result
