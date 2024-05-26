
class Questions{
    constructor(q){
        this.q = q;
    }
}
class Choices extends Questions {
    constructor(q,c1,c2,c3,c4){
        super(q)
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4 ;
    }
}

class TrueAndFalse extends Questions {
    constructor(q,c){
        super(q)
        this.c = c;
    }
}
class Selection extends Questions {
    constructor(q,c1,c2,c3,c4){
        super(q)
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
    }
}

const arr = [
    // String
    new Choices("This is the first index in a string.","−1"," 1"," The size of the string minus one"," 0"),
    new Choices("This is the last index in a string."," 1"," 99"," 0"," The size of the string minus one"),
    new Choices("This will happen if you try to use an index that is out of range for a string."," A ValueError exception will occur"," The string will be erased and the program will continue to run"," Nothing—the invalid index will be ignored"," An IndexError exception will occur"),
    new Choices("This function returns the length of a string."," length"," size"," lengthof"," len"),
    new Choices("This operator determines whether one string is contained inside another string."," contains"," is_in"," =="," in"),
    new Choices(" This string method returns true if a string contains only alphabetic characters and is at least one character in length."," the alpha method"," the alphabetic method"," the isletters method"," the isalpha method"),
    new Choices(". This string method returns true if a string contains only numeric digits and is at least one character in length."," the digit method"," the numeric method"," the isnumber method"," the isdigit method"),
    new TrueAndFalse(" Once a string is created, it cannot be changed",true),
    new TrueAndFalse(". You can use the for loop to iterate over the individual characters in a string",true),
    new TrueAndFalse("The isupper method converts a string to all uppercase characters",false),
    new TrueAndFalse("The repetition operator (*) works with strings as well as with lists",true),
    new TrueAndFalse("When you call a string’s split method, the method divides the string into two substrings",false),
    // dict and set 
    new Choices("You can use the _________ operator to determine whether a key exists in a dictionary." ,"&"  ,"ˆ" ,"?","in"),
    new Choices("You use _________ to delete an element from a dictionary." ,"the remove method" ,"the erase method" ,"the delete method" ,"the del statement"),
    new Choices("The _________ function returns the number of elements in a dictionary:"," size()"," elements()"," count()"," len()"),
    new Choices("You can use _________ to create an empty dictionary."," ()"," []"," empty()","{}"),
    new Choices("The _________ method returns a randomly selected key-value pair from a dictionary."," pop()"," random()"," rand_pop()"," popitem()"),
    new Choices("The _________ method returns the value associated with a specified key and removes that key-value pair from the dictionary."  ,"random()" ,"popitem()" ," rand_pop()","pop()"),
    new Choices(".The _________ dictionary method returns the value associated with a specified key.If the key is not found, it returns a default value."," pop)("," key)("," value)("," get)("),
    new Choices(" The _________ method returns all of a dictionary’s keys and their associated values as a sequence of tuples."," keys_values)("," values)("," get)("," items)("),
    new Choices("The following function returns the number of elements in a set:","size)(","elements)(","count)","len)("),
    new Choices(". You can add one element to a set with this method."," append"," update"," merge"," add"),
    new Choices("You can add a group of elements to a set with this method."," append"," add"," merge"," update"),
    new Choices("This set method removes an element, but does not raise an exception if the element is not found.", "remove", "delete", "erase", "discard"),
    new Choices("This set method removes an element and raises an exception if the element is not found.", "discard", "delete", "erase", "remove"),
    new Choices("This operator can be used to find the union of two sets."," &"," -"," ˆ","|"),
    new Choices("This operator can be used to find the difference of two sets.","|","&","ˆ","-"),
    new Choices("This operator can be used to find the intersection of two sets.", "|", "&", "-", "ˆ"),
   new TrueAndFalse("The keys in a dictionary must be mutable objects." ,false),
   new TrueAndFalse(" Dictionaries are not sequences.", true),
   new TrueAndFalse(".A tuple can be a dictionary key.", true),
   new TrueAndFalse("A list can be a dictionary key.", false),
   new TrueAndFalse("The dictionary method popitem does not raise an exception if it is called on an empty dictionary.", false),
   new TrueAndFalse("The following statement creates an empty dictionary: mydct = {} ", true),
   new TrueAndFalse("The following statement creates an empty set: myset= ()", true),
   new TrueAndFalse("Sets store their elements in an unordered fashion.", true),
   new TrueAndFalse(".You can store duplicate elements in a set.", false),
   new TrueAndFalse("The remove method raises an exception if the specified element is not found in the set.", true),
   // list tuples
    new Choices("This term refers to an individual item in a list. "," bin"," cubbyhole"," slot"," element"),
    new Choices("This is a number that identifies an item in a list. ","element","bookmark","identifier","index"),
    new Choices("This is the first index in a list. "," −1"," 1"," The size of the list minus one","0"),
    new Choices("This is the last index in a list. "," 1"," 99"," 0"," The size of the list minus one"),
    new Choices("This will happen if you try to use an index that is out of range for a list. "," A ValueError exception will occur"," The list will be erased and the program will continue to run"," Nothing—the invalid index will be ignored"," An IndexError exception will occur "),
    new Choices("This function returns the length of a list. ","length","size","lengthof","len"),
    new Choices("When the * operator’s left operand is a list and its right operand is an integer, the operator becomes this. "," The multiplication operator"," The initialization operator"," Nothing—the operator does not support those types of operands"," The repetition operator"),
    new Choices("This list method adds an item to the end of an existing list. "," add"," add_to"," increase"," append"),
    new Choices("This removes an item at a specific index in a list. ", "the remove method", "the delete method", "the kill method", "the del statement"),
    new Choices(`Assume the following statement appears in a program :
                mylist = [] 
                Which of the following statements would you use to add the string 'Labrador' to the list at index 0?`,"mylist[0] = 'Labrador'","mylist.append('Labrador')","mylist.insert('Labrador', 0)","mylist.insert(0, 'Labrador')"),           
    new Choices("If you call the index method to locate an item in a list and the item is not found, this happens. ","An InvalidIndex exception is raised ","The method returns −1 ","Nothing happens The program continues running at the next statement","A ValueError exception is raised"),
    new Choices("This built-in function returns the highest value in a list. ","highest","greatest","best_of","max"),
    new Choices("This file object method returns a list containing the file’s contents. "," to_list"," getlist"," readline"," readlines"),
    new Choices("Which of the following statements creates a tuple?","values = [1,2,3,4]","values = {1,2,3,4}","values = (1)","values = (1,)"),
    new TrueAndFalse("Lists in Python are immutable.", false),
    new TrueAndFalse("Tuples in Python are immutable.", true),
    new TrueAndFalse("The del statement deletes an item at a specified index in a list.", true),
    new TrueAndFalse("Assume list1 references a list. After the following statement executes, list1 and list2 will reference two identical but separate lists in memory: list2 = list1", false),
    new TrueAndFalse("A file object’s writelines method automatically writes a newline ('\n') after writing each list item to the file. ",false),
    new TrueAndFalse(". You can use the + operator to concatenate two lists.", true),
    new TrueAndFalse("A list can be an element in another list.", true),
    new TrueAndFalse("You can remove an element from a tuple by calling the tuple’s remove method.", false),
    // q function
    new Choices("A group of statements that exist within a program for the purpose of performing a specific task is a(n) __________." ,"block" ,"parameter"  ,"expression","function"),
    new Choices("A design technique that helps to reduce the duplication of code within a program and is a benefit of using functions is __________."," divide and conquer"," debugging"," facilitation of teamwork"," code reuse"),
    new Choices("The first line of a function definition is known as the __________."," body"," introduction"," initialization"," header"),
    new Choices("You __________ a function to execute it."," define"," import"," export"," call"),
    new Choices("A design technique that programmers use to break down an algorithm into functions is known as __________."," code simplification"," code refactoring"," hierarchical subtasking"," top-down design"),
    new Choices("A __________ is a diagram that gives a visual representation of the relationships between functions in a program."," flowchart"," function relationship chart"," symbol chart"," hierarchy char"),
    new Choices("A __________ is a variable that is created inside a function."," global variable"," hidden variable"," none of the above; you cannot create a variable inside a function"," local variable"),
    new Choices("A(n) __________ is the part of a program in which a variable may be accessed."," declaration space"," area of visibility"," mode"," scope"),
    new Choices("A(n) __________ is a piece of data that is sent into a function."," parameter"," header"," packet"," argument"),
    new Choices("A(n) __________ is a special variable that receives a piece of data when a function is called."," argument"," header"," packet"," parameter"),
    new Choices("A variable that is visible to every function in a program file is a __________." ,"local variable" ,"universal variable" ,"program-wide variable" ,"global variable"),
    new Choices("When possible, you should avoid using __________ variables in a program." ,"local"  ,"reference" ,"parameter","global"),
    new Choices("This is a prewritten function that is built into a programming language."," standard function"," custom function"," cafeteria function"," library function"),
    new Choices("This standard library function returns a random integer within a specified range of values.", "random", "random_integer", "uniform", "randint"),
    new Choices("This standard library function returns a random floating-point number in the range of 0.0 up to 1.0 (but not including 1.0)."," randint"," random_integer"," uniform"," random"),
    new Choices("This standard library function returns a random floating-point number within a specified range of values." ,"random" ,"randint" ,"random_integer" ,"uniform"),
    new Choices("This statement causes a function to end and sends a value back to the part of the program that called the function.","end","send","exit","return"),
    new Choices("This is a design tool that describes the input, processing, and output of a function."," hierarchy chart"," datagram chart"," data processing chart"," IPO chart"),
    new Choices("This type of function returns either True or False."," Binary"," true_false"," logical"," Boolean"),
    new Choices("This is a math module function."," derivative"," factor"," differentiate"," sqrt"),
    new TrueAndFalse("The phrase “divide and conquer” means that all of the programmers on a team should be divided and work in isolation.",false),
    new TrueAndFalse("Functions make it easier for programmers to work in teams.",true),
    new TrueAndFalse(". Function names should be as short as possible",false),
    new TrueAndFalse("Calling a function and defining a function mean the same thing",false),
    new TrueAndFalse(". A flowchart shows the hierarchical relationships between functions in a program",false),
    new TrueAndFalse("A hierarchy chart does not show the steps that are taken inside a function",true),
    new TrueAndFalse("A statement in one function can access a local variable in another function",false),
    new TrueAndFalse("In Python, you cannot write functions that accept multiple arguments",false),
    new TrueAndFalse("In Python, you can specify which parameter an argument should be passed into a function cal",true),
    new TrueAndFalse("You cannot have both keyword arguments and non-keyword arguments in a function call",false),
    new TrueAndFalse("Some library functions are built into the Python interpreter",true),
    new TrueAndFalse("You do not need to have an import statement in a program to use the functions in the random module.",false),
    new TrueAndFalse("Complex mathematical expressions can sometimes be simplified by breaking out part of the expression and putting it in a function",true),
    new TrueAndFalse("A function in Python can return more than one value",true),
    new TrueAndFalse("IPO charts provide only brief descriptions of a function’s input, processing, and output, but do not show the specific steps taken in a function",true),
]



