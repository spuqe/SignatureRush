# Petitions Spammer

This is a petition spammer designed for known petition sites. However, please note that you must be the creator of the petition, and your petition must not require email verification.

Original gist I made: https://gist.github.com/spuqe/60392b17b5535d8da53a1367b0ce8295

## Usage

**DISCLAIMER**: YOU NEED TO BE THE CREATOR OF THE PETITION AND YOUR PETITION MUST NOT REQUIRE EMAIL VERIFICATION

### Finding your AUTHTOKEN

1. Go to your petition page.
2. Click F12 to open developer tools.
3. Click "Manage petition."
4. Select "Add signature."
5. Add a random signature.
6. Find the network tab in developer tools.
7. Locate the web request made when you added the signature.
8. Look for "AUTHTOKEN" within the request and copy it.

### Finding your petition_ID

1. Visit your petition page.
2. Click F12 to open developer tools.
3. Click "Edit petition."
4. Find the network tab in developer tools.
5. Look for the "edit_petition_content" request.
6. Copy the petition_ID.

![image](https://github.com/spuqe/petitions-spammer/assets/47760072/f28b9b4c-82ed-44fa-ad2e-f274c9c52cea)

### What's Next?

1. First, make sure to add some names and locations to the following text files: `firstNames.txt`, `lastNames.txt`, and `locations.txt`.
2. Start botting!

## Sites Vulnerable

Below are the vulnerable petition sites:

* aredaonline.com
* onlinepeticija.com
* peticiq.com
* petitions.net
* petitions.nz
* petitiononline.uk
* peticiones.net
* peticion.es
* peticiones.co
* peticiones.pe
* peticiones.mx
* peticiones.cl
* peticiones.ar
* fa.petitions.net
* ka.petitions.net
* atzuma.net
* hi.petitions.net
* petities.com
* petisionline.com
* is.petitions.net
* petizioni.com
* ja.petitions.net
* peticions.cat
* zh.petitions.net
* ko.petitions.net
* gr.petitions.net
* peticijeonline.com
* peticijas.com
* peticijos.com
* peticijaonline.com
* ms.petitions.net
* opprop.net
* peticao.online
* peticoes.pt
* petycjeonline.com
* petitionenligne.net
* petitionenligne.com
* petitionenligne.be
* petitionenligne.fr
* petitionenligne.re
* petitionenligne.ch
* petitieonline.com
* skrivunder.com
* petitionen.com
* peticije.online
* peticie.com
* peticija.online
* adressit.com
* tl.petitions.net
* skrivunder.net
* th.petitions.net
* imzakampanyasi.net
* petice.com
* ua.petitions.net
* peticiok.com
* ru.petitions.net
* vi.petitions.net
* petitsioon.com
* adressit.com

## ToDo

Future enhancements may include adding email, phone number, and commenting capabilities.
