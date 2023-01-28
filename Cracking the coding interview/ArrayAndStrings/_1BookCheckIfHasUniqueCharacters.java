// package crackingTheCodingInterview.stringsAndLists.exercises;

public class _1BookCheckIfHasUniqueCharacters {
    public static void main(String[] args) {
        boolean result = isUnique("palabra");
        System.out.println("--------------result " + result);
    }
    static boolean isUnique(String word){
        if(word.length() > 127) return false;

        boolean[] charsReviewed = new boolean[127];
        boolean[] help = new boolean[5];

        for(int i = 0; i < word.length(); i++){
            int asciiCode = word.charAt(i); //getting ascii code

            if(charsReviewed[asciiCode]){
                return false;
            }else{
                charsReviewed[asciiCode] = true;
            }
        }
        return true;
    }
}
