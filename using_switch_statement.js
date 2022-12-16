let month = new Date().getMonth()

switch(month) {
    case 0:
    case 1:
    case 2:
        console.log('Summer');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Autumn');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Spring');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Winter');
        break;
    default:
        console.log('This computer must have been manufactured from another planet!');
}