var tigger = {character: "Tigger"};
var pooh = {character: "Winnie the Pooh" };
var piglet = {character: "Piglet"};
var bees = {character: "Bees"}
var owl = {character: "Owl"}
var robin = {character: "Christopher Robin"}
var gopher = {character: "Gopher"}
var rabbit = {character: "Rabbit"}
var kanga = {character: "Kanga"}
var eeyone = {character: "Eeyore"}
var heffalumps = {character: "Heffaumps"}

tigger.north = pooh;

pooh.south = tigger;
pooh.east = bees
pooh.north = robin
tigger.nort.west = piglet;

piglet.east = tigger.north;
piglet.north = owl

piglet.north.east = robin
owl.south = piglet

bees.west = pooh
bees.north = rabbit

rabbit.west = robin
rabbit.south = pooh.east
rabbit.east = gopher

rabbit.east.west = rabbit

robin.west = owl
robin.east = rabbit
robin.south = pooh
robin.north = kanga

kanga.south = robin
kanga.north = eeyone

kanga.north.south = kanga
kanga.north.east = heffalumps

heffalumps.west = eeyone
