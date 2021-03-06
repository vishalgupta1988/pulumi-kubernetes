import * as shell from "shell-quote";

export function quotePath(path: string): string {
    if (process.platform === "win32") {
        return quoteWindowsPath(path);
    } else {
        return shell.quote([path]);
    }
}

export function quoteWindowsPath(path: string): string {
    // Unescape paths for Windows. Taken directly from[1], an unmerged, but LGTM'd PR to the
    // official library.
    //
    // [1]: https://github.com/substack/node-shell-quote/pull/34

    path = String(path).replace(/([A-z]:)?([#!"$&'()*,:;<=>?@\[\\\]^`{|}])/g, "$1\\$2");
    return path.replace(/\\\\/g, "\\");
}
