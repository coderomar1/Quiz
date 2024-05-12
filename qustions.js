
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
    //mid
    new TrueAndFalse("A team of project must work individually during the project times",false),
    new TrueAndFalse("Sprints are usually long time normally",false),
    new Choices("which one is not a correct Agile Principles","Team usually meets daily","Build projects around motivated individuals","Project architectures, requirements, and designs can change over the project timeline","The art of minimize the amount of work not done"),
    new Choices("Which of the following frameworks is best for early project delivery","They are all on the same level","Crystal Method","XP","Scrum"),
    new Choices("On scrum, we are starting from","Sprint backlog","Sprint backlog","Time","Sprint goal","Product backlog"),
    new TrueAndFalse("Agile is a Silver Bullet",true),
    new Choices("The most important part of the steps of Agile methodology is","Sprint backlog","Sprint goal","product backlog","Sprint"),
    new Choices("The next step after Sprint is","sprint backlog","time","sprint goal","product increment"),
    new TrueAndFalse("in agile Method, We take care of delivering a whole project at once on a specified time basis",false),
    new Choices("A list of tasks identified by the Scrum team to be completed during the Scrum sprint","Product increment","Product backlog","Sprint goal","Sprint backlog"),
    new TrueAndFalse("One of the advantages of the ِagile model is that it keeps the product owner away from changes and discussions during project time",false),
    new Choices("it is the summation of overall backlog items finished during the Sprint","Product backlog","Sprint goal","All of the above","Product increment"),
    new TrueAndFalse("Team members are not allowed to participate in restemate the project",false),
    new Choices("In Agile, requirements are represented by","Team works","User Stories","Product Owner","Product Backlog"),
    new TrueAndFalse("n agile, we work on a software over comprehensive documentation",true),
    new TrueAndFalse("Agile is concerned with the early and continuous delivery of valuable",true),
    new Choices("Definition of Done mean","Code is run and review","The test of project was passed","The project have audited by a third party expert","all of the above"),
    new TrueAndFalse("Agile model , A team can change project requirements",true),
    new TrueAndFalse("Extreme programming is one of Agile Frameworks",true),
    new Choices("A brief statement (one and two sentences) outlining the objective of the sprint","Product backlog","Product increment","all of the above","Sprint goal"),
    new TrueAndFalse("Scrum is not able to response on many questions about a project inefficiency",false),
    new Choices("the step that is before Sprint is","product increment","time","sprint goal","sprint backlog"),
    new Choices("in Agile Who corresponds to Quality Assurance in the meaning, is ","Product Owner","Product Backlog","Cross-functional team","Scrum Master"),
    // quiz
    new Choices("The Product Backlog is ordered by: ","Risk, where safer items are at the top, and riskier items are at the bottom","Size, where small items are at the top and large items are at the bottom","Items are randomly arranged ","Whatever is deemed most appropriate by the Product Owner"),
    new Choices("Scrum elements consist of :"," Developers , Scrum master , Sprint backlog"," backlog , product Backlog , Developers"," Not all of the above","Roles , Artifacts and Meeting"),
    new Choices("Scrum is a newer way of doing things to address complex problems. It is a newer way because","It is closely associated with emerging technologies","It offers new terminology for traditional practices","It is easier to master than the traditional way","It increases the opportunity to control risk and optimizes the predictability of progress"),
    new Choices("What is the main reason for the Scrum Master to be at the Daily Scrum?","To write down any changes to the Sprint Backlog, including adding new items, and tracking progress onthe burn-down","To gather status and progress information to report to management","To make sure every team member answers the three questions","They only need to ensure the Developers have a Daily Scrum"),
    new Choices("What do you mean by DoD in Agile methodology ?","DoD stands for data of Done","DoD stands for data of Definition","DoD stands fo Department of Defense","DoD stands for Definition of Done"),
    new Choices("When is a Sprint over?","When the Product Owner says it is done","When all the tasks are completed","When all Product Backlog items meet their definition of “Done","When the time-box expires"),
    new Choices("Who has the final say on the order of the Product Backlog","The Stakeholders","The Developers","The Scrum Master","The Product Owner"),
    new Choices("During a Sprint, a Developer determines that the Scrum Team will not be able to complete the items in their forecast. Who should be present to review and adjust the Product Backlog items selected?","The Product Owner and all stakeholders","The Developers.","The Scrum Master, the project manager","The Product Owner and the Developers"),
    new Choices("Which output from Sprint Planning provides the Development Team with a target and overarching direction for the Sprint?","The release plan","The Sprint Backlog","Sprint Review minutes","The Sprint Goal"),
    new Choices("Who should know the most about the progress toward a business objective or a release, and be able to explain thealternatives most clearly?"," The Developers"," The Scrum Master"," The Project Manager"," The Product Owner"),
    new Choices("Scrum effectively limits the risk of unknowingly doing something wrong by","all of the above","Having a detailed and extensive risk management plan","Having multiple checkpoints and a thorough review by senior management at those checkpoints","Using short iterations called sprints"),
    new Choices("How much time is required after a Sprint to prepare for the next Sprint?","Enough time for the Development team to finish the testing from the last Sprint","All of the above are allowed depending on the situation","Enough time for the requirements for the next Sprint to be determined and documented","A new Sprint starts immediately following the end of the previous Sprint"),
    new Choices("Which of the following is required by Scrum?","Release planning","Members must be stand up at the Daily Scrum","Sprint Retrospective","All of the above"),
    new Choices("the risk(s) in Scrum is/are","Sprint","Team","Budget","all the above"),
    new Choices("What does it mean to say that an event has a timebox","The event must be happen by a given time","The event must happen at a set time","The event can take a least a minimum amount of time","The event can take no more than a maximum amount of time"),
    new Choices("The timebox for the Sprint Review is","As long as needed","2 hours","4 hours and longer as needed","4 hours for a monthly Sprint"),
    new Choices("Who is required to attend the Daily Scrum?","The Developers and Product Owner.","The Developers and Scrum Master","The Scrum Master and Product Owner","The Developers"),
    new Choices("The person who constantly communicates with stakeholders","Manager","Product Owner","Developers Team","Scrum Master"),
    new Choices("Which statement best describes a Product Owner's responsibility?","Managing the project and ensuring that the work meets the commitments to the stakeholders","Directing the Developers","Keep stakeholders from distracting the Developers","Optimizing the value of the work the Scrum Team does"),
    new Choices("In agile , meeting steps are as follows","Spring Planning Meeting ,Daily Scrum ,Sprint Retrospective and Spring Review","Spring Planning Meeting ,Spring Review and Sprint Retrospective","Spring Planning Meeting ,Daily Scrum , Spring Review, Daily Scrum","Spring Planning Meeting , Daily Scrum ,Daily Scrum , Spring Review and Sprint Retrospective"),
]




