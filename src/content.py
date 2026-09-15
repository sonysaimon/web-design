# -*- coding: utf-8 -*-
"""Loads editable content from the /content folder (TOML files) and renders plain text to HTML."""
import os, glob, tomllib, html as htmlmod

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_DIR = os.path.join(ROOT, "content")


def load(name):
    """Load content/<name>.toml as a dict."""
    with open(os.path.join(CONTENT_DIR, f"{name}.toml"), "rb") as f:
        return tomllib.load(f)


def load_dir(sub):
    """Load every *.toml in content/<sub>/ (sorted by file name)."""
    out = []
    for path in sorted(glob.glob(os.path.join(CONTENT_DIR, sub, "*.toml"))):
        with open(path, "rb") as f:
            d = tomllib.load(f)
            d["_file"] = os.path.basename(path)
            out.append(d)
    return out


def render_text(text, first_class="", para_class=""):
    """Turn owner-written text into HTML.

    - Paragraphs are separated by blank lines.
    - Lines starting with "- " become bullet lists.
    - Lines starting with "## " become sub-headings.
    - Simple inline HTML (links, <strong>, <em>) is passed through.
    """
    if not text:
        return ""
    blocks = [b.strip() for b in text.strip().replace("\r\n", "\n").split("\n\n") if b.strip()]
    out = []
    for i, b in enumerate(blocks):
        lines = b.split("\n")
        if all(l.strip().startswith("- ") for l in lines):
            items = "".join(f"<li>{l.strip()[2:].strip()}</li>" for l in lines)
            out.append(f'<ul class="{para_class}">{items}</ul>' if para_class else f"<ul>{items}</ul>")
        elif b.startswith("## "):
            out.append(f'<h3 class="{para_class}">{b[3:].strip()}</h3>' if para_class else f"<h3>{b[3:].strip()}</h3>")
        elif b.startswith("<") and not b.startswith("<a ") and not b.startswith("<strong") and not b.startswith("<em"):
            out.append(b)  # already HTML (e.g. a <div> or <img>)
        else:
            cls = " ".join(c for c in [first_class if i == 0 else "", para_class] if c)
            out.append(f'<p class="{cls}">{" ".join(lines)}</p>' if cls else f"<p>{' '.join(lines)}</p>")
    return "\n".join(out)


def esc(s):
    return htmlmod.escape(s, quote=True)
