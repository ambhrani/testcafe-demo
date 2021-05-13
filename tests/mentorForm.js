import { Selector } from 'testcafe';

const become_mentor = Selector('button[id=become-mentor-nav]');
const first_name = Selector('input[id=firstName]');
const last_name = Selector('input[id=lastName]');
const email = Selector('input[id=email]');
const mobile_no = Selector('input[id=mobileNo]');
const submit = Selector('button[.btn d-inline-flex]').withExactText('Submit');


fixture `Getting Started`
    .page `https://www.digitaldaana.org/`;

test('My first test', async t => {
        await t
        .click(become_mentor)
        .typeText(first_name, 'Mila')
        .pressKey("tab")
        .typeText(last_name, 'Kutcher')
        .pressKey("tab")
        .typeText(email,'elonmusk@gmail.com')
        .pressKey("tab")
        .typeText(mobile_no, '1234567890')
        
        .click(submit);
});

