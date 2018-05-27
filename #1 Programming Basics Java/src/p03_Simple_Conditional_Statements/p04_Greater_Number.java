package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p04_Greater_Number {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int first = Integer.parseInt(input.nextLine());
        int second = Integer.parseInt(input.nextLine());

        if (first > second) {
            System.out.println(first);
        } else {
            System.out.println(second);
        }
    }
}