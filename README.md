# halo-switch-site (unpublished)

This public repository used to serve the old Halo Switch marketing site at
`https://jeffdejaegher-oss.github.io/halo-switch-site/`.

Metis2 replaced that site. Marketing HTML and assets were removed so GitHub
Pages no longer publishes that copy.

## GitHub Pages setting (needs a repo admin)

The Pages REST API (`DELETE /repos/jeffdejaegher-oss/halo-switch-site/pages`)
returns **403 Resource not accessible by integration** for the Cursor GitHub
App token. Same for `gh workflow disable pages-build-deployment`.

A repo **admin** should finish the takedown:

1. Open https://github.com/jeffdejaegher-oss/halo-switch-site/settings/pages
2. Turn GitHub Pages **off** (Unpublish / Remove site)
3. Do not re-enable Pages for this repo

There is no custom workflow under `.github/workflows`. The only Actions
workflow is GitHub’s built-in `pages-build-deployment`, which exists only to
publish Pages. It cannot be disabled without admin, and it should disappear
once Pages is unpublished.

Do not delete or archive this repository unless Pages-off still fails.
