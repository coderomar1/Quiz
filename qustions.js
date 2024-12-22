
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
    new Choices("It is an object attribute that allows the user to understand how to use it such as buttons that gives a clue that they can be pushed or clicked"/* <--Question */,"Feedback","Constraints","Consistency","Affordance"),
    
    new Choices(" The object attribute that allows the user to understand the how to use it such as the scroll bar which indicates that can be scrolled up and down","Feedback","Consistency","Constraints","Affordance"),
    new TrueAndFalse("He user-entered approaches take the user's feedback at the beginning of the design process only",false),
    new TrueAndFalse("satisfaction was not included in early usability standards (1998)-ISO9241",false),
    new TrueAndFalse("cultural differences is not important for products intended for a diverse range of user groups from different countries",false),
    new TrueAndFalse("cultural differences is also an important particularly for products intended for a diverse range of user groups from different countries",true),
    new Choices("it refers how to good a design is at doing what it is supposed to do","Safety","Learnability","Utility","Effectiveness"),
    new TrueAndFalse("involving users in the design process minimizes change resistance and rejection",true),
    new TrueAndFalse("the fact that many actual products have become services that cloud be easily changed is considered a driver of the increasing importance of UX design",true),
    
    //mid 2 
    new TrueAndFalse("High-fidelity prototypes are resource-intensive to develope? ",true),
    new TrueAndFalse("Expressiveness criterion ensures clear and complete understanding of the problem space by the development teams?",true),
    new TrueAndFalse("claims are new statement of truth made about something, usually when the statement has yet to be verified?",true),
    new Choices("During the 'Define' stage, what is created to represent concise descriptions of design problems? ","Prototypes " ,"Budget reports","Budget analysis ","Problem statements"),
    new TrueAndFalse("High-fidelity prototypes do not look very much like the final product, nor do they provide the same functionality?",false),
    new Choices("Design thinking involves ongoing experimentation, which includes: ","Administrative tasks ","Budget analysis ","Budget reports","Sketching, prototyping, testing "),
    new TrueAndFalse("One of the benefits of conceptualizing the design space is that it allows the team to explore a range of different ideas to address the problems identified?",true),
    new TrueAndFalse("Prototype does not clarify the vague requirements? ",false),
    new TrueAndFalse("Ideation in design thinking involves generating as few ideas as possible to maintain focus? ",false),
    new Choices("What is another term for innovative problem-solving in the context of thinking schemas? ","Conventional problem-solving","Problem statements","Budget-focused thinking ","Thinking outside of the box "),
    new Choices("It is a creative process where designers generate ideas in sessions such as brainstorming, worst possible idea? ","Empathize ","Define ","Prototype ","Ideate "),
    new TrueAndFalse("The evaluation channel is located between the task and solution space.",false),
    new Choices("The fidelity of the prototype, meaning its level of detail: low-fidelity or high-fidelity. What aspect (quality) are we describing?","Interactivity ","Representation ","Evolution ","Precision "),
    new TrueAndFalse("Command line interfaces were invented to overcome the physical constraints of a computer display",false),
    new TrueAndFalse("Low-fidelity prototype tend to be simple, cheap, and quick to produce",true),
    new TrueAndFalse("proof of concept is the final outcome of the design process",false),
    new TrueAndFalse("Commands are assumed to be easier to learn and remember than icons",false),
    new TrueAndFalse("One of the advantages of low-fidelity prototype is that it enables the evaluation of multiple design concepts",true),
    new TrueAndFalse("Command line interfaces are considered efficient, precise, and fast",true),
    new Choices("A draft version of a design before the final version exists (Choose the best choice)","Alternative design ","Evaluation","Draft design ","Prototype "),
    new TrueAndFalse("Change the design on-the-fly is a key characteristic of high-fidelity prototype",false),
    new TrueAndFalse("Low-fidelity prototype is commonly used as marketing and sales tool ",false),
    new TrueAndFalse("The user-centered approaches take the user's feedback at the beginning of the design process only",false),
    new Choices("OFE is an online online contribution technique and stands for","Online Forum Exchange","Open Forum Exchange","Order For Engagement","Online Feedback Exchange"),
    new Choices("What is the primary focus of design thinking?","Budget constraints","Budget-focused thinking ","Technical specifications","Understanding users and redefining problems"),
    new TrueAndFalse("Involving users in the design process minimizes change resistance and rejection",true)
];



