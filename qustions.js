
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
        this.c4 = c4;
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
 // Mid 1
    new TrueAndFalse("Emotions does not effect the business?",false),
    new TrueAndFalse("One of the reasons that makes UX design important is that many actual products have become services that could be easily changed?",true),
    new TrueAndFalse("Understanding people plays a good rule in learning how to design interactive products that provide good UX or match a user's needs?",true),
    new Choices("Designing functions that invite action and are easily understood is related to which design principle?"/* <--Question */,"Feedback ","Constraints","Consistency","Visibility"),
    new Choices("It refers to how easy a product is to remember how to use, once learned?"/* <--Question */,"Efficiency","Effiectiveness","Learnability","Memorability"),
    new Choices("One-off actions that can be performed infrequently or several times a day which the user never tires of doing?","User actions","Clues","User interactions","Micro-Interaction"),
    new TrueAndFalse("In e-commerce websites, adding items to the user’s basket without informing the user is considered a good usability technique as the user can de-select the items at the check out page?",false),
    new Choices("Amazon one-click option is a good example of the:"/* <--Question */,"Safety goal","Effiectiveness goal","Learnability goal","Efficiency goal"),
    new TrueAndFalse("Using colors only is sufficient particularly when developing for people with color blindness?",false),
    new Choices("pop-up tutorials is an example of:"/* <--Question */,"Safety","Effiectiveness","Efficiency","Learnability"),
    new TrueAndFalse("Satisfaction was included in early usability standards (1998) -ISO 9241 ?",true),
    new TrueAndFalse("Children have the same expectations as adults about how they want to learn or use a system?",false),
    new Choices("A good measurement is not to place delete/quit next to save command on a menu. This point is considered an example of which of the following usability goals?"/* <--Question */,"Effiectiveness","Learnability","Utility","Safety"),
    new TrueAndFalse("Design principles are generalizable abstractions intended to orient designers toward thinking about different aspects of their designs?",true),
    new TrueAndFalse("Learning more about people and what they do can reveal incorrect assumptions that designers may have about particular user groups and what they need?",true),
    new Choices("The principle of making it clear to the user what action has been taken and what has been accomplished"/* <--Question */,"Affordance","Consistency","Constraints","Feedback"),
    new TrueAndFalse("Dix's s Hierarchy of User Interfaces includes five layers (levels)",false),
    new TrueAndFalse("UX aspects includes subjective qualities and focuses on assessing how useful or productive a system is",false),
    new Choices("Limiting the range of interaction possibilities for the user to simplify the interface and guide the user to the appropriate next action"/* <--Question */,"Feedback","Consistency","Affordance","Constraints"),
    new TrueAndFalse("Usability refers to ensuring that interactive products are easy to learn,effective to use, and enjoyable from the user's perspective",true),
    new Choices("It refers to the way a design supports users in carrying out their tasks."/* <--Question */,"Safety","Effectiveness","Learnability","Efficiency"),
    new Choices("It is an object attribute that allows the user to understand how to use it such as buttons that gives a clue that they can be pushed or clicked"/* <--Question */,"Feedback","Feedback","Consistency","Affordance")
];



