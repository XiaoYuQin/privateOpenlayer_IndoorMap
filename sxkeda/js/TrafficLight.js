function handleTrafficLight(map)
{
    map.on('postcompose', function(event)
    {
        // debug.i("handleTrafficLight");
    
        map.render();
    });
    map.render();
}