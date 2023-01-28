package crackingTheCodingInterview.stringsAndLists.exercises;

import java.util.Arrays;

public class _3My2ReplaceSpaceWithSpecialString {
    static void fullWithSpecialSpaces(char[] sentence, int trueLength){
        int availableSpaces = 0, index;

        for(int j = trueLength - 1; j > 0; j--){
            if(sentence[j] == ' '){
                availableSpaces++;
            }
        }
        availableSpaces = sentence.length - trueLength + availableSpaces; //assuming available spaces
        index = sentence.length - 1;

        for(int i = trueLength - 1; i > 0; i--){
            if(sentence[i] == ' '){
                sentence[index] = '0';
                sentence[index - 1] = '2';
                sentence[index - 2] = '%';
                index -= 3;
                availableSpaces -= 3;

            }else if(availableSpaces > 0){
                sentence[index] = sentence[i];
                sentence[i] = ' ';
                index--;
            }
        }
    }
    static int checktrueLenght(char[] arr){
        for(int i = arr.length - 1; i > 0; i--){
            if(arr[i] != ' '){
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        String sentence = "Mr John Smith    ";
        char[] sentenceInChar = sentence.toCharArray();
        System.out.println("----------prev" + Arrays.toString(sentenceInChar));
        int trueLenght = checktrueLenght(sentenceInChar) + 1;
        fullWithSpecialSpaces(sentenceInChar, trueLenght);
        System.out.println("----------result " + Arrays.toString(sentenceInChar));

    }
}
