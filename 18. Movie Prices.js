function moviePrices(arr) {
    let movie = arr[0]
    movie=movie.toString().toLowerCase()
    let day = arr[1]
    day=day.toString().toLowerCase()

    if(movie== 'the godfather')
        switch (day) {
            case 'monday':
                price = 12;
                break;
            case 'tuesday':
                price = 10;
                break;
            case 'wednesday':
                price = 15;
                break;
            case 'thursday':
                price = 12.50;
                break;
            case 'friday':
                price = 15;
                break;
            case 'saturday':
                price = 25;
                break;
            case 'sunday':
                price = 30;
                break;
            default:
                price = 'error';
        }

    else if(movie=='schindler\'s list')
        switch (day) {
            case 'monday':
                price = 8.50;
            case 'tuesday':
                price = 8.50;
            case 'wednesday':
                price = 8.50;
            case 'thursday':
                price = 8.50;
            case 'friday':
                price = 8.50;
                break;
            case 'saturday':
                price = 15;
            case 'sunday':
                price = 15;
                break;
            default:
                price = 'error';
        }
    else if(movie=='casablanca')
        switch (day) {
            case 'monday':
                price = 8;
            case 'tuesday':
                price = 8;
            case 'wednesday':
                price = 8;
            case 'thursday':
                price = 8;
            case 'friday':
                price = 8;
                break;
            case 'saturday':
                price = 10;
            case 'sunday':
                price = 10;
                break;
            default:
                price = 'error';
        }
    else if(movie== 'the wizard of oz')
        switch (day) {
            case 'monday':
                price = 10;
            case 'tuesday':
                price = 10;
            case 'wednesday':
                price = 10;
            case 'thursday':
                price = 10;
            case 'friday':
                price = 10;
                break;
            case 'saturday':
                price = 15;
            case 'sunday':
                price = 15;
                break;
            default:
                price = 'error';
        }
    else
        price="error"

    if(typeof price=='number' && price !=0) {
        console.log(price.toFixed(2))
    }
    else{
        console.log("error")
    }
}


moviePrices(["casablanca","sunday"])