
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
    constructor(num,q,c1,c2,c3,c4){
        super(q)
        this.num = num;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
    }
 
}

const arr = [
    Choices("What is a drawback of Flutter that might lead you to choose another solution?","Non-native looking application UI","Large application footprint	","A relatively unproven framework and language","All of the above"),
    Choices("What are the features of Flutter?","Fast development","Huge widget catalog	","High-performance application ","All of the above"),
    Choices("What is Flutter?","It is DBMS toolkit","It is an Open-source web development framework","None of the above","It is an Open-source UI toolkit"),
    Choices("Which function will return the widgets attached to the screen as a root of the widget tree to be rendered on screen?","main()","container()","root()","runApp() "),
    Choices("Which component allows us to specify the distance between widgets on the screen?","SafeArea","table","AppBar","SizedBox"),
    Choices("Which of the following is used to load images from the flutter project’s assets?","Image","Image.file","Image.memory","Image.asset"),
    TrueAndFalse("Flutter supports desktop application development.",true),
    Choices("What type of Flutter animation allows you to represent real-world behavior?","Maths-based","Graph-based","Sim-based","Physics-based"),
    Selection("Which widget type allows you to modify its appearance dynamically according to user input?","Stateless widget","State widget","widget","Stateful widget"),
    TrueAndFalse("an experienced Flutter developer doesn't need to know platform native languages or tools to build apps.",false),
    Choices("What are the type of tests, that we can perform in flutter?","Unit test","Widget test","Integration test","All of the above"),
    Choices("A sequence of asynchronous Flutter events is known as a:","Flow","Current","Series","Stream"),
    Choices("Access to a cloud database through Flutter is available through which service?","SQLite","NOSQL","MYSQL","Firebase Database"),
    Choices("Who developed the Flutter Framework and continues to maintain it today?","Facebook","Microsoft","Oracle","Google"),
    TrueAndFalse("Flutter boasts improved runtime performance over most application frameworks.",true),
    Choices("How many types of widgets are there in Flutter?","4","6","8+","2"),
    Choices("Choose the best editors for Flutter app development.","VS Code","Sublime Text","Android Studio","All of the above"),
    Choices("What is the key configuration file used when building a Flutter project?","pubspec.xml","config.html","root.xml","pubspec.yaml"),
    TrueAndFalse("A sequence of asynchronous events is often referred to as a stream",true),
    Choices("The most important properties of the Image widget are","width, double","height, double","image, ImageProvider","all of the above"),
    TrueAndFalse("Flutter teams are inherently more difficult to manage because the framework is so new",false),
    Choices("What command would you run to verify your Flutter install and ensure your environment is set up correctly?","Flutter run","Flutter build","Flutter help","Flutter doctor"),
    Choices("What element is used as an identifier for components when programming in Flutter?","Widgets","Elements","Serial","Keys"),
    Choices("When building for iOS, Flutter is restricted to an __ compilation strategy","JIT (Just-in-time)","Transcompilation","Recompilation","AOT (ahead-of-time)"),
    Choices("Unlike other programming languages Dart doesn’t support.","classes","interfaces","object-oriented","arrays"),
    Choices("What language is Flutter's rendering engine primarily written in?","Kotlin","Dart","Java","C++"),
    Choices("What widget would you use for repeating content in Flutter?","ExpandedView","Stack","ArrayView","ListView"),
    Choices("Which programming language is used to build Flutter applications?","Kotlin","Java","Go","Dart"),
    Choices("What type of test can examine your code as a complete system?","Unit tests","Widget tests","All of the above","Integration Tests"),
    Choices("Which release mode will not contain any debugging data when run?","Profile","Debug","Test","Release"),
    Choices("Which of the following option is used to represent a collection of objects in Dart?","String","Numbers","Booleans","Lists and Maps"),
    Choices("What are some key advantages of Flutter over alternate frameworks?", "Rapid cross-platform application development and debugging tools", "Future-proofed technologies and UI resources", "Strong supporting tools for application development and launch", "All of the above"),
   Choices("What command would you use to compile your Flutter app in release mode?", "Flutter --release", "Flutter build --release", "Flutter run $release", "Flutter run --release"),
   Choices("What does SDK stand for?", "Software Data kit", "Software Database kit", "None of the above", "Software Development kit"),
   Choices("A widget that allows us to refresh the screen is called a _____", "Stateless widgets", "Statebuild widget", "All of the abovet", "Stateful widget"),
   Choices("Pubspec.yaml file does not contain?", "Project general settings", "Project assets", "Project dependencies", "Project language"),
   Choices("Which widget is used to create a text input field in Flutter?", "Inputfield", "Text", "Textinput", "Textfiled"),
   Choices("Which widget is used to display an image in Flutter?", "ImageField", "ImageWidget", "ImageView", "Image"),
   Choices("What is the purpose of the Navigator widget in Flutter?",  "To create new widget",  "To provide a set of material design widgets",  "To manage the state of the application ",  "To provide a layout for the application's pages"),
   TrueAndFalse("Everything is a widget in Flutter.",true),
   TrueAndFalse("Three types of widgets are three Flutter.",false),
   TrueAndFalse("Java language is used to build Flutter applications.",false),
   TrueAndFalse("A sequence of asynchronous events is often referred to as a stream.",true),
   TrueAndFalse("SafeArea component allows us to specify the distance between widgets on the screen",false),
   TrueAndFalse("Does flutter support desktop application development?",true),
   TrueAndFalse("Flutter is not a language, it is a SDK",true),
   TrueAndFalse("runApp() function is responsible for starting the program.",false),
   TrueAndFalse("When you build the flutter app the first time, does it will take a longer time.",true),
   TrueAndFalse("Flutter is close and open-source.",false),
   TrueAndFalse("Flutter use one programming language and a single codebase",true),
   Choices("Which of the following is used to develop native hybrid apps from a single codebase?", "Flutter", "React Native", "Keras", "Both Flutter and React Native"),
   Choices("Access to local database through Flutter is available through which service?", "NOSQL", "Firebase Database", "MYSQL", "SQLite"),
   Choices("Dart doesn't have the ......... keyword.", "classes", "object-oriented", "arrays","interfaces" ),
    Choices("Flutter is developed by which company?", "Mac", "Windows", "None of above", "Google"),
   Choices("Which function is responsible for starting the program?", "run()", "flutter()", "runApp()", "main()"),
   Choices("Which of the following takes more time to compile and update the app?", "Hot Reload",  "Depends on Compiler", "Cold Reload","Hot Restart"),
    Choices("What is the purpose of the runApp() function in Flutter?", "To define the layout of the user interface", "To handle user input", "To manage the state of the application", "To start the Flutter application"),
   TrueAndFalse("Hot Reload takes more time to compile and update the app. ---",false),
   TrueAndFalse("pubspec.ymal file contains project language.",false),
   TrueAndFalse("Flutter is not language,it is a SDK",true),
   TrueAndFalse("Cross-platform Development is the advantages of Flutter.",true),
   TrueAndFalse("The examples of the statefull widget are(Text,Row,Column).",false),
   TrueAndFalse("An experienced Fluttter developer doesn't need to know platform native languages or tools to build apps",false)
];



