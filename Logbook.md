# Vecka 16
## Måndag 17/4-23
Jag började med att sätta upp html och css, försökte med sass men det fungerade inte så gjorde bara vanlig css för nu. Försökte med att fixa MongoDB men listade inte ut hur.

## Tisdag 18/4-23
Dagen började segt men tillslut så kollade jag igenom ett gammalt case och började sätta upp mongoDB databas och cluster, det tog lite tid för fick lite errors som var lite sega att reda ut men tillslut lyckades jag och satte upp en .env fil.

## Onsdag 19/4-23
Jag har kopplat appen till databasen. Fixat Sassen och gjort loginsidans css och börjat med sidebaren. 

## Torsdag 20/4-23
Fortsatt med anslutningen och env filen

## Fredag 21/4-23 
*inget internet*

# Vecka 17
## Måndag 24/4-23
Hade problem med databasen i början, lyckades lösa. 
Gjort tutorialSchema, gjort controllers, startade med react

## Tisdag 25/4-23
Fortsatt med react.

## resten av veckan
försökte med authentication men misslyckades

# Vecka 18
## Tisdag 02/05-23
Lyckades fixa ett fel jag hade, tog hjälp av chatgpt men såg ingen skillnad på koden som jag fick och koden som jag hade, men det löste sig...
Fortsatte med autentisering

## Onsdag 03/05-23
gjort klart autentiseringen, försökt fixa med sass och fonts, gick sådär. 
påbörjat att kunna ladda upp bilder

## Torsdag 04/05-23
Gjort massa sass idag

## Fredag 05/05-23
Försökt fixa så det går att ladda upp bilder, dock är en grej undefined som jag inte lyckas lösa

# Vecka 19
## Måndag 08/05-23
Lyckades med att ladda upp bilder 

## Tisdag 09/05-23
Fixade så efter man loggat in så redirectas man till home, tog lite tid innan jag hittade att useHistory hade bytts ut till useNavigate, gjort så det reloadas när man loggar ut så att man inte kan deleta saker som utloggad


## Onsdag 10/05-23
Kämpat som tusan med linode men det är ett error efter det andra, ibland går det bra en stund men sen sitter man fast, så nu sitter jag fast igen, får se om anders kan hjälpa mig imorgon.

## Torsdag 11/05-23
Lyckades lösa linode, nu ska jag forsätta kämpa med att få till postedBy vilket är svårt för att jag inte la till det i början. 

## Måndag 15/05-23
Kämpade med postedBy sen bestämde jag mig för att byta ut allt från require till import, vilket skapade massa fel, men när jag hade lyckats lösa alla fel så kom jag mycket närmre i postedby, har lite fel nu att mina posts inte visas vilket jag inte förstår vart det kommer ifrån.

## Tisdag 16/05-23
* halvtids redovisning
PostedBy finns nu i databasen, har fel med authorisation, att den tycker inte man är tillåten att se inlägg trots att det är ens egna (felet har med requireAuth.js)

## Onsdag 17/05-23
Löst authorisation felet, jag har börjat med Userpagen som också hade ett authorisation fel som jag nu löste, så nu är det att tutorial är undefined i userPageCom som jag inte lyckas hitta felet på.

## Torsdag 18/05-23
Löst problemet med userpage och nu är userpage uppe och man kan se sina egna och ta bort dom där. Lagt till difficulty i schema och fått ut det på sidan, nästa steg blir att fixa en sorterings funktion.

## Fredag 19/05-23
Fixade någon slags sort som jag får ändra sedan så den fungerar som jag vill

## Söndag 21/05-23
Försökte fixa så man kan gå in på en tutorial

## Måndag 22/05-23
Fastnade på likes 

## Tisdag 23/05-23
Kommit närmre i liksen, en konsoll log resultat visar null, vilket ska lösas på något sätt.

## Onsdag 24/05-23
Likes fungerar, gjort så man kan lägga till fler steps i en tutorial, nu håller jag på och försöka göra så man kan gå in på en tutorial