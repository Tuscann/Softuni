package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p05_Number_0_9_to_Text {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());

        String[] myIntArray = new String[]{"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "number too big"};

        if (n >= 0 && n < 10){
            System.out.println(myIntArray[n]);
        }
        else System.out.println(myIntArray[10]);

    }
}
