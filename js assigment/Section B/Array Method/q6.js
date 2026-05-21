let page = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];



function pages(pg,pagnum,pagesi){
let st = (pagnum - 1)*pagesi;         // page 1 : 1-1 * 3  => 0      we dont take -1 so 3 * 3  => 3
let end = pagnum  * pagesi;           // page 1 : 1 * 3               so that is        3 *3  => 3
return pg.slice(st,end)
}



console.log(pages(page,3,6));
