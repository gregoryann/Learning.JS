/*

 7kyu - Coloured Triangles

 If you finish this kata, you can try Insane Coloured Triangles by Bubbler, 
 which is a harder version of this one.

 A coloured triangle is created from a row of colours, each of which is red, 
 green or blue. Successive rows, each containing one fewer colour than the last,
 are generated by considering the two touching colours in the previous row. If 
 these colours are identical, the same colour is used in the new row. If they 
 are different, the missing colour is used in the new row. This is continued 
 until the final row, with only a single colour, is generated.

 For example, different possibilities are:

 Colour here:            G G        B G        R G        B R
 Becomes colour here:     G          R          B          G
 With a bigger example:

 R R G B R G B B
  R B R G B R B
   G G B R G G
    G R G B G
     B B R R
      B G R
       R B
        G
 You will be given the first row of the triangle as a string and its your 
 job to return the final colour which would appear in the bottom row as a 
 string. In the case of the example above, you would the given 'RRGBRGBB' you 
 should return 'G'.

 The input string will only contain the uppercase letters 'B', 'G' or 'R' and 
 there will be at least one letter so you do not have to test for invalid input.
 If you are only given one colour as the input, return that colour.
 Adapted from the 2017 British Informatics Olympiad

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


function color(a) {
  if(a[0] == a[1]) return a[0];
  if((a == 'BG' || a == 'GB')) return 'R';
  if((a == 'RG' || a == 'GR')) return 'B';
  else return 'G';
}

function triangle(row) {
  let res = '';
  for (let i = 1; i < row.length; i++)
    res += color(row[i - 1] + row[i]);
  return (row.length == 1) ? row : triangle(res);
}