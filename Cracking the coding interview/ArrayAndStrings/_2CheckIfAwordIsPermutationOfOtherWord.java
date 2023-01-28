package crackingTheCodingInterview.stringsAndLists.exercises;

public class _2CheckIfAwordIsPermutationOfOtherWord {
    public static void main(String[] args) {
        String w1 = "cama", w2 = "maca";
        boolean result = isPermutation(w1, w2);
        System.out.println("--------result " + result);
    }
    static boolean isPermutation(String w1, String w2){
        if(w1.length() != w2.length()) return false;

        int[] charArray = new int[128];

        int character;
        for(int i = 0; i < w1.length(); i++){
            character = w1.charAt(i);

            if(charArray[character] != 0){
                charArray[character] += 1;
            }else{
                charArray[character] = 1;
            }
        }

        for(int j = 0; j < w2.length(); j++){
            character = w2.charAt(j);

            charArray[character] -= 1;
            if(charArray[character] < 0){
                return false;
            }
        }
        return true;
    }

}
