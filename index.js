const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(objArray)
  {

    for (let i = 0; i < objArray.length; i++)
    {
        if (objArray[i].result == "W"){
            return objArray[i].year;
        }
    }
  }