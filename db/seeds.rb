# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    users = User.create([
        {
            "email": "justin@b.com" ,
            "password": "secret" ,
            "name": "Justin" ,
            "address": "123 Breva Lane Monson Ma." ,
            "phone_number": "1-413-234-4444" 
        },
        {
            "email": "mike@b.com" ,
            "password": "secret" ,
            "name": "Mike" ,
            "address": "12 Cha Lane Mon Ma." ,
            "phone_number": "1-413-444-4444" 
        },
        {
            "email": "joe@b.com" ,
            "password": "secret" ,
            "name": "Joe" ,
            "address": "13 Awake Street Monson Ma.",
            "phone_number": "1-413-444-3544" 
        }
    ])
     products = Product.create([
         {
            "name": "Affogato",
            "description": "This is a term that literally means 'drowned'. It is the description of a shot of separately served espresso that is later poured over a the top of a scoop of vanilla ice cream or gelato. This beverage is usually served in a short drink glass and is a Italian desert favourite. Popular Affogatos include Vanilla Affogato, Mocha Affogato, and Peppermint Affogato.",
           
            "price": "$3.50"
        },
        {
            "name": "Americano",
            "description": "Also known as 'Lungo' or 'Long Black' and made by diluting 1-2 shots of espresso with hot water in order to approximate the texture, flavor and body of an American-style drip coffee. Said to have been originally devised as a sort of insult to Americans who wanted their Italian espresso diluted.",
           
            "price": "$5.50"
        },
         {
            "name": "Breve",
            "description": "A term in Italian that means short and is used to describe an espresso coffee drink made with a half-and-half light cream or semi-skim milk instead of full fat milk",
           
            "price": "$4.50"
        },
        {
            "name": "Cappuccino Scuro",
            "description": "(AKA Dry or Dark cappuccino) Cappuccino prepared with less milk than usual.",
           
            "price": "$3.00"
        },
        {
            "name": "Cappuccino",
            "description": "A ‘traditional morning heart starter’. Steamed foamed velvety milk poured over one shot (1) of coffee oil extract made from 12gm of freshly ground beans producing 38ml of essence. Finished by topping with foam and a sprinkle of chocolate powder. Served in a pre heated vitrified ceramic cup.",
           
            "price": "$2.50"
        },
        {
            "name": "Con panna",
            "description": " Like the beverage 'macchiato', but whipped cream is substituted for steamed milk.",
           
            "price": "$3.50"
        },
        {
            "name": "Cortado",
            "description": "means 'cut' in Spanish so the double shot espresso served in a demetesse glass supported with a metal handle is 'cut' with an equal part of hot milk, making it in between the size and strength of a macchiato and a cappuccino. It is popular in Spain and Portugal, as well as throughout Latin America and Cuba, where it is drunk in the afternoon. Variations include more froth on top than a traditional cortado and occasionally with different names such as Piccolo or Gibraltar. Thanks to Ryan Cerbus for the entry.",
           
            "price": "$3.00"
        },
        {
            "name": "Corretto",
            "description": "Espresso 'corrected' with a touch of grappa, cognac, sambuca, or other spirit.",
           
            "price": "$6.50"
        },
        {
            "name": "Bicerin",
            "description": "a traditional hot drink native to Turin, Italy, made of espresso, drinking chocolate and whole milk. Everybody I know who knows it learned about it from Carluccio's http://www.carluccios.com/",
           
            "price": "$3.00"
        },
        {
            "name": "Ethiopian Coffee",
            "description": "beans roasted in the presence of the drinkers immediately prior to brewing, very coarsely ground by hand in a mortar and pestle",
           
            "price": "$3.50"
        },
        {
            "name": "Frappe",
            "description": "Popular in parts of Europe and Latin America, especially during the summer months. Originally it was a cold espresso, but it has more recently been prepared by putting 1-2 teaspoons of instant coffee with sugar, water and ice. The drink is served in a long glass.this good types of coffee",
           
            "price": "$4.50"
        },
        {
            "name": "Vietnamese style coffee",
            "description": "A drink made by dripping hot water though a metal mesh, with the intense brew then poured over ice and sweetened, condensed milk. This process uses a lot more coffee grounds and is thus a lot slower than most kinds of brewing.this good types of coffee",
           
            "price": "$3.50"
        },
        {
            "name": "Turkish Coffee",
            "description": "Made by boiling finely ground coffee and water together to form a muddy, thick coffee mix. In fact, the strongest Turkish coffee can almost keep a spoon standing upright. It’s often made in what’s known as an Ibrik, a long-handled, open, brass or copper pot. It is then poured, unfiltered, into tiny Demitasse cups, with the fine grounds included. It’s then left to settle for a while before serving, with sugar and spices often added to the cup.this good types of coffee",
           
            "price": "$3.50"
        },
        {
            "name": "Flat White",
            "description": " “White Coffee” - ‘uncompromising taste’.Steamed microfroam milk poured through and under the espresso crème produced from one shot (1) of coffee extract made on 12gm of freshly ground coffee producing 38ml of essence. Served in a pre heated vitrified ceramic cup. A common espresso coffee order in Australia/New Zealand. Great for latte art!",
           
            "price": "$4.50"
        },
        {
            "name": "Hammerhead",
            "description": "A coffee drink only served in the USA. It is an American term for a shot of espresso in a coffee cup that is topped up with drip-filtered coffee. As Kris Rosvold explains in the comments: In Oregon, the hammerhead is usually known as a red eye and uses 2 shots of espresso topped up in a 16oz travel mug with drip coffee. It's also sometimes called a 'shot in the dark'.",
           
            "price": "$2.50"
        },
        {
            "name": "Macchiato",
            "description": "Meaning “stained” - Described as ‘strong, marked or stained’. A touch of steamed foamed milk added to a double shot of coffee extract made from 24gm of fresh ground beans producing 75ml of essence. Served in glass.",
           
            "price": "$2.50"
        },
        {
            "name": "Mazagran",
            "description": "A French drink composed of cold coffee and seltzer water. First created by the French soldiers in 1840 in the town of Argelia. A variation includes iced coffee made with maraschino.",
           
            "price": "$3.50"
        },
        {
            "name": "Quad",
            "description": " An espresso drink made with four shots of coffee.",
           
            "price": "$3.00"
        },
        {
            "name": "Ristretto",
            "description": "(Ristretto in Italian means 'restricted, shrunk or short') It is the richest and most concentrated espresso drink where less water but the same amount of coffee is used to make the beverage and creates a less bitter espresso. The extraction time is shortened producing as little as 3 oz of liquid per serving. Pure and intense espresso served in a demitasse cup.",
           
            "price": "$4.50"
        },
        {
            "name": "Short Black",
            "description": "A ‘pure intense Italian favourite with a biting crème head. Contains 75ml of pure double shot (2) coffee essence made from 24gm of fresh ground coffee beans. Traditionally served in glass and is referred to as Espresso by European customers.",
           
            "price": "$3.50"
        },
        {
            "name": "Viennese Coffee",
            "description": "Brewed black coffee of any roast or origin topped and served with whipped cream.",
           
            "price": "$1.50"
        },
        {
            "name": "Latte Macchiato",
            "description": " Steamed milk served in a tall glass rather than a cup that is “stained” by a shot of espresso coffee.",
           
            "price": "$3.50"
        },
        {
            "name": "Long Black",
            "description": "Often called the “American”. It is the ‘benchmark coffee without milk’. It is pure coffee made from one & one half shots of coffee extract made on 16gm of fresh ground beans producing 50ml of essence blended with steamed water. Served in a pre heated vitrified ceramic cup with the essence floated over the top of a cup filled with hot/boiling water. It is a standard espresso (Short Black) but lengthened by the addition of hot/boiling water.",
           
            "price": "$2.50"
        },
        {
            "name": "Lungo",
            "description": "An espresso made by purposely allowing more water to flow through the ground coffee than usual. (sometimes called an Americano or ‘long’).",
           
            "price": "$3.50"
        },
        {
            "name": "Doppio",
            "description": " Italian term for double. Double Espresso or twice the amount of coffee and twice the amount of water. Basically it describes two shots of espresso in one demitasse container.",
           
            "price": "$2.50"
        },
        {
            "name": "Espresso con Panna",
            "description": "American term where a shot is extracted longer for a bit of extra espresso. Tends to maximizes the caffeine but will mostly produce a more bitter cup.",
           
            "price": "$4"
        },
        {
            "name": "Espresso Romano",
            "description": "Espresso served with a lemon peel on the side. Whilst not a typical accompaniment in Italy it is commonly served with the espresso beverage in America",
           
            "price": "$3.55"
        }
        
    ])