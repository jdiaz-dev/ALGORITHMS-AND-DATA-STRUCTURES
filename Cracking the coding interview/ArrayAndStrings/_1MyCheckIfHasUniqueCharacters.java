package crackingTheCodingInterview.stringsAndLists.exercises;

import org.json.JSONObject;

public class _1MyCheckIfHasUniqueCharacters {
    public static void main(String[] args) {
        boolean charsIsUnique = checkWord("anim");
        System.out.println("-------charsIsUnique " +charsIsUnique);
    }
    public static boolean checkWord(String word){
        JSONObject object = new JSONObject();

        int amount = 0;
        for(String cha: word.split("")){
            if(object.has(cha)){
                return false;
            }else{
                object.put(cha, 1);
            }
        }
        //System.out.println("-----------obj" + object);
        return true;
    }
}


