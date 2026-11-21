# Architecture rules

- Serve explicitly requested static report downloads from `public/` through native anchors with the `download` attribute, so browser downloads remain same-origin without JavaScript interception.