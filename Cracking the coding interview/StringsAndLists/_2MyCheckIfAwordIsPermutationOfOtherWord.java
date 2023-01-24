package crackingTheCodingInterview.stringsAndLists.exercises;

import org.json.JSONObject;

import java.util.Iterator;

public class _2MyCheckIfAwordIsPermutationOfOtherWord {
    public static void main(String[] args) throws Exception{
        String word1 = "cama";
        String word2 = "amac";
        boolean result = hasPermutation(word1, word2);
        System.out.println("result = " + result);
    }
    static boolean hasPermutation(String word1, String word2) throws Exception {
        if(word1.length() != word2.length())
            throw new Exception("The word 2 is not permutation of word 1");
        JSONObject w1 = convertStringToJson(word1);
        JSONObject w2 = convertStringToJson(word2);

        Iterator<String> keys = w1.keys();
        String key;
        while (keys.hasNext()){
            key = keys.next();
            if(!w1.get(key).equals(w2.get(key))){
                return false;
            }
        }
        return true;
    }
    static JSONObject convertStringToJson(String word){
        String[] wordSplited = word.split("");
        JSONObject object = new JSONObject();

        String property;
        int value;
        for(int i = 0; i < wordSplited.length; i++){
            property = wordSplited[i];

            if(object.has(property)){
                value = Integer.parseInt(object.get(property).toString());
                object.put(property, value + 1);
            }else{
                object.put(property, 1);
            }
        }
        System.out.println(object);
        return object;
    }
}
