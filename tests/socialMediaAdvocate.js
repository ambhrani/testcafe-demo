import { Selector } from 'testcafe';

const become_social_media_advocate = Selector('button[id=become-social-media-advocate-nav]');
const first_name = Selector('input[id=firstName]');
const last_name = Selector('input[id=lastName]');
const email = Selector('input[id=email]');
const mobile_no = Selector('input[id=mobileNo]');
const submit = Selector('.btn d-inline-flex');

fixture `Getting Started`
    .page `https://www.digitaldaana.org/`;


test('Second test', async t =>{
    await t
    .click(become_social_media_advocate)
    .typeText(first_name, 'Mila')
    .pressKey("tab")
    .typeText(last_name, 'Kutcher')
    .pressKey("tab")
    .typeText(email,'elonmusk@gmail.com')
    .pressKey("tab")
    .typeText(mobile_no, '1234567890')
    
    .click(submit);
})