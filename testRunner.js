const createTestCafe = require('testcafe');

const testCafe = await createTestCafe('localhost',3000);

try {
    const runner = testCafe.createRunner();

    await runner
        .src('./tests/form.js')
        .browsers('firefox','chrome')
        .run();
}
finally {
    await testCafe.close();
}