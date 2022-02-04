import os


def getRootPath():
    return os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))


def getProjectAbsPath(*path):
    return os.path.join(getRootPath(), *path)


def getTemplatePath(*path):
    return getProjectAbsPath("node__modules", "templates", *path)


def getNodeBinPath(name):
    return getProjectAbsPath("node_modules", ".bin", name)


def getPackagePath(*path):
    return getProjectAbsPath("packages", *path)


def getCurrentAbsPath(path="."):
    if os.path.isabs(path):
        return os.path.abspath(path)
    else:
        return getCurrentAbsPath(os.path.join(os.getcwd(), path))
