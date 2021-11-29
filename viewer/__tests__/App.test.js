import {ticketGroup, isAvaliable} from '../src/groups.js'

//Not trying the zero test case- that already is dealt with the error thrown in the App.js file.
test('ticket_group_test_one', () => {
  let input = {tickets : {1: "arda", 2: "berk", 3:"kenan"}}
  let output = [["1","2","3"]]
  expect(ticketGroup(input)).toStrictEqual(output)

}) 

//test for case longer than 25
test('ticket_group_test_two', () => {
  let input = {tickets : {1: "arda", 2: "berk", 3:"kenan", 4:"a", 5: "berk", 6:"kenan", 7:"a", 8: "berk", 9:"kenan", 10:"a"
  , 11: "berk", 12:"kenan", 13:"a", 14: "berk", 15:"kenan", 16:"a", 17: "berk", 18:"kenan", 19:"a", 20: "berk", 21:"kenan", 22:"a"
  , 23: "berk", 24:"kenan", 25:"a", 26: "berk", 27:"kenan", 28:"a", 29: "berk", 30:"kenan", 31:"a", 32: "berk", 33:"kenan", 34:"a"}} 
  let trial = ticketGroup(input)
  expect(trial).toStrictEqual([["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],
  ["26","27","28","29","30","31","32","33","34"]])
})

//null input
test("is_avaliable_one", () => {
  let input = null
  let input2 = "Date"
  expect(isAvaliable(input2, input)).toStrictEqual("Date is not avaliable")

})

//non-null input 
test("is_avaliable_two", () => {
  let input = "Arda Akman"
  let input2 = "Name"
  expect(isAvaliable(input2, input)).toStrictEqual("Arda Akman")

})
