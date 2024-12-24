
# **Playwright Test Framework**

This repository contains a **Playwright-based testing framework** designed for end-to-end (E2E), UI, and snapshot testing. The framework is designed with modularity, scalability, and maintainability in mind.



## **Folder Structure**

The project follows a structured hierarchy for better organization:


PLAYWRIGHT_TEST_POM_DOCKER/
├── allure-reports/         # Allure reports folder (generated)
├── allure-results/         # Allure test results folder (generated)
├── node_modules/           # Node.js dependencies (auto-generated)
├── playwright-report/      # HTML reports for test results (generated)
├── test-results/           # Folder for test output (generated)
├── tests/                  # Test cases directory
│   ├── apiTests/           # API test cases
│   ├── pages/              # Page Object Model (POM) classes
│   ├── screenshots/        # Folder for snapshots/screenshots (if enabled)
│   ├── snapshotTests/      # Snapshot testing cases
│   └── uiTests/            # UI test cases
├── utils/                  # Utility/helper files
│   ├── encrypt&decrypt.ts  # Helper for encryption/decryption
│   ├── environment.ts      # Environment configuration
├── .dockerignore           # Files ignored during Docker image build
├── .env                    # Environment variables (excluded from builds)
├── .gitignore              # Git ignored files
├── docker-compose.yml      # Docker Compose configuration
├── Dockerfile              # Docker configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked dependency versions
└── playwright.config.ts    # Playwright test configuration




## **Getting Started**

### **1. Prerequisites**

- Node.js installed (v14 or above).
- Docker installed (optional for containerized testing).

### **2. Clone the Repository**

bash
git clone <repository-url>
cd PLAYWRIGHT_TEST_POM_DOCKER


## **Installation**

Install the project dependencies:

bash
npm install




## **Configuration**

### **Environment Variables**
Create a `.env` file at the root level to define your environment-specific configurations. Example:

plaintext
EMAIL=battulas@yopmail.com
PASSWORD=Spring_2019
ENCRYPTION_KEY=your-secret-key
TEST_ENV=https://letcode.in/signin


### **Playwright Configuration**
The test settings are defined in `playwright.config.ts`. Key configurations include:
- Parallel test execution
- Allure and HTML reporters
- Browser-specific configurations



## **Scripts**

### **Run All Tests**

bash
npx playwright test


### **Run Specific Test**

bash
npx playwright test tests/uiTests/JIRA_001_login.test.ts


### **Generate Allure Report**

bash
allure generate ./allure-results -o ./allure-report
allure open ./allure-report


### **Generate HTML Report**

bash
npx playwright show-report


### **Run Tests in Docker**

Build and run the container:

bash
docker-compose up --build




## **Features**

### **1. Modular Page Object Model**
- Reusable page objects for modular and maintainable test scripts.

### **2. Support for Multiple Browsers**
- Chromium (enabled)
- Firefox, WebKit (commented but configurable)

### **3. Flexible Reporting**
- Allure Reports for detailed reporting.
- HTML reports for visual debugging.

### **4. Test Isolation**
- Configured for parallel test execution with independent test contexts.

### **5. CI/CD Ready**
- Configurable `retries` and `workers` based on CI environments.



## **Key Files**

- `playwright.config.ts`: Centralized test configurations.
- `.env`: Environment-specific variables (excluded from version control).
- `Dockerfile`: Build Docker images for containerized test execution.
- `docker-compose.yml`: Simplifies running Playwright tests in Docker.



## **Contributing**

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add your message"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.



## **License**

This project is licensed under the [MIT License](LICENSE).


