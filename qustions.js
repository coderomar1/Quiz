
class Questions{
    constructor(q,c1,c2,c3,c4){
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

const arr = [
    // Mid 1
    // new Choices("A storage with no moving parts " /*<- question */,"Magnetic storage","Optical storage","Digital versatile disc","Solid-state storage"),
    // new Choices("The multimedia effect includes the following " /*<- question */," Identification, Categorization, Preservation","Input, processing, storing, output","None of the choices","compatibility, creation, distribution"),
    // new Choices("Effective file maintenance involves:" /*<- question */," Input, processing, storing, output"," compatibility, creation, distribution"," None of the choices","Identification, Categorization, Preservation"),
    // new Choices(". A container for binary codes" /*<- question */," File size"," Program files"," File extensions"," Digital files"),
    // new Choices(" The type of files that contains executable instructions" /*<- question */," File size"," File compatibility"," File extensions"," Program files"),
    // new Choices(" Process of re-encoding digital data to reduce file size is called:" /*<- question */," Sample resolution"," Sample rate"," None of the choices listed"," File compression"),
    // new Choices("An encoding that displays the full range a human eye can perceive" /*<- question */," 16-bit sound"," ASCII-8"," Unicode"," 24-bit color"),
    // new Choices(" ASCII-8 (8 bit code) can represent"," Over 65,000 different characters" /*<- question */," Plays the full decibel range the human ear can perceive"," 128 letters, numbers, & symbols in English language"," 256 letters, numbers, & symbols in English language"),
    // new Choices("Number of bits used to represent digital sample is called:" /*<- question */," Sample Rate"," Sample formats"," Sample sound"," Sample Resolution"),
    // new Choices("It is data made useful, interpreted, and applied to produce understanding"/*<- question */," Symbols"," Data "," Digital files"," Information"),
    // new Choices(" A type of storage that holds data and instructions outside the system unit for long periods of time" /*<- question */," Hard drive storage"," Optical storage"," Magnetic storage"," Secondary storage"),
    // new TrueAndFalse(" Series of letters to designate the file format"/*<- question */,true),
    // new TrueAndFalse(" Ability to use the file in a different platform of hardware and software"/*<- question */,true),
    // new TrueAndFalse("Information is the givens of experience such as, measurements, facts, observations"/*<- question */,false),
    // new TrueAndFalse("Digital data consists of discrete and separate units " /*<- question */,true),
    // new TrueAndFalse("Lossy is the efficient encoding reduces file size without loss of original data " /*<- question */,false),
    // new TrueAndFalse("Adding 2 to the power doubles the number of distinct data items that can be encoded"/*<- question */,false),
    // new TrueAndFalse("In non-linear multimedia, the user has no control over the flow of information"/*<- question */,false),
    // new TrueAndFalse("Interactive multimedia is non-linear which means user is a participant in the flow of information"/*<- question */,true),
    // new TrueAndFalse("Analog data is characterized by a function that varies continuously"/*<- question */,true),
    // new TrueAndFalse(" Digital encoding assigns bits to data items"/*<- question */,true),
    // new TrueAndFalse("Codec is a program to compress a file into a smaller size and decompress it into a usable form"/*<- question */,true),
    // new TrueAndFalse("Contemporary Multimedia is the development, integration, and delivery of any combination of text, graphics, animation, sound or video through a computer or other electronic means"/*<- question */,true),
    // new TrueAndFalse("the best compression strategy best suited for an important database of student names and addresses is lossy",true),
    // new TrueAndFalse("Interactive multimedia enhances learning, memory & retention by 15 percent",false),
    // new TrueAndFalse("Laser printer is an example of impact printers",false),
    // new TrueAndFalse(`Ports that are powered through the interface port and that means no more "wall warts"`,true),
    // Mid 2
    new Choices("Images that are created from mathematically defined shapes. what is it called?","Vector","Vector images","Drawing programs","Vector graphics"),
    new Choices("It is a means to communicate with the programs and hardware.","Programing languages","Low-Level","High-Leve","User interface"),
    new Choices("What type of software that provides a user interface and manage computer resources","program","Application","Software","Operating system"),
    new Choices("The number of colors each pixel can display","Color scheme","Dimensions","Spatial resolution","Color resolution"),
    new Choices("A complete set of characters of a particular typeface, style and size style, and size.","Size","Kerning","Typeface","Font"),
    new Choices("Programming language that requires an assembler to convert the abbreviations to binary code","Machine code","Interpreter","Compiler","Assembly language"),
    new Choices("Squares that display curved or diagonal lines produce a stair-stepped effect is called ...","Text","Inch","Alignment","Jaggies"),
    new Choices("Creating a smooth edge by blending the color of the text with the color of the background is called","Jaggies","pixels","pattern","anti-aliasing"),
    new Choices("list of instructions that can be carried out by the computer","Operating system","Software","Application","Program"),
    new Choices("The density of pixels per inch","Color resolution","Dimensions","Color scheme","Spatial resolution"),
    new Choices(" A method that converts and executes one line of code at a time","Assembly language","Compiler","Machine code","Interpreter"),
    new Choices("A collection of computer programs that govern the operation of a computer","Application","Programming languages","Program","Software"),
    new Choices("The spacing between specific letters is called","Leading","Tracking","Alignment","Kerning"),
    new Choices("The spacing between lines","Tracking","Kerning","Alignment","Leading"),
    new Choices("The appearance of characters such as, bold and italic is called...","Point size","Font","Size","Style"),
    new Choices("A method that converts entire program to an executable file","Machine code","Interpreter","Assembly language","Compiler"),
    new Choices("Characters that do not have any decoration","Script Typefaces","Symbol Typefaces","Serif Typefaces","Sans Serif Typefaces"),
    new Choices("It is a binary code the processor directly executes","Compiler","Interpreter","Assembly language","Machine code"),
    new TrueAndFalse("Programs designed to facilitate the creation of multimedia products is Authoring Software",true),
    new TrueAndFalse("High-Level Languages contain more English-like commands",true),
    new TrueAndFalse("Vector graphics can be used with different devices without altering the image dimension",true),
    new TrueAndFalse("CMYK refers to the four ink plates used in some color printing: cyan, magenta, yellow, and black",true),
    new TrueAndFalse("RGB is a subtractive color system",false),
    new TrueAndFalse("SVG is an example of bitmapped graphics files",false),
    new TrueAndFalse("(24-bit color) can produce about 281 trillion color possibilities",false),
    new TrueAndFalse("In font size, 1 point is 1 inch",false),
    new TrueAndFalse("ppi is a unit used to measure spatial resolution of print output",false),
    new TrueAndFalse("Assembly language is a high-level programming language that includes text abbreviations for binary commands",false),
    new TrueAndFalse("Bitmapped images can be enlarged without distortion",false),
    new TrueAndFalse("One of the advantage of vector graphics (images) the small sizes",false),
    new TrueAndFalse("Object-Oriented languages includes self contained programmed objects are reused in an application",true),
];



