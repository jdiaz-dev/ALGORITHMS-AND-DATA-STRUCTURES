package crackingTheCodingInterview.stringsAndLists.exercises;

public class _3MyReplaceSpaceWithSpecialString {
    public static void main(String[] args) {
        String sentece = "hi John Week   a";
        String result = replaceSpaces(sentece, sentece.length());
        System.out.println("-----------result " + result);
    }
    public static String replaceSpaces(String word, int wordLenght){
        String specialSpace = "%20", parcialResult, result = "";
        String[] wordSplited = word.split(" ");


        for(int i = 0; i < wordSplited.length; i++){
            if(!isValidIndex(wordSplited.length, i + 1)){
                result += wordSplited[i];
            }else if(!wordSplited[i].equals(" ")){
                parcialResult = wordSplited[i].concat(specialSpace);
                result = result + parcialResult;
            }else{
                wordSplited[i] = specialSpace;
                result = result + wordSplited[i];
            }
        }

        return result;
    }
    public static boolean isValidIndex(int lengthArray, int index) {
        return index < lengthArray;
    }
}
//analize performance