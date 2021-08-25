function fun(x)
{
    console.log("first");
    x();
}

function second()
{
    console.log("second");
}

fun(second());

// second()

// here "second" is a callback method for fun