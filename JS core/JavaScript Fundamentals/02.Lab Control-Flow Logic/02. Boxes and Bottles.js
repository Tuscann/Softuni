function boxes([bottles,quantity])
{
    let boxses = bottles / quantity;
    console.log(Math.ceil(boxses));
}
boxes(['20', '5']);
boxes(['15', '7']);
boxes(['5', '10']);
