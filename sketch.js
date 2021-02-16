//MY DREAM GAME @NINADMANOJGUGALE#41
// declaring the variables
var database;
var Drawing = [];
var currentPath = [];
var isDrawing = false;
var weight;
var color;
var a, b, c, d, e, f, g, h, i;
var circle, square, triangle, rectangle, trapeqium, star, cloud;
var watermelon, lemon, apple, banana, strawberry, mango, grapes, guava;
var wa, le , ap, ba, st1, ma, gr, gu;
var aImg,bImg,gImg,guImg,wImg,sImg,lImg,mImg;


// loading all the images in the preload function
function preload(){
    a = loadImage("images/myBg1.png");
    b = loadImage("images/abcd.jpg");
    d = loadImage("images/ci.png");
    e = loadImage("images/cl.png");
    f = loadImage("images/tra.png");
    g = loadImage("images/tr.png");
    h = loadImage("images/st.png");
    i = loadImage("images/sq.png");
    j = loadImage("images/rect.png");
    sImg = loadImage("fruits/strawberry.png");
    guImg = loadImage("fruits/guava.png");
    gImg = loadImage("fruits/gra.png");
    wImg = loadImage("fruits/watermelon.png");
    lImg = loadImage("fruits/lemon.png");
    aImg = loadImage("fruits/apple.png");
    bImg = loadImage("fruits/banana.png");
    mImg = loadImage("fruits/m.png");
}

function setup() {
    // initialising the database
    database = firebase.database();
    // creating the canvas and to draw and stop drawing
    canvas = createCanvas(1500, 725);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    // colourful column
    c = createSprite(1450, 362, 300, 725 );
    c.addImage(b);
    c.scale = 2.5;
    
    // creating shapes
    triangle = createSprite(500,300);
    triangle.addImage(g);
    triangle.scale = 0.4;
    circle = createSprite(500,300);
    circle.addImage(d);
    circle.scale = 0.4;
    trapeqium = createSprite(500,300);
    trapeqium.addImage(f);
    trapeqium.scale = 0.7;
    square = createSprite(500,300);
    square.addImage(i);
    square.scale = 0.4;
    cloud = createSprite(500,300);
    cloud.addImage(e);
    cloud.scale = 0.4;
    star = createSprite(500,300);
    star.addImage(h);
    star.scale = 0.6;
    rectangle = createSprite(500,300);
    rectangle.addImage(j);
    rectangle.scale = 0.9;
    // making them invisible
    triangle.visible = false;
    circle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    rectangle.visible = false;
    cloud.visible = false;
    star.visible = false;

    // making fruit sprites
    watermelon = createSprite(500,300);
    watermelon.addImage(wImg);
    watermelon.scale = 0.4;
    lemon = createSprite(500,300);
    lemon.addImage(lImg);
    lemon.scale = 0.4;
    mango = createSprite(500,300);
    mango.addImage(mImg);
    mango.scale = 0.2;
    apple = createSprite(500,300);
    apple.addImage(aImg);
    apple.scale = 0.4;
    banana = createSprite(500,300);
    banana.addImage(bImg);
    banana.scale = 0.6;
    strawberry = createSprite(550,300);
    strawberry.addImage(sImg);
    strawberry.scale = 0.5;
    grapes = createSprite(500,300);
    grapes.addImage(gImg);
    grapes.scale = 0.6;
    guava = createSprite(500,300);
    guava.addImage(guImg);
    guava.scale = 0.4;

    // making them invisible
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;


    //creating title
    var title3 = createButton('your drawing name:');
    title3.position(30,10);
    var title4 = createInput("");
    title4.position(30,40);
    // the clearButton
    var clearButton = createButton('CLEAR MY PAINTING');
    clearButton.position(1350,140, 200, 30);
    clearButton.mousePressed(clearDrawing);
    // shape Button
    var Shape = createButton('SHAPE');
    Shape.position(1400, 180);
    // fruit
    var Fruit = createButton('FRUITS');
    Fruit.position(1300, 180);
    // button 
    var title = createButton(' #NINAD CREATION');
    title.position(1370, 710);

    //creating shapeButtons
    var tri = createButton('TRIANGLE');
    tri.position(1400, 220);
    tri.style('background', 'LIGHTGREEN');
    var sq = createButton('SQUARE');
    sq.position(1400, 240);
    sq.style('background', 'LIGHTGREEN');
    var tra = createButton('TRAPEQIUM');
    tra.position(1400, 260);
    tra.style('background', 'LIGHTGREEN');
    var ci = createButton('CIRCLE');
    ci.position(1400, 340);
    ci.style('background', 'LIGHTGREEN');
    var cl = createButton('CLOUD');
    cl.position(1400, 300);
    cl.style('background', 'LIGHTGREEN');
    var st = createButton('STAR');
    st.position(1400, 320);
    st.style('background', 'LIGHTGREEN');
    var rect = createButton('RECTANGLE');
    rect.position(1400, 280);
    rect.style('background', 'LIGHTGREEN');
    // hiding them
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    
    wa = createButton('WATERMELON');
    wa.position(1270, 220);
    wa.style('background', 'SKYBLUE');
    le = createButton('LEMON');
    le.position(1270, 240);
    le.style('background', 'SKYBLUE');
    gr = createButton('GRAPES');
    gr.position(1270, 260);
    gr.style('background', 'SKYBLUE');
    gu = createButton('GUAVA');
    gu.position(1270, 340);
    gu.style('background', 'SKYBLUE');
    st1 = createButton('STRAWBERRY');
    st1.position(1270, 300);
    st1.style('background', 'SKYBLUE');
    ma = createButton('MANGO');
    ma.position(1270, 320);
    ma.style('background', 'SKYBLUE');
    ap = createButton('APPLE');
    ap.position(1270, 360);
    ap.style('background', 'SKYBLUE');
    ba = createButton('BANANA');
    ba.position(1270, 280);
    ba.style('background', 'SKYBLUE');
    // hiding them
    wa.hide();
    le.hide();
    gr.hide();
    gu.hide();
    st1.hide();
    ma.hide();
    ap.hide();
    ba.hide();

    var input = createInput("");
    input.hide();
    var Button1  = createButton("BROADERNESS");
    var buttton2  = createButton("APPLY");
    buttton2.hide();
    // positions
    input.position(1300,150, 200, 20);
    Button1.position(1370, 100, 100, 30);
    buttton2.position(1300,200, 100, 20);

    //when shape is mouse pressed
    Shape.mousePressed(function(){
    tri.show();
    sq.show();
    tra.show();
    ci.show();
    cl.show();
    st.show();
    rect.show();
    });
    // when triangle button is mouse pressed
    tri.mousePressed(function(){
    triangle.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    Shape.show();
    rectangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    cloud.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
   //when star button is mouse pressed
    st.mousePressed(function(){
    star.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    Shape.show();
    rectangle.visible = false;
    trapeqium.visible = false;
    triangle.visible = false;
    cloud.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
    //when rectangle button is mouse pressed
    rect.mousePressed(function(){
    rectangle.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    Shape.show();
    rect.hide();
    triangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    cloud.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
    //when cloud button is mouse pressed
    cl.mousePressed(function(){
    cloud.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    Shape.show();
    rectangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    triangle.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
    //when circle button is mouse pressed
    ci.mousePressed(function(){
    circle.visible = true;
    Shape.show();
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    Shape.show();
    cloud.visible = false;
    rectangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    triangle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
     //when square button is mouse pressed
    sq.mousePressed(function(){
    square.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    Shape.show();
    st.hide();
    rect.hide();
    cloud.visible = false;
    rectangle.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    triangle.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
     //when trapeqium button is mouse pressed
    tra.mousePressed(function(){
    trapeqium.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    Shape.show();
    cloud.visible = false;
    rectangle.visible = false;
    square.visible = false;
    star.visible = false;
    triangle.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });    

    //when fruit is mouse pressed
    Fruit.mousePressed(function(){
    wa.show();
    le.show();     
    st1.show();
    ma.show();
    gu.show();
    gr.show();
    ap.show();
    ba.show();
    });
    //when shape is mouse pressed
    st1.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = true;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });

        gu.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = true;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });

        gr.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = true;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
                });

        ap.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
         ba.hide();
        apple.visible = true;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
         guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
         });

        ba.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        apple.visible = false;
        banana.visible = true;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });

        ma.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = true;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });
        
        le.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        lemon.visible = true;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });

        wa.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        watermelon.visible = true;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });

     // when broderness button is mouse pressed   
    Button1.mousePressed(function(){
    input.show();
    colorButton.hide();
    Fruit.hide();
    clearButton.hide();
    buttton2.show();
    Shape.hide();
    });
     //when apply button is mouse pressed
    buttton2.mousePressed(function(){
        input.hide();
        buttton2.hide();
        Fruit.show();
        clearButton.show();
        colorButton.show();
        Shape.show();
        console.log("broderness been SET");
        weight  = input.value();  
    });

    //creating colour button, different colours and functions when they are mouse pressed
    var colorButton  = createButton("COLOUR");
    colorButton.position(1400, 60);
    colorButton.mousePressed(function(){
    var green = createButton("GREEN");
    green.position(1000,150);
    green.style('background', 'green');

    var blue = createButton("BLUE");
    blue.position(1100,150);
    blue.style('background', 'blue');

    var red = createButton("RED");
    red.position(1200,150);
    red.style('background', 'red');

    var yellow = createButton("YELLOW");
    yellow.position(1000,190);
    yellow.style('background', 'yellow');

    var purple = createButton("PURPLE");
    purple.position(1100,190);
    purple.style('background', 'purple');

    var pink = createButton("PINK");
    pink.position(1200,190);
    pink.style('background', 'pink');

    var brown = createButton("BROWN");
    brown.position(1000,230);
    brown.style('background', 'brown');

    var white = createButton("WHITE");
    white.position(1100,230);
    white.style('background', 'white');

    var orange = createButton("ORANGE");
    orange.position(1200,230);
    orange.style('background' , 'orange')

    var gold = createButton("GOLD");
    gold.position(1000,270);
    gold.style('background', 'gold');

    var violet = createButton("VIOLET");
    violet.position(1100,270);
    violet.style('background', 'purple');

    var ruby = createButton("LAVENDER");
    ruby.position(1200,270);
    ruby.style('background', 'lavender');

    var tur = createButton("TURQUOISE");
    tur.position(1000,310);
    tur.style('background', 'skyblue');

    var copper = createButton("COPPER");
    copper.position(1100, 310);
    copper.style('background', 'orange');

    var peach = createButton("PEACH");
    peach.position(1200,310);
    peach.style('background', 'LIGHTYELLOW');


    green.mousePressed(function(){
        stroke("green");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        ruby.hide();
        peach.hide();
        brown.hide();
        white.hide();
        gold.hide();
        orange.hide();
        Button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
    });

    tur.mousePressed(function(){
        stroke("turquoise");
        green.hide();
        blue.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        gold.hide();
        orange.hide();
        Shape.show();
        Fruit.show();
        Button1.show();
        eraser.show();
        clearButton.show();  
    });

    red.mousePressed(function(){
        stroke("red");   
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        ruby.hide();
        tur.hide();
        violet.hide();
        peach.hide();
        copper.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        white.hide();
        orange.hide();
        Button1.show();
        Shape.show();
        Fruit.show();
        clearButton.show();  
     });

    gold.mousePressed(function(){
        stroke("gold");  
        red.hide(); 
        green.hide();
        blue.hide();
        gold.hide();
        yellow.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        purple.hide();
        ruby.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
     });

    yellow.mousePressed(function(){
        stroke("yellow");  
        green.hide();
        blue.hide();
        ruby.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        gold.hide();
        white.hide();
        orange.hide();
        Button1.show();
        Shape.show();
        Fruit.show();
        clearButton.show();
     });

     blue.mousePressed(function(){
        stroke("blue");  
        white.hide();
        orange.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        ruby.hide();
        Button1.show();
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        gold.hide();
        pink.hide();
        brown.hide();
        Fruit.show();
        Shape.show();
        clearButton.show(); 
     });

    ruby.mousePressed(function(){
        stroke("lavender");   
        green.hide();
        blue.hide();
        red.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        yellow.hide();
        purple.hide();
        ruby.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        white.hide();
        orange.hide();
        Fruit.show();
        Button1.show();
        Shape.show();
        clearButton.show();  
     });


    purple.mousePressed(function(){
        stroke("purple");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        gold.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        orange.hide();
        Button1.show();
        Shape.show();
        Fruit.show();
        clearButton.show();
     });

     violet.mousePressed(function(){
        stroke("purple");   
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        white.hide();
        orange.hide();
        Button1.show();
        Shape.show();
        Fruit.show();
        clearButton.show();  
     });

     orange.mousePressed(function(){
        stroke("orange");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        ruby.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        white.hide();
        gold.hide();
        orange.hide();
        Button1.show();
        Shape.show();
        Fruit.show();
        clearButton.show();
    });

    pink.mousePressed(function(){
        stroke("pink");
        green.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        ruby.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        gold.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        Shape.show();
        Fruit.show();
        clearButton.show();
     });

    brown.mousePressed(function(){
        stroke("brown");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        white.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        orange.hide();
        Button1.show();
        eraser.show();
        Fruit.show();
        Shape.show();
        clearButton.show();
    });

    white.mousePressed(function(){
        stroke("white");    
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        brown.hide();
        gold.hide();
        white.hide();
        orange.hide();
        Shape.show();
        Fruit.show();
        Button1.show();
        clearButton.show();     
    });
      
    peach.mousePressed(function(){
        stroke("LIGHTYELLOW");
        green.hide();
        blue.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        red.hide();
        peach.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        ruby.hide();
        gold.hide();
        orange.hide();
        Button1.show();
        Shape.show();
        Fruit.show();
        clearButton.show();  
    });
      
    copper.mousePressed(function(){
        stroke("orange");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        peach.hide();
        ruby.hide();
        purple.hide();
        copper.hide();
        pink.hide();
        violet.hide();
        tur.hide();
        brown.hide();
        white.hide();
        gold.hide();
        orange.hide();
        Fruit.show();
        Button1.show();
        clearButton.show();  
        Shape.show();
    });
       // hiding them
        Button1.hide();
        buttton2.hide();
        clearButton.hide();
        Shape.hide();
        Fruit.hide();
   });

}
 
function draw() {
    background(255);
    
    text("ALWAYS USE BRODERNESS BUTTON TO COLOUR. IT IS SET AS DEFAULT TO 0. SO ALWAYS INCREASE IT TO INCREASE YOUR COLOUR BRODERNESS!", 360, 720);

      if (isDrawing) {
          var Path = {
              x: mouseX,
              y: mouseY
          };
          currentPath.push(Path);
      }
  
      strokeWeight(weight);
      noFill();
  
    for (var i = 0; i < Drawing.length; i++) {
      var path = Drawing[i];
      beginShape();
  
        for (var j = 0; j < path.length; j++) {
            vertex(path[j].x, path[j].y);
       }
          endShape();
      }

      drawSprites();

  }
  
  function clearDrawing() {
      Drawing = [];
  }
  function startPath() {
    isDrawing = true;
    currentPath = [];
    Drawing.push(currentPath);
}

function endPath() {
    isDrawing = false;
}
