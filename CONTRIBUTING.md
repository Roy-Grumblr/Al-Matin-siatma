# Contributing to SIATMA

Contributions are welcome. For substantial changes, open an issue first to discuss the proposed approach.

## Fork and clone

1. Fork `Roy-Grumblr/Al-Matin-siatma` on GitHub.
2. Clone your fork and enter the project directory:

   ```bash
   git clone https://github.com/<your-username>/Al-Matin-siatma.git
   cd Al-Matin-siatma
   ```

3. Add the original repository as the upstream remote:

   ```bash
   git remote add upstream https://github.com/Roy-Grumblr/Al-Matin-siatma.git
   ```

## Create a branch

Create a branch from the latest `main` branch. Use `fitur/nama-fitur` for a feature and `fix/nama-bug` for a bug fix.

```bash
git switch main
git pull upstream main
git switch -c fitur/nama-fitur
# or
git switch -c fix/nama-bug
```

Use lowercase words separated by hyphens in the branch name.

## Commit conventions

Start commit messages with one of these types:

- `feat`: a user-facing feature
- `fix`: a bug fix
- `docs`: documentation changes
- `style`: formatting or visual-only changes
- `refactor`: code restructuring without behavior changes
- `test`: adding or updating tests

Use an imperative, concise description, such as `feat: add attendance filters`.

## Push and open a pull request

Push your branch to your fork:

```bash
git push -u origin fitur/nama-fitur
```

Open a pull request from that branch to `Roy-Grumblr/Al-Matin-siatma` on GitHub. Describe the problem and solution, link related issues, and include screenshots for visible UI changes. Mention the checks you ran and call out anything that still needs review.

## Code style guidelines

- Follow the existing HTML, CSS, and JavaScript patterns in the project.
- Keep changes focused and use descriptive names.
- Preserve responsive behavior and accessibility, including labels and semantic elements.
- Reuse existing helpers such as `SIATMA_UI`, `SIATMA_DATA`, and `SIATMA_LAYOUT`.
- Validate JavaScript syntax and run `git diff --check` before opening a pull request.
- Do not commit credentials, personal settings, generated files, or unrelated changes.

## Report a bug or request a feature

Open a GitHub issue in the repository. For a bug, include the page or flow, steps to reproduce, expected and actual behavior, browser/device details, and screenshots or console errors when useful. For a feature request, explain the user need, the intended behavior, and any relevant examples. Never include passwords, tokens, student personal information, or other sensitive data.
