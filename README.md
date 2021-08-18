# apex-cross-zone

This repo is meant for APEX trainees to test their APEX cross zone setup. It uses an external module called Test Helper.

---

## Usage

1. Create a new Sandbox at https://codesandbox.io using this repo as the template. (Use the master branch)

1. Run the following command in the terminal window:

    ```shell
    npm init --yes && npm i https://github.com/lim-ming-tat/api-test-helper.git --save && node index.js
    ```

3. Replace the conent of **data.json** with either **L1toL2.json** or **L2toL1.json** depending on the test required.

4. Make the required edits to the data.json file.

5. Run the following command in the terminal:

    ```shell
    node index.js
    ```
