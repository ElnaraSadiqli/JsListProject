let tv = [];

let Id = 1;

function channeldata(_clName, _bcName, _drating, _wrating, _mrating) {

    tv.push({
        channelName: _clName,
        broadcastChannel: _bcName,
        dailyRating: _drating,
        weeklyRating: _wrating,
        monthlyRating: _mrating

    })

    Id++;


}

function channeltakedata(e) {
    e.preventDefault()
    let cl_Name = document.querySelector("#channel_name");
    let bc_Name = document.querySelector("#broadcast_name");
    let dRating = document.querySelector("#dbroadcast_rating");
    let wRating = document.querySelector("#wbroadcast_rating");
    let mRating = document.querySelector("#mbroadcast_rating");

channeldata(cl_Name.value,bc_Name.value,dRating.value,wRating.value,mRating.value);

    console.log(tv)



}