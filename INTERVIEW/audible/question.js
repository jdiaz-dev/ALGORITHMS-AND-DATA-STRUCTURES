/* 

You are given a potentially large list of words. Some of these are compounds, where all parts are also in the list. Identify all combinations where one words can be composed of two or more words of the same list and print or return them 

Input: [rockstar, rock, star, rocks, tar, stars, rockstars, super, highway, high, way, superhighway] 
Output: 
    rockstar -> rock + star 
    rockstar -> rocks + tar 
    superhighway -> super + highway 
    superhighway -> super + high + way

If returning, the output would be a list of lists, e.g. 
[ 
    [rock, star], -> rockstar 
    [rocks, tar], -> rockstar 
    [super, highway], -> superhighway 
    [super, high, way], -> superhighway ... 
] 
    
    
    rockstar 
        -> rock + star -> rocks + tar 
    superhighway 
        -> super + high + way -> super + highway


*/