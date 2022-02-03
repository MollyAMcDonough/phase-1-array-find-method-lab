// code your solution here
function superbowlWin(games) {
    const record = games.find(item=>item.result==='W');
    return record ? record.year : record;
};
