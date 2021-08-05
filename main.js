function preload()
{}

    function setup()
    {
        canvas = createCanvas(640, 480);
        canvas.position(110, 250);
        video = createCapture(VIDEO);
        video.hide();

        tint_color = "";
    }

    function draw()
    {
        image(video, 230, 150, 350, 200);
        tint(tint_color);
        fill(100);
        circle(30, 30, 50);
        circle(600, 30, 50);
        circle(30, 400, 50);
        circle(600, 400, 50);
        fill(0, 128, 0); 
        stroke(0, 128, 0); 
        rect(90, 40, 460, 20); 
        rect(90, 420, 460, 20); 
        rect(40, 90, 20, 300); 
        rect(580, 90, 20, 300);
    }
    function take_snapshot()
    {
        save('izyan.png');
    }

    function filter_tint()
    {
        tint_color = document.getElementById("color_name").value;
    }
