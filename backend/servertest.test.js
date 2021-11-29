import { ticketParser, fetchData } from './parsingCalls.js';


//Testing the error case when the token provided is wrong.
test("ParsingTest", () => {
    let parser = new ticketParser()
    let input = {requests : [{name : "Arda", age: 12}, {name: "Ege", age : 22}, {name: "Nina", age:23}]}
    let output = parser.parseAll(input)
    expect(output).toStrictEqual({1:{name : "Arda", age: 12}, 2: {name: "Ege", age : 22}, 3: {name: "Nina", age:23}});
});

//Sadly, test for data fetching are fairly hard with only jest, so I did not do that here.


