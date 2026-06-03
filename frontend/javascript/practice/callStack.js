function addThree(a){
    return function addTwo(b){
        return function addOne(c){
            return a+b+c;
        };
    };
};
console.log(addThree(1)(2)(3))

/* Step by Step

1. Context Created
~ GEC -> this

2. Memory Phase
~ addThree -> function definition

3. Execution Phase

~ console.log(addThree(1)(2)(3))

~ addThree(1) ->
    ~3.1 New Execution Context
        ~ [New Variable Environment + Execution Thread]

    ~3.2 Memory Phase
        ~ a -> undefined

    ~3.3 Execution Phase
        ~ a <- 1
        ~ return function addTwo(b){...}

        ~ Closure formed:
            a = 1

    ~3.4 Deletion of Context
        ~ Context removed from Call Stack
        ~ Closure survives because returned function still needs 'a'


~ Returned Function(2) -> addTwo(2)

    ~3.5 New Execution Context
        ~ [New Variable Environment + Execution Thread]

    ~3.6 Memory Phase
        ~ b -> undefined

    ~3.7 Execution Phase
        ~ b <- 2
        ~ return function addOne(c){...}

        ~ Closure formed:
            a = 1
            b = 2

    ~3.8 Deletion of Context
        ~ Context removed from Call Stack
        ~ Closure survives because returned function still needs 'a' and 'b'


~ Returned Function(3) -> addOne(3)

    ~3.9 New Execution Context
        ~ [New Variable Environment + Execution Thread]

    ~3.10 Memory Phase
        ~ c -> undefined

    ~3.11 Execution Phase
        ~ c <- 3

        ~ Evaluate:
            a + b + c
            1 + 2 + 3

        ~ return 6

    ~3.12 Deletion of Context


~ console.log(6)

Output:
6

*/

/*
---------------------------------------Call Stack------------------------------
┌─────────────────────┐
│ Global Context      │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ addThree(1)         │
│ a = 1               │
└─────────┬───────────┘
          │ returns addTwo
          ▼
┌─────────────────────┐
│ addTwo(2)           │
│ b = 2               │
│ Closure: a = 1      │
└─────────┬───────────┘
          │ returns addOne
          ▼
┌─────────────────────┐
│ addOne(3)           │
│ c = 3               │
│ Closure: a = 1      │
│ Closure: b = 2      │
└─────────┬───────────┘
          │
          ▼
        return 6
*/
