# Contributing to Write the Docs Kenya Website

Thank you for your interest in contributing! We welcome all kinds of contributions to make this project better for the community.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Please treat everyone with respect and kindness.

---

## How to Contribute

### 1. Fork the Repository
- Click the "Fork" button at the top right of this repository.
- Clone your fork to your local machine:
  ```bash
  git clone https://github.com/your-username/WriteDocsKenya.git
  cd WriteDocsKenya
  ```

### 2. Create a Branch
- Create a new branch for your feature or bugfix:
  ```bash
  git checkout -b feature/your-feature-name
  ```

### 3. Make Your Changes
- Follow the [Coding Standards](#coding-standards) below.
- Add or update tests as needed.
- Run tests and linters locally before committing.

### 4. Commit Your Changes
- Use clear, descriptive commit messages (see [Commit Message Guidelines](#commit-message-guidelines)).
- Stage and commit your changes:
  ```bash
  git add .
  git commit -m "feat: add new event card component"
  ```

### 5. Push and Open a Pull Request
- Push your branch to your fork:
  ```bash
  git push origin feature/your-feature-name
  ```
- Open a Pull Request (PR) against the `dev` branch of this repository.
- Fill out the PR template and describe your changes clearly.

### 6. Participate in the Review
- Respond to feedback and make any requested changes.
- Once approved, your PR will be merged by a maintainer.

---

## Coding Standards

- Use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for code formatting and linting.
- Use TypeScript for all frontend code.
- Use descriptive variable and function names.
- Write clear, concise comments where necessary.
- Keep functions and components small and focused.
- Write tests for new features and bug fixes.
- Follow the existing file and folder structure.

---

## Commit Message Guidelines

- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation only changes
  - `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `test`: Adding or correcting tests
  - `chore`: Other changes that don't modify src or test files
- Example:
  ```
  feat: add user authentication to backend
  fix: correct event date formatting on homepage
  docs: update README with setup instructions
  ```

---

## Pull Request Review Process

- All PRs are reviewed by at least one maintainer.
- Automated tests and linters must pass before review.
- PRs should be focused and address a single concern.
- Large or breaking changes should be discussed in an issue before a PR is opened.
- Once approved, a maintainer will merge your PR.

---

## Need Help?

If you have questions, open an issue or ask in our community channels. We're happy to help!

Thank you for helping make Write the Docs Kenya better! 