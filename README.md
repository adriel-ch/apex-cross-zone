# apex-cross-zone

This repo is meant for APEX trainees to test their APEX cross zone setup. It uses an external module called Test Helper.

---

## Usage

1. Go to https://codesandbox.io and create an account using either a GitHub or Google account. *required

2. Create a new Sandbox using this repo as the template. Copy this GitHub link: https://github.com/adriel-ch/apex-cross-zone

1. Run the following command in the terminal window of your IDE instance:

    ```shell
    npm init --yes && npm i https://github.com/lim-ming-tat/api-test-helper.git --save && node index.js
    ```

3. Replace the conent of **data.json** with either **L1toL2.json** or **L2toL1.json** depending on the test required.

4. Make the required edits to the data.json file **and remove the comments**.

5. Run the following command in the terminal:

    ```shell
    node index.js
    ```
