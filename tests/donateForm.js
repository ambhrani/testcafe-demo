 import { Selector } from 'testcafe';

//const donate_form = Selector('#donate-hero-form');
//const hero_donate_now = Selector('[id=#hero-donate-now]');
//const custom_amount = Selector('input[id="#customAmount"]');
const form_donate_now = Selector("button[id=form-donate-now]");
const first_name = Selector('input[id=firstName]');
const last_name = Selector('input[id=lastName]');
const email = Selector('input[id=email]');
const mobile_no = Selector('input[id=mobileNo]');
//const select_country = Selector('div.nthchild(2)');
const nationality = Selector('input[id=nationality]');
const address = Selector('input[id=address]');
const postal_code = Selector('input[id=postalCode]');
const popup_donate_now = Selector('button[id=popup-donate-now]');

fixture `donate`
 .page('www.digitaldaana.org');

 test('DonateTest', async t =>{
     await t
     .click(form_donate_now)
     .typeText(first_name,'Kim')
     .typeText(last_name, 'Taehyung')
     .typeText(email,'xyz@ymail.com')
     .typeText(mobile_no,'1234567890')
     .typeText(nationality,'Indian')
     .typeText(address,'bangalore')
     .typeText(postal_code,'560064')
     .click(popup_donate_now)
 })